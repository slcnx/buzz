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
  effective: boolean;
  agentRestarted: boolean;
  error: string | null;
};

export type McpTool = {
  name: string;
  description: string | null;
  inputSchema: Record<string, unknown>;
};

export type McpToolCallResult = {
  content: Array<
    | { type: "text"; text: string }
    | { type: "image"; data: string; mimeType: string }
  >;
  isError: boolean;
};

type McpRuntimeTarget = { agentId: string; serverName: string };

/** Reports the owning agent runtime; child MCP process state is not observable. */
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
