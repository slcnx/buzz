var e=e=>{switch(e){case`index`:return`@startuml
title "Buzz Architecture Overview"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<User>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam person<<Developer>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Desktop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Mobile>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Cli>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Buzz>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==User\\n\\nUses Buzz for communication" <<User>> as User
person "==Developer / AI Agent\\n\\nDevelops or automates with Buzz" <<Developer>> as Developer
rectangle "==Desktop App\\n\\nTauri 2 + React 19" <<Desktop>> as Desktop
rectangle "==Mobile App\\n\\nFlutter mobile app" <<Mobile>> as Mobile
rectangle "==Buzz CLI\\n\\nAgent-first CLI (buzz-cli)" <<Cli>> as Cli
rectangle "==Buzz" <<Buzz>> as Buzz

User .[#8D8D8D,thickness=2].> Desktop : <color:#8D8D8D>Uses
User .[#8D8D8D,thickness=2].> Mobile : <color:#8D8D8D>Uses
Developer .[#8D8D8D,thickness=2].> Buzz : <color:#8D8D8D>Connects via ACP
Developer .[#8D8D8D,thickness=2].> Cli : <color:#8D8D8D>Uses
Desktop .[#8D8D8D,thickness=2].> Buzz : <color:#8D8D8D>WebSocket (NIP-29)
Mobile .[#8D8D8D,thickness=2].> Buzz : <color:#8D8D8D>WebSocket (NIP-29)
Cli .[#8D8D8D,thickness=2].> Buzz : <color:#8D8D8D>WebSocket / HTTP
@enduml
`;case`backend`:return`@startuml
title "Buzz Backend Architecture"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<Buzz>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
rectangle "==Buzz" <<Buzz>> as Buzz
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};