use std::time::Duration;

use buzz_agent_pkg::config::Config;
use buzz_agent_pkg::mcp::{McpRegistry, ResultBudget};
use buzz_agent_pkg::types::{EnvVar, McpServerStdio, ToolResultContent};
use buzz_agent_pkg::Provider;
use serde::Serialize;
use serde_json::Value;
use tauri::{AppHandle, Manager};
use tokio::sync::watch;

use super::{
    default_agent_workdir, effective_buzz_agent_mcp_servers, load_global_agent_config,
    load_managed_agents, load_personas, record_agent_command, restart_managed_agent_runtime,
    workspace_pair_key, BackendKind, ManagedAgentRecord, ManagedAgentRuntimeLifecycle,
    McpServerConfig,
};
use crate::app_state::AppState;

const PROBE_PROVIDER_ID: &str = "desktop-mcp-probe";
const PROBE_RESULT_BYTES: usize = 1024 * 1024;
const PROBE_TEXT_BYTES: usize = 256 * 1024;

#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize)]
#[serde(rename_all = "kebab-case")]
pub enum McpRuntimeLifecycle {
    Unsupported,
    AgentNotRunning,
    Stopped,
    Starting,
    Running,
    Error,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct McpRuntimeStatus {
    pub agent_id: String,
    pub server_name: String,
    pub lifecycle: McpRuntimeLifecycle,
    pub effective: bool,
    pub agent_restarted: bool,
    pub error: Option<String>,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct McpTool {
    pub name: String,
    pub description: String,
    pub input_schema: Value,
}

#[derive(Debug, Serialize)]
#[serde(tag = "type", rename_all = "snake_case")]
pub enum McpToolResultContent {
    Text {
        text: String,
    },
    Image {
        data: String,
        #[serde(rename = "mimeType")]
        mime_type: String,
    },
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct McpToolCallResult {
    pub content: Vec<McpToolResultContent>,
    pub is_error: bool,
}

struct ResolvedTarget {
    record: ManagedAgentRecord,
    server: Option<McpServerConfig>,
    supported: bool,
}

fn resolve_target(
    app: &AppHandle,
    agent_id: &str,
    server_name: &str,
) -> Result<ResolvedTarget, String> {
    if agent_id.trim().is_empty() {
        return Err("agentId is required".into());
    }
    if server_name.trim().is_empty() {
        return Err("serverName is required".into());
    }

    let records = load_managed_agents(app)?;
    let record = records
        .into_iter()
        .find(|record| record.pubkey.eq_ignore_ascii_case(agent_id))
        .ok_or_else(|| format!("agent {agent_id} not found"))?;
    let personas = load_personas(app)?;
    let command = record_agent_command(&record, &personas);
    let supported = record.backend == BackendKind::Local
        && super::known_acp_runtime(&command).map(|runtime| runtime.id) == Some("buzz-agent");
    let global = load_global_agent_config(app)?;
    let server =
        effective_buzz_agent_mcp_servers(&record, &personas, &global.mcp_servers, &command)?
            .into_iter()
            .find(|server| server.name == server_name);

    Ok(ResolvedTarget {
        record,
        server,
        supported,
    })
}

fn map_lifecycle(lifecycle: &ManagedAgentRuntimeLifecycle) -> McpRuntimeLifecycle {
    match lifecycle {
        ManagedAgentRuntimeLifecycle::Starting
        | ManagedAgentRuntimeLifecycle::Listening
        | ManagedAgentRuntimeLifecycle::Waking => McpRuntimeLifecycle::Starting,
        ManagedAgentRuntimeLifecycle::Ready => McpRuntimeLifecycle::Running,
        ManagedAgentRuntimeLifecycle::Failed => McpRuntimeLifecycle::Error,
        ManagedAgentRuntimeLifecycle::Stopped => McpRuntimeLifecycle::Stopped,
    }
}

fn target_status(
    app: &AppHandle,
    target: &ResolvedTarget,
    server_name: &str,
) -> Result<McpRuntimeStatus, String> {
    let effective = target.server.is_some();
    if !target.supported {
        return Ok(McpRuntimeStatus {
            agent_id: target.record.pubkey.clone(),
            server_name: server_name.to_owned(),
            lifecycle: McpRuntimeLifecycle::Unsupported,
            effective,
            agent_restarted: false,
            error: None,
        });
    }

    let Some(key) = workspace_pair_key(app, &target.record) else {
        return Ok(McpRuntimeStatus {
            agent_id: target.record.pubkey.clone(),
            server_name: server_name.to_owned(),
            lifecycle: McpRuntimeLifecycle::AgentNotRunning,
            effective,
            agent_restarted: false,
            error: None,
        });
    };
    let state = app.state::<AppState>();
    let mut runtimes = state
        .managed_agent_processes
        .lock()
        .map_err(|error| error.to_string())?;
    let Some(runtime) = runtimes.get_mut(&key) else {
        return Ok(McpRuntimeStatus {
            agent_id: target.record.pubkey.clone(),
            server_name: server_name.to_owned(),
            lifecycle: McpRuntimeLifecycle::AgentNotRunning,
            effective,
            agent_restarted: false,
            error: None,
        });
    };
    if runtime
        .child
        .try_wait()
        .map_err(|error| error.to_string())?
        .is_some()
    {
        return Ok(McpRuntimeStatus {
            agent_id: target.record.pubkey.clone(),
            server_name: server_name.to_owned(),
            lifecycle: McpRuntimeLifecycle::AgentNotRunning,
            effective,
            agent_restarted: false,
            error: runtime.error.clone(),
        });
    }
    Ok(McpRuntimeStatus {
        agent_id: target.record.pubkey.clone(),
        server_name: server_name.to_owned(),
        lifecycle: map_lifecycle(&runtime.lifecycle),
        effective,
        agent_restarted: false,
        error: runtime.error.clone(),
    })
}

fn require_probe_server(
    target: &ResolvedTarget,
    server_name: &str,
) -> Result<McpServerStdio, String> {
    if !target.supported {
        return Err("MCP runtime operations are unsupported for this agent".into());
    }
    let server = target
        .server
        .as_ref()
        .ok_or_else(|| format!("MCP server `{server_name}` is not effective for this agent"))?;
    Ok(McpServerStdio {
        name: server.name.clone(),
        command: server.command.clone(),
        args: server.args.clone(),
        env: server
            .env
            .iter()
            .map(|variable| EnvVar {
                name: variable.name.clone(),
                value: variable.value.clone(),
            })
            .collect(),
    })
}

async fn spawn_probe(server: McpServerStdio) -> Result<McpRegistry, String> {
    let mut config = Config::for_discovery(Provider::OpenAi, String::new(), String::new());
    config.mcp_init_timeout = Duration::from_secs(15);
    config.mcp_max_restart_attempts = 1;
    config.mcp_restart_base_ms = 250;
    config.mcp_restart_max_ms = 250;
    let cwd = default_agent_workdir()
        .unwrap_or_else(|| std::path::PathBuf::from("."))
        .to_string_lossy()
        .into_owned();
    McpRegistry::spawn_all(&config, &[server], &cwd)
        .await
        .map_err(|error| error.to_string())
}

#[tauri::command]
pub fn get_mcp_runtime_status(
    agent_id: String,
    server_name: String,
    app: AppHandle,
) -> Result<McpRuntimeStatus, String> {
    let target = resolve_target(&app, &agent_id, &server_name)?;
    target_status(&app, &target, &server_name)
}

#[tauri::command]
pub fn restart_mcp_server(
    agent_id: String,
    server_name: String,
    app: AppHandle,
) -> Result<McpRuntimeStatus, String> {
    let target = resolve_target(&app, &agent_id, &server_name)?;
    if !target.supported {
        return Err("MCP runtime operations are unsupported for this agent".into());
    }
    if target.server.is_none() {
        return Err(format!(
            "MCP server `{server_name}` is not effective for this agent"
        ));
    }
    let before = target_status(&app, &target, &server_name)?;
    if !matches!(
        before.lifecycle,
        McpRuntimeLifecycle::Starting | McpRuntimeLifecycle::Running
    ) {
        return Err("agent is not running in the active workspace".into());
    }
    let key = workspace_pair_key(&app, &target.record)
        .ok_or_else(|| "agent is not running in the active workspace".to_string())?;
    let restarted =
        restart_managed_agent_runtime(target.record.pubkey.clone(), key.relay_url, app)?;
    Ok(McpRuntimeStatus {
        agent_id: target.record.pubkey,
        server_name,
        lifecycle: map_lifecycle(&restarted.lifecycle),
        effective: true,
        agent_restarted: true,
        error: restarted.error,
    })
}

#[tauri::command]
pub async fn list_mcp_server_tools(
    agent_id: String,
    server_name: String,
    app: AppHandle,
) -> Result<Vec<McpTool>, String> {
    let target = resolve_target(&app, &agent_id, &server_name)?;
    let server = require_probe_server(&target, &server_name)?;
    let registry = spawn_probe(server).await?;
    let result = registry
        .server_tools(&server_name)
        .map(|tools| {
            tools
                .into_iter()
                .map(|tool| McpTool {
                    name: tool.name,
                    description: tool.description,
                    input_schema: tool.input_schema,
                })
                .collect()
        })
        .map_err(|error| error.to_string());
    registry.shutdown().await;
    result
}

#[tauri::command]
pub async fn call_mcp_server_tool(
    agent_id: String,
    server_name: String,
    tool_name: String,
    arguments: Value,
    app: AppHandle,
) -> Result<McpToolCallResult, String> {
    let arguments = match arguments {
        Value::Object(arguments) => Value::Object(arguments),
        _ => return Err("arguments must be a JSON object".into()),
    };
    let target = resolve_target(&app, &agent_id, &server_name)?;
    let server = require_probe_server(&target, &server_name)?;
    let registry = spawn_probe(server).await?;
    let (_cancel_tx, mut cancel_rx) = watch::channel(false);
    let call = registry.call(
        &tool_name,
        PROBE_PROVIDER_ID,
        &arguments,
        ResultBudget {
            total: PROBE_RESULT_BYTES,
            text: PROBE_TEXT_BYTES,
        },
        &mut cancel_rx,
    );
    let result = match tokio::time::timeout(Duration::from_secs(30), call).await {
        Ok(result) => result
            .map(|result| McpToolCallResult {
                content: result
                    .content
                    .into_iter()
                    .map(|content| match content {
                        ToolResultContent::Text(text) => McpToolResultContent::Text { text },
                        ToolResultContent::Image { data, mime_type } => {
                            McpToolResultContent::Image { data, mime_type }
                        }
                    })
                    .collect(),
                is_error: result.is_error,
            })
            .map_err(|error| error.to_string()),
        Err(_) => Err("MCP tool probe timed out".to_string()),
    };
    registry.shutdown().await;
    result
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn maps_agent_lifecycle_without_claiming_child_process_visibility() {
        assert_eq!(
            map_lifecycle(&ManagedAgentRuntimeLifecycle::Starting),
            McpRuntimeLifecycle::Starting
        );
        assert_eq!(
            map_lifecycle(&ManagedAgentRuntimeLifecycle::Listening),
            McpRuntimeLifecycle::Starting
        );
        assert_eq!(
            map_lifecycle(&ManagedAgentRuntimeLifecycle::Waking),
            McpRuntimeLifecycle::Starting
        );
        assert_eq!(
            map_lifecycle(&ManagedAgentRuntimeLifecycle::Ready),
            McpRuntimeLifecycle::Running
        );
        assert_eq!(
            map_lifecycle(&ManagedAgentRuntimeLifecycle::Failed),
            McpRuntimeLifecycle::Error
        );
        assert_eq!(
            map_lifecycle(&ManagedAgentRuntimeLifecycle::Stopped),
            McpRuntimeLifecycle::Stopped
        );
    }
}
