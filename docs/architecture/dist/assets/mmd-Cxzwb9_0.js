var e=e=>{switch(e){case`index`:return`---
title: "Buzz Architecture Overview"
---
graph TB
  User@{ icon: "fa:user", shape: rounded, label: "User" }
  Developer@{ icon: "fa:user", shape: rounded, label: "Developer / AI Agent" }
  Desktop@{ shape: rectangle, label: "Desktop App" }
  Mobile@{ shape: rectangle, label: "Mobile App" }
  Cli@{ shape: rectangle, label: "Buzz CLI" }
  Buzz@{ shape: rectangle, label: "Buzz" }
  User -. "\`Uses\`" .-> Desktop
  User -. "\`Uses\`" .-> Mobile
  Developer -. "\`Connects via ACP\`" .-> Buzz
  Developer -. "\`Uses\`" .-> Cli
  Desktop -. "\`WebSocket (NIP-29)\`" .-> Buzz
  Mobile -. "\`WebSocket (NIP-29)\`" .-> Buzz
  Cli -. "\`WebSocket / HTTP\`" .-> Buzz
`;case`backend`:return`---
title: "Buzz Backend Architecture"
---
graph TB
  Developer@{ icon: "fa:user", shape: rounded, label: "Developer / AI Agent" }
  Desktop@{ shape: rectangle, label: "Desktop App" }
  Mobile@{ shape: rectangle, label: "Mobile App" }
  Cli@{ shape: rectangle, label: "Buzz CLI" }
  subgraph Buzz["\`Buzz\`"]
    Buzz.Acp@{ shape: rectangle, label: "Buzz ACP" }
    Buzz.Relay@{ shape: rectangle, label: "Buzz Relay" }
    Buzz.Core@{ shape: rectangle, label: "Buzz Core" }
    Buzz.Redis@{ shape: cylinder, label: "Redis" }
    Buzz.Auth@{ shape: rectangle, label: "Buzz Auth" }
    Buzz.Infra@{ shape: rectangle, label: "Local Infrastructure (Docker)" }
    Buzz.Pg@{ shape: cylinder, label: "Postgres" }
  end
  Developer -. "\`Connects via ACP\`" .-> Buzz.Acp
  Desktop -. "\`WebSocket (NIP-29)\`" .-> Buzz.Relay
  Mobile -. "\`WebSocket (NIP-29)\`" .-> Buzz.Relay
  Cli -. "\`WebSocket / HTTP\`" .-> Buzz.Relay
  Buzz.Relay -. "\`Uses\`" .-> Buzz.Core
  Buzz.Relay -. "\`Reads/Writes\`" .-> Buzz.Pg
  Buzz.Relay -. "\`Pub/Sub\`" .-> Buzz.Redis
  Buzz.Relay -. "\`Authenticates via\`" .-> Buzz.Auth
  Buzz.Relay -. "\`[...]\`" .-> Buzz.Infra
  Buzz.Acp -. "\`Subscribes to events\`" .-> Buzz.Relay
  Buzz.Infra -. "\`Manages Database\`" .-> Buzz.Pg
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};