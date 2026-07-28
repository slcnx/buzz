use std::path::PathBuf;
use std::time::Duration;

use buzz_agent::config::{Config, Provider};
use buzz_agent::mcp::{McpRegistry, McpServerRuntimeState};
use buzz_agent::types::{EnvVar, McpServerStdio};

fn config() -> Config {
    let mut config = Config::for_discovery(Provider::OpenAi, String::new(), String::new());
    config.mcp_init_timeout = Duration::from_secs(5);
    config.mcp_max_restart_attempts = 3;
    config.mcp_restart_base_ms = 60_000;
    config.mcp_restart_max_ms = 60_000;
    config
}

fn fake_mcp() -> String {
    env!("CARGO_BIN_EXE_fake-mcp").to_owned()
}

fn server(name: &str, tool_count: usize) -> McpServerStdio {
    McpServerStdio {
        name: name.to_owned(),
        command: fake_mcp(),
        args: Vec::new(),
        env: vec![EnvVar {
            name: "FAKE_MCP_TOOL_COUNT".to_owned(),
            value: tool_count.to_string(),
        }],
    }
}

fn cwd() -> String {
    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .to_string_lossy()
        .into_owned()
}

#[tokio::test]
async fn reports_status_and_filters_tools_by_server() {
    let registry =
        McpRegistry::spawn_all(&config(), &[server("alpha", 1), server("beta", 2)], &cwd())
            .await
            .expect("spawn registry");

    let status = registry.server_status("beta").expect("beta status");
    assert_eq!(status.state, McpServerRuntimeState::Healthy);
    assert_eq!(status.restart_attempts, 0);
    assert_eq!(status.tool_count, 2);
    assert_eq!(
        registry
            .server_tools("beta")
            .expect("beta tools")
            .into_iter()
            .map(|tool| tool.name)
            .collect::<Vec<_>>(),
        ["beta__tool_0", "beta__tool_1"]
    );

    let error = registry.server_status("missing").unwrap_err().to_string();
    assert!(error.contains("unknown MCP server 'missing'"));
}

#[tokio::test]
async fn force_restart_bypasses_backoff_and_restores_health() {
    let registry = McpRegistry::spawn_all(&config(), &[server("alpha", 1)], &cwd())
        .await
        .expect("spawn registry");
    registry.kill_server("alpha", "test failure");

    let dead = registry.server_status("alpha").expect("dead status");
    assert_eq!(dead.state, McpServerRuntimeState::Recovering);
    assert!(dead.retry_after_ms.is_some());

    let restarted = registry
        .force_restart("alpha")
        .await
        .expect("force restart");
    assert_eq!(restarted.state, McpServerRuntimeState::Healthy);
    assert_eq!(restarted.restart_attempts, 0);
    assert_eq!(restarted.tool_count, 1);
}
