import * as React from "react";
import { RefreshCw, RotateCw, Wrench } from "lucide-react";
import {
  useManagedAgentsQuery,
  usePersonasQuery,
} from "@/features/agents/hooks";
import { McpServersEditor } from "@/features/agents/ui/McpServersEditor";
import { useGlobalAgentConfig } from "@/features/agents/useGlobalAgentConfig";
import { updateManagedAgent } from "@/shared/api/tauri";
import { setGlobalAgentConfig } from "@/shared/api/tauriGlobalAgentConfig";
import {
  callMcpServerTool,
  getMcpRuntimeStatus,
  listMcpServerTools,
  restartMcpServer,
  type McpRuntimeStatus,
  type McpTool,
} from "@/shared/api/tauriMcp";
import { updatePersona } from "@/shared/api/tauriPersonas";
import type { McpServerConfig } from "@/shared/api/types";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";
import { SettingsSectionHeader } from "./SettingsSectionHeader";

type Scope = "global" | "definition" | "agent";

export function mergeMcpLayers(...layers: readonly McpServerConfig[][]) {
  const merged = new Map<string, McpServerConfig>();
  for (const layer of layers)
    for (const server of layer) merged.set(server.name, server);
  return [...merged.values()].filter((server) => server.enabled);
}

function errorText(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  if (/unknown command|not found|unsupported/i.test(message))
    return "Not supported by this Desktop build.";
  return message;
}

export function McpServersSettingsCard() {
  const agentsQuery = useManagedAgentsQuery();
  const personasQuery = usePersonasQuery();
  const { globalConfig } = useGlobalAgentConfig();
  const [scope, setScope] = React.useState<Scope>("global");
  const [scopeId, setScopeId] = React.useState("");
  const [draft, setDraft] = React.useState<McpServerConfig[]>([]);
  const [busy, setBusy] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);
  const agents = agentsQuery.data ?? [];
  const personas = personasQuery.data ?? [];
  const selectedAgent = agents.find((agent) => agent.pubkey === scopeId);
  const selectedPersona = personas.find((persona) => persona.id === scopeId);

  React.useEffect(() => {
    if (scope === "global") setDraft(globalConfig.mcp_servers);
    if (scope === "definition") setDraft(selectedPersona?.mcpServers ?? []);
    if (scope === "agent") setDraft(selectedAgent?.mcpServers ?? []);
  }, [globalConfig.mcp_servers, scope, selectedAgent, selectedPersona]);

  const inherited =
    scope === "global"
      ? []
      : scope === "definition"
        ? globalConfig.mcp_servers
        : mergeMcpLayers(
            globalConfig.mcp_servers,
            personas.find((p) => p.id === selectedAgent?.personaId)
              ?.mcpServers ?? [],
          );

  async function save() {
    setBusy(true);
    setMessage(null);
    try {
      if (scope === "global")
        await setGlobalAgentConfig({ ...globalConfig, mcp_servers: draft });
      else if (scope === "definition" && selectedPersona)
        await updatePersona({
          id: selectedPersona.id,
          displayName: selectedPersona.displayName,
          systemPrompt: selectedPersona.systemPrompt,
          mcpServers: draft,
        });
      else if (scope === "agent" && selectedAgent)
        await updateManagedAgent({
          pubkey: selectedAgent.pubkey,
          mcpServers: draft,
        });
      else throw new Error("Choose a scope target first.");
      setMessage("Saved. Running agents may need an MCP restart.");
    } catch (error) {
      setMessage(errorText(error));
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="min-w-0 space-y-5" data-testid="settings-mcp-servers">
      <SettingsSectionHeader
        title="MCP servers"
        description="Configure stdio servers globally, for a definition, or for one agent. Higher scopes override matching server names; a disabled override removes inherited access."
      />
      <div className="flex flex-wrap gap-2">
        <select
          className="h-9 rounded-lg border border-input bg-background px-3 text-sm"
          value={scope}
          onChange={(e) => {
            setScope(e.target.value as Scope);
            setScopeId("");
          }}
        >
          <option value="global">All agents</option>
          <option value="definition">Agent definition</option>
          <option value="agent">Specific agent</option>
        </select>
        {scope !== "global" ? (
          <select
            className="h-9 min-w-56 rounded-lg border border-input bg-background px-3 text-sm"
            value={scopeId}
            onChange={(e) => setScopeId(e.target.value)}
          >
            <option value="">Choose…</option>
            {(scope === "definition" ? personas : agents).map((item) => (
              <option
                key={"id" in item ? item.id : item.pubkey}
                value={"id" in item ? item.id : item.pubkey}
              >
                {"displayName" in item ? item.displayName : item.name}
              </option>
            ))}
          </select>
        ) : null}
      </div>
      <McpServersEditor
        value={draft}
        onChange={setDraft}
        inheritedServers={inherited}
        inheritedLabel={scope === "agent" ? "global + definition" : "global"}
        disabled={scope !== "global" && !scopeId}
        helperText="Configuration CRUD uses the existing #1785 layered save model."
      />
      <div className="flex items-center gap-3">
        <Button
          disabled={busy || (scope !== "global" && !scopeId)}
          onClick={() => void save()}
        >
          {busy ? "Saving…" : "Save changes"}
        </Button>
        {message ? (
          <p className="text-sm text-muted-foreground">{message}</p>
        ) : null}
      </div>
      <RuntimeTools
        agents={agents}
        globalServers={globalConfig.mcp_servers}
        personas={personas}
      />
    </section>
  );
}

function RuntimeTools({
  agents,
  globalServers,
  personas,
}: {
  agents: ReturnType<typeof useManagedAgentsQuery>["data"] extends infer T
    ? NonNullable<T>
    : never;
  globalServers: McpServerConfig[];
  personas: ReturnType<typeof usePersonasQuery>["data"] extends infer T
    ? NonNullable<T>
    : never;
}) {
  const [agentId, setAgentId] = React.useState("");
  const agent = agents?.find((a) => a.pubkey === agentId);
  const effective = agent
    ? mergeMcpLayers(
        globalServers,
        personas?.find((p) => p.id === agent.personaId)?.mcpServers ?? [],
        agent.mcpServers,
      )
    : [];
  const [serverName, setServerName] = React.useState("");
  const [status, setStatus] = React.useState<McpRuntimeStatus | null>(null);
  const [tools, setTools] = React.useState<McpTool[]>([]);
  const [toolName, setToolName] = React.useState("");
  const [args, setArgs] = React.useState("{}");
  const [output, setOutput] = React.useState("");
  const target = { agentId, serverName };
  async function run(action: "status" | "restart" | "tools") {
    setOutput("");
    try {
      if (agent?.status !== "running") throw new Error("Agent is not running.");
      if (action === "status") setStatus(await getMcpRuntimeStatus(target));
      if (action === "restart") setStatus(await restartMcpServer(target));
      if (action === "tools") setTools(await listMcpServerTools(target));
    } catch (e) {
      setOutput(errorText(e));
    }
  }
  async function callTool() {
    try {
      const parsed: unknown = JSON.parse(args);
      if (!parsed || Array.isArray(parsed) || typeof parsed !== "object")
        throw new Error("Arguments must be a JSON object.");
      const result = await callMcpServerTool({
        ...target,
        toolName,
        arguments: parsed as Record<string, unknown>,
      });
      setOutput(JSON.stringify(result, null, 2));
    } catch (error) {
      setOutput(errorText(error));
    }
  }
  return (
    <div className="space-y-3 border-t border-border/60 pt-5">
      <SettingsSectionHeader
        title="Runtime tools"
        description="Inspect each agent's independent MCP process, restart it, list tools, and make a test call."
      />
      <div className="flex flex-wrap gap-2">
        <select
          className="h-9 min-w-56 rounded-lg border border-input bg-background px-3 text-sm"
          value={agentId}
          onChange={(event) => {
            setAgentId(event.target.value);
            setServerName("");
          }}
        >
          <option value="">Choose agent…</option>
          {agents?.map((item) => (
            <option key={item.pubkey} value={item.pubkey}>
              {item.name}
              {item.status === "running" ? "" : " (not running)"}
            </option>
          ))}
        </select>
        <select
          className="h-9 min-w-48 rounded-lg border border-input bg-background px-3 text-sm"
          value={serverName}
          onChange={(event) => setServerName(event.target.value)}
        >
          <option value="">Choose server…</option>
          {effective.map((server) => (
            <option key={server.name}>{server.name}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          disabled={!serverName}
          onClick={() => void run("status")}
        >
          <RefreshCw className="h-4 w-4" />
          Status
        </Button>
        <Button
          variant="outline"
          disabled={!serverName}
          onClick={() => void run("restart")}
        >
          <RotateCw className="h-4 w-4" />
          Restart
        </Button>
        <Button
          variant="outline"
          disabled={!serverName}
          onClick={() => void run("tools")}
        >
          <Wrench className="h-4 w-4" />
          List tools
        </Button>
        {status ? (
          <span className="text-sm">
            {status.lifecycle}
            {status.error ? ` — ${status.error}` : ""}
          </span>
        ) : null}
      </div>
      {tools.length ? (
        <div className="space-y-2">
          <select
            className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm"
            value={toolName}
            onChange={(event) => setToolName(event.target.value)}
          >
            <option value="">Choose tool…</option>
            {tools.map((tool) => (
              <option key={tool.name}>{tool.name}</option>
            ))}
          </select>
          {toolName ? (
            <p className="text-xs text-muted-foreground">
              {tools.find((tool) => tool.name === toolName)?.description ??
                "No description"}
            </p>
          ) : null}
          <Textarea
            aria-label="Tool arguments JSON"
            value={args}
            onChange={(event) => setArgs(event.target.value)}
          />
          <Button disabled={!toolName} onClick={() => void callTool()}>
            Test tool
          </Button>
        </div>
      ) : null}
      {output ? (
        <pre className="max-h-80 overflow-auto whitespace-pre-wrap rounded-lg bg-muted p-3 text-xs">
          {output}
        </pre>
      ) : null}
    </div>
  );
}
