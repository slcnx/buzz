var e=e=>{switch(e){case`index`:return`direction: down

User: {
  label: "User"
  shape: c4-person
}
Developer: {
  label: "Developer / AI Agent"
  shape: c4-person
}
Desktop: {
  label: "Desktop App"
}
Mobile: {
  label: "Mobile App"
}
Cli: {
  label: "Buzz CLI"
}
Buzz: {
  label: "Buzz"
}

User -> Desktop: "Uses"
User -> Mobile: "Uses"
Developer -> Buzz: "Connects via ACP"
Developer -> Cli: "Uses"
Desktop -> Buzz: "WebSocket (NIP-29)"
Mobile -> Buzz: "WebSocket (NIP-29)"
Cli -> Buzz: "WebSocket / HTTP"
`;case`backend`:return`direction: down

Developer: {
  label: "Developer / AI Agent"
  shape: c4-person
}
Desktop: {
  label: "Desktop App"
}
Mobile: {
  label: "Mobile App"
}
Cli: {
  label: "Buzz CLI"
}
Buzz: {
  label: "Buzz"

  Acp: {
    label: "Buzz ACP"
  }
  Relay: {
    label: "Buzz Relay"
  }
  Core: {
    label: "Buzz Core"
  }
  Redis: {
    label: "Redis"
    shape: cylinder
  }
  Auth: {
    label: "Buzz Auth"
  }
  Infra: {
    label: "Local Infrastructure (Docker)"
  }
  Pg: {
    label: "Postgres"
    shape: cylinder
  }
}

Developer -> Buzz.Acp: "Connects via ACP"
Desktop -> Buzz.Relay: "WebSocket (NIP-29)"
Mobile -> Buzz.Relay: "WebSocket (NIP-29)"
Cli -> Buzz.Relay: "WebSocket / HTTP"
Buzz.Relay -> Buzz.Core: "Uses"
Buzz.Relay -> Buzz.Pg: "Reads/Writes"
Buzz.Relay -> Buzz.Redis: "Pub/Sub"
Buzz.Relay -> Buzz.Auth: "Authenticates via"
Buzz.Relay -> Buzz.Infra: "[...]"
Buzz.Acp -> Buzz.Relay: "Subscribes to events"
Buzz.Infra -> Buzz.Pg: "Manages Database"
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};