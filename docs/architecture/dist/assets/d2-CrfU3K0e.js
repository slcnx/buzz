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

Buzz: {
  label: "Buzz"
}
`;default:throw Error(`Unknown viewId: `+e)}};export{e as d2Source};