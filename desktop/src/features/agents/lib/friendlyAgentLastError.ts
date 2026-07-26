/**
 * Promote certain machine-readable `lastError` strings to user-facing copy.
 *
 * The error classification seam flows like this:
 *   buzz-agent — classifies LLM failures into `AgentError` variants with
 *                  JSON-RPC codes (`-32001` auth, `-32002` model-not-found,
 *                  `-32000` generic), defined in `crates/buzz-agent/src/types.rs`.
 *   buzz-acp   — preserves the code structurally in
 *                  `AcpError::AgentError { code, message }`, whose Display is
 *                  `"Agent reported error (code N): message"`, and includes
 *                  `code` in `turn_error` observer events.
 *   desktop supervisor — on nonzero exit, recovers `{ message, code }` from
 *                  the log tail (`managed_agents/storage.rs`) into
 *                  `ManagedAgent.lastError` / `lastErrorCode`.
 *
 * This function dispatches on the numeric code first (works for any harness),
 * then recovers a code embedded in the message string (handles records where
 * the `lastErrorCode` field was lost, e.g. downgrade or pre-code records with
 * new-format strings), then falls back to legacy string prefixes for records
 * written before structured codes existed.
 *
 * Returns:
 *  - null when there's nothing to show (null/empty lastError).
 *  - A `{ severity: "denied"; copy: string }` object for provider auth,
 *    relay-mesh access, and model-not-found cases, so the UI can render with
 *    the right visual weight (destructive).
 *  - A `{ severity: "generic"; copy: string }` pass-through for any other
 *    lastError, so generic harness exits still surface their text instead of
 *    being swallowed.
 */
export type FriendlyAgentLastError =
  | { severity: "denied"; copy: string }
  | { severity: "generic"; copy: string };

/**
 * The exact copy for the relay-mesh denial. Centralized as a constant so the
 * test asserts the user-facing string verbatim rather than a fuzzy pattern.
 */
export const RELAY_MESH_DENIED_COPY =
  "Community access denied this agent — check its community membership.";

export const LLM_AUTH_DENIED_COPY =
  "The model provider denied this request — check the agent's provider credentials and model access.";

export const MODEL_NOT_FOUND_COPY =
  "The configured model is not available — open agent settings and select a different one from the dropdown.";

export const CLI_ACP_INTERNAL_ERROR_COPY =
  "The agent's harness reported an internal error. For Codex agents this can mean the configured model isn't supported by your installed codex-acp — check the model in `~/.codex/config.toml` or upgrade the adapter (`brew upgrade codex-acp`).";

const EMBEDDED_CODE_RE = /^Agent reported error \(code (-?\d+)\): /;
/** Bare form of the standard JSON-RPC -32603 message (after stripping the ACP wrapper prefix). */
const BARE_INTERNAL_ERROR = "Internal error";

function recoverEmbeddedCode(trimmed: string): {
  code: number;
  remainder: string;
} | null {
  const match = EMBEDDED_CODE_RE.exec(trimmed);
  if (!match) return null;
  return {
    code: Number(match[1]),
    remainder: trimmed.slice(match[0].length),
  };
}

function recoverLlmAuthDetail(trimmed: string): string | null {
  const unwrapped = recoverEmbeddedCode(trimmed)?.remainder ?? trimmed;
  const authPrefix = unwrapped.startsWith("Agent reported error: llm auth:")
    ? "Agent reported error: llm auth:"
    : unwrapped.startsWith("llm auth:")
      ? "llm auth:"
      : null;
  if (authPrefix == null) return null;

  const detail = unwrapped.slice(authPrefix.length).trim();
  if (detail.length === 0) return LLM_AUTH_DENIED_COPY;

  try {
    const parsed = JSON.parse(detail);
    const providerError = parsed?.error;
    if (providerError && typeof providerError === "object") {
      const code = providerError.code == null ? "" : String(providerError.code);
      const message =
        typeof providerError.message === "string" ? providerError.message : "";
      const summary = [code, message].filter(Boolean).join(": ");
      if (summary.length > 0) return `${LLM_AUTH_DENIED_COPY} (${summary})`;
    }
  } catch {
    // Provider errors are often plain text rather than JSON.
  }

  return `${LLM_AUTH_DENIED_COPY} (${detail})`;
}

export function friendlyAgentLastError(
  raw: string | null,
  code?: number | null,
): FriendlyAgentLastError | null {
  if (raw == null) return null;
  const trimmed = raw.trim();
  if (trimmed.length === 0) return null;

  // Structured code first; a code embedded in the message string is the
  // same signal recovered from a record that lost the field.
  const embedded = recoverEmbeddedCode(trimmed);
  const effectiveCode = Number.isFinite(code)
    ? (code as number)
    : (embedded?.code ?? null);
  if (effectiveCode != null) {
    switch (effectiveCode) {
      case -32001: {
        const llmAuthCopy = recoverLlmAuthDetail(trimmed);
        if (llmAuthCopy != null) {
          return { severity: "denied", copy: llmAuthCopy };
        }
        return { severity: "denied", copy: RELAY_MESH_DENIED_COPY };
      }
      case -32002:
        return { severity: "denied", copy: MODEL_NOT_FOUND_COPY };
      case -32603: {
        // Standard JSON-RPC "Internal error" — emitted by external harnesses
        // (e.g. codex-acp) when the configured model is unsupported. Only
        // substitute the hint when the message is the bare "Internal error"
        // form; if the adapter included specific detail, preserve it so we
        // don't bury actionable information with a broad codex-specific hint.
        //
        // "Bare" means the remainder after stripping the ACP wrapper prefix
        // (if present) is exactly "Internal error". This covers both the raw
        // form ("Internal error") and the ACP-wrapped form
        // ("Agent reported error (code -32603): Internal error").
        const remainder = embedded?.remainder ?? trimmed;
        if (remainder === BARE_INTERNAL_ERROR) {
          return { severity: "generic", copy: CLI_ACP_INTERNAL_ERROR_COPY };
        }
        return { severity: "generic", copy: remainder };
      }
    }
    // A structured code we don't recognize is authoritative — don't let
    // string patterns cross-classify it.
    return { severity: "generic", copy: trimmed };
  }

  // Legacy string fallback for records written before codes existed.
  // Match either the unwrapped buzz-agent prefix or the buzz-acp v0 wrap.
  const llmAuthCopy = recoverLlmAuthDetail(trimmed);
  if (llmAuthCopy != null) {
    return { severity: "denied", copy: llmAuthCopy };
  }

  return { severity: "generic", copy: trimmed };
}

/**
 * Convenience for `turn_error` / `agent_panic` observer payloads: coerce the
 * payload's untyped `code` JSON value and return the display copy, falling
 * back to the raw error text when no classification applies.
 */
export function friendlyTurnErrorCopy(raw: string, code: unknown): string {
  const numeric = code == null ? null : Number(code);
  const safe = Number.isFinite(numeric) ? (numeric as number) : null;
  return friendlyAgentLastError(raw, safe)?.copy ?? raw;
}
