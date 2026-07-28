import assert from "node:assert/strict";
import test from "node:test";

import { mergeMcpLayers } from "./McpServersSettingsCard.tsx";

const server = (name, enabled = true, command = name) => ({
  name,
  command,
  args: [],
  env: [],
  enabled,
});

test("mergeMcpLayers applies global < definition < agent precedence", () => {
  assert.deepEqual(
    mergeMcpLayers(
      [server("shared", true, "global"), server("global-only")],
      [server("shared", true, "definition")],
      [server("agent-only")],
    ).map(({ name, command }) => ({ name, command })),
    [
      { name: "shared", command: "definition" },
      { name: "global-only", command: "global-only" },
      { name: "agent-only", command: "agent-only" },
    ],
  );
});

test("disabled higher-precedence entry masks inherited server", () => {
  assert.deepEqual(
    mergeMcpLayers([server("shared")], [server("shared", false)]),
    [],
  );
});
