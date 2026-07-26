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
  Buzz@{ shape: rectangle, label: "Buzz" }
`;default:throw Error(`Unknown viewId: `+e)}};export{e as mmdSource};