use crate::managed_agents::ManagedAgentRuntimeKey;

/// Keep process identity canonical while preserving the configured authority
/// used for the actual connection. Relay community scoping is Host-derived, so
/// `localhost` and `127.0.0.1` are interchangeable for deduplication but not for
/// the child's HTTP/WebSocket requests.
pub(super) fn spawn_relay_target(
    pubkey: impl Into<String>,
    relay_url: &str,
) -> Result<(ManagedAgentRuntimeKey, String), String> {
    let runtime_key = ManagedAgentRuntimeKey::new(pubkey, relay_url)?;
    Ok((runtime_key, relay_url.trim().to_string()))
}
