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
skinparam rectangle<<BuzzAcp>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BuzzRelay>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BuzzCore>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<BuzzRedis>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BuzzAuth>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<BuzzInfra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam database<<BuzzPg>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
person "==Developer / AI Agent\\n\\nDevelops or automates with Buzz" <<Developer>> as Developer
rectangle "==Desktop App\\n\\nTauri 2 + React 19" <<Desktop>> as Desktop
rectangle "==Mobile App\\n\\nFlutter mobile app" <<Mobile>> as Mobile
rectangle "==Buzz CLI\\n\\nAgent-first CLI (buzz-cli)" <<Cli>> as Cli
rectangle "Buzz" <<Buzz>> as Buzz {
  skinparam RectangleBorderColor<<Buzz>> #3b82f6
  skinparam RectangleFontColor<<Buzz>> #3b82f6
  skinparam RectangleBorderStyle<<Buzz>> dashed

  rectangle "==Buzz ACP\\n\\nHarness bridging events to AI agents (buzz-acp)" <<BuzzAcp>> as BuzzAcp
  rectangle "==Buzz Relay\\n\\nWebSocket relay server (buzz-relay)\\nMain entry point; hosts git & audio" <<BuzzRelay>> as BuzzRelay
  rectangle "==Buzz Core\\n\\nCore types & event verification (buzz-core)" <<BuzzCore>> as BuzzCore
  database "==Redis\\n\\nPub/sub fan-out (buzz-pubsub)" <<BuzzRedis>> as BuzzRedis
  rectangle "==Buzz Auth\\n\\nAuthentication & authorization (buzz-auth)" <<BuzzAuth>> as BuzzAuth
  rectangle "==Local Infrastructure (Docker)" <<BuzzInfra>> as BuzzInfra
  database "==Postgres\\n\\nEvent store & data access (buzz-db, buzz-search)" <<BuzzPg>> as BuzzPg
}

Developer .[#8D8D8D,thickness=2].> BuzzAcp : <color:#8D8D8D>Connects via ACP
Desktop .[#8D8D8D,thickness=2].> BuzzRelay : <color:#8D8D8D>WebSocket (NIP-29)
Mobile .[#8D8D8D,thickness=2].> BuzzRelay : <color:#8D8D8D>WebSocket (NIP-29)
Cli .[#8D8D8D,thickness=2].> BuzzRelay : <color:#8D8D8D>WebSocket / HTTP
BuzzRelay .[#8D8D8D,thickness=2].> BuzzCore : <color:#8D8D8D>Uses
BuzzRelay .[#8D8D8D,thickness=2].> BuzzPg : <color:#8D8D8D>Reads/Writes
BuzzRelay .[#8D8D8D,thickness=2].> BuzzRedis : <color:#8D8D8D>Pub/Sub
BuzzRelay .[#8D8D8D,thickness=2].> BuzzAuth : <color:#8D8D8D>Authenticates via
BuzzRelay .[#8D8D8D,thickness=2].> BuzzInfra : <color:#8D8D8D>[...]
BuzzAcp .[#8D8D8D,thickness=2].> BuzzRelay : <color:#8D8D8D>Subscribes to events
BuzzInfra .[#8D8D8D,thickness=2].> BuzzPg : <color:#8D8D8D>Manages Database
@enduml
`;default:throw Error(`Unknown viewId: `+e)}};export{e as pumlSource};