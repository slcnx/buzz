import { invokeTauri } from "@/shared/api/tauri";

export type McpRuntimeLifecycle =
  | "stopped"
  | "starting"
  | "running"
  | "error"
  | "unsupported"
  | "agent-not-running";

export type McpRuntimeStatus = {
  agentId: string;
  serverName: string;
  lifecycle: McpRuntimeLifecycle;
  error: string | null;
};

export type McpTool = {
  name: string;
  description: string | null;
  inputSchema: Record<string, unknown>;
};

export type McpToolCallResult = unknown;

type McpRuntimeTarget = { agentId: string; serverName: string };

/** Runtime state is per agent process, even when configuration is inherited. */
export function getMcpRuntimeStatus(
  target: McpRuntimeTarget,
): Promise<McpRuntimeStatus> {
  return invokeTauri("get_mcp_runtime_status", target);
}

export function restartMcpServer(
  target: McpRuntimeTarget,
): Promise<McpRuntimeStatus> {
  return invokeTauri("restart_mcp_server", target);
}

export function listMcpServerTools(
  target: McpRuntimeTarget,
): Promise<McpTool[]> {
  return invokeTauri("list_mcp_server_tools", target);
}

export function callMcpServerTool(
  target: McpRuntimeTarget & {
    toolName: string;
    arguments: Record<string, unknown>;
  },
): Promise<McpToolCallResult> {
  return invokeTauri("call_mcp_server_tool", target);
}
