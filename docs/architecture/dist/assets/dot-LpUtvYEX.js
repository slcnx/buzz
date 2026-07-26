var e=e=>{switch(e){case`index`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    user [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">User</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Uses Buzz for communication</FONT></TD></TR></TABLE>>,
        likec4_id=user,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    desktop [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Desktop App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Tauri 2 + React 19</FONT></TD></TR></TABLE>>,
        likec4_id=desktop,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    user -> desktop [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="6m5s21",
        style=dashed];
    mobile [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Flutter mobile app</FONT></TD></TR></TABLE>>,
        likec4_id=mobile,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    user -> mobile [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="1w9o0d7",
        style=dashed];
    developer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Developer / AI Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Develops or automates with Buzz</FONT></TD></TR></TABLE>>,
        likec4_id=developer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cli [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Buzz CLI</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Agent-first CLI (buzz-cli)</FONT></TD></TR></TABLE>>,
        likec4_id=cli,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    developer -> cli [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="1okgqmy",
        style=dashed];
    buzz [height=2.5,
        label=<<FONT POINT-SIZE="20">Buzz</FONT>>,
        likec4_id=buzz,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    developer -> buzz [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Connects via ACP</FONT></TD></TR></TABLE>>,
        likec4_id="9w7e7f",
        style=dashed];
    desktop -> buzz [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WebSocket (NIP-29)</FONT></TD></TR></TABLE>>,
        likec4_id=aw1rwv,
        style=dashed];
    mobile -> buzz [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WebSocket (NIP-29)</FONT></TD></TR></TABLE>>,
        likec4_id="1huj1vh",
        style=dashed];
    cli -> buzz [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WebSocket / HTTP</FONT></TD></TR></TABLE>>,
        likec4_id=ef0b23,
        style=dashed];
}
`;case`backend`:return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=backend,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2,
        style=""
    ];
    subgraph cluster_buzz {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BUZZ</B></FONT>>,
            likec4_depth=1,
            likec4_id=buzz,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        acp [group=buzz,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Buzz ACP</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Harness bridging events to AI agents<BR/>(buzz-acp)</FONT></TD></TR></TABLE>>,
            likec4_id="buzz.acp",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        relay [group=buzz,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Buzz Relay</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">WebSocket relay server (buzz-relay)<BR/>Main entry point; hosts git &amp; audio</FONT></TD></TR></TABLE>>,
            likec4_id="buzz.relay",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        core [group=buzz,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Buzz Core</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core types &amp; event verification (buzz-core)</FONT></TD></TR></TABLE>>,
            likec4_id="buzz.core",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        redis [group=buzz,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Redis</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Pub/sub fan-out (buzz-pubsub)</FONT></TD></TR></TABLE>>,
            likec4_id="buzz.redis",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        auth [group=buzz,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Buzz Auth</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Authentication &amp; authorization (buzz-auth)</FONT></TD></TR></TABLE>>,
            likec4_id="buzz.auth",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        infra [group=buzz,
            height=2.5,
            label=<<FONT POINT-SIZE="20">Local Infrastructure (Docker)</FONT>>,
            likec4_id="buzz.infra",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        pg [group=buzz,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Postgres</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Event store &amp; data access (buzz-db,<BR/>buzz-search)</FONT></TD></TR></TABLE>>,
            likec4_id="buzz.pg",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    developer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Developer / AI Agent</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Develops or automates with Buzz</FONT></TD></TR></TABLE>>,
        likec4_id=developer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    developer -> acp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Connects via ACP</FONT></TD></TR></TABLE>>,
        likec4_id="17uk4t3",
        minlen=1,
        style=dashed];
    desktop [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Desktop App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Tauri 2 + React 19</FONT></TD></TR></TABLE>>,
        likec4_id=desktop,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    desktop -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WebSocket (NIP-29)</FONT></TD></TR></TABLE>>,
        likec4_id=o9dksi,
        minlen=1,
        style=dashed];
    mobile [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Flutter mobile app</FONT></TD></TR></TABLE>>,
        likec4_id=mobile,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WebSocket (NIP-29)</FONT></TD></TR></TABLE>>,
        likec4_id="1ojbqnk",
        minlen=1,
        style=dashed];
    cli [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Buzz CLI</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Agent-first CLI (buzz-cli)</FONT></TD></TR></TABLE>>,
        likec4_id=cli,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cli -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">WebSocket / HTTP</FONT></TD></TR></TABLE>>,
        likec4_id="1imx1x2",
        minlen=1,
        style=dashed];
    acp -> relay [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Subscribes to events</FONT></TD></TR></TABLE>>,
        likec4_id="2qkpnf",
        style=dashed,
        weight=2];
    relay -> core [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Uses</FONT></TD></TR></TABLE>>,
        likec4_id="1nswos2",
        minlen=1,
        style=dashed,
        weight=2];
    relay -> redis [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Pub/Sub</FONT></TD></TR></TABLE>>,
        likec4_id="1jypk3k",
        minlen=1,
        style=dashed,
        weight=2];
    relay -> auth [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Authenticates via</FONT></TD></TR></TABLE>>,
        likec4_id="1nsyt0h",
        minlen=1,
        style=dashed,
        weight=2];
    relay -> infra [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1jk14t7",
        style=dashed,
        weight=2];
    relay -> pg [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Reads/Writes</FONT></TD></TR></TABLE>>,
        likec4_id="1bjey8u",
        style=dashed,
        weight=2];
    infra -> pg [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Manages Database</FONT></TD></TR></TABLE>>,
        likec4_id="19duzyn",
        style=dashed];
}
`;default:throw Error(`Unknown viewId: `+e)}},t=e=>{switch(e){case`index`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1421pt" height="856pt"
 viewBox="0.00 0.00 1421.00 856.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- user -->
<g id="node1" class="node">
<title>user</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="536.04,-825.6 216,-825.6 216,-645.6 536.04,-645.6 536.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="354.91" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">User</text>
<text xml:space="preserve" text-anchor="start" x="276.82" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Uses Buzz for communication</text>
</g>
<!-- desktop -->
<g id="node2" class="node">
<title>desktop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="102.76" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Desktop App</text>
<text xml:space="preserve" text-anchor="start" x="98.11" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Tauri 2 + React 19</text>
</g>
<!-- mobile -->
<g id="node3" class="node">
<title>mobile</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-502.8 430,-502.8 430,-322.8 750.04,-322.8 750.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="539.99" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text xml:space="preserve" text-anchor="start" x="529.99" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Flutter mobile app</text>
</g>
<!-- developer -->
<g id="node4" class="node">
<title>developer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1370.04,-825.6 1050,-825.6 1050,-645.6 1370.04,-645.6 1370.04,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="1117.74" y="-738.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Developer / AI Agent</text>
<text xml:space="preserve" text-anchor="start" x="1098.72" y="-715.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Develops or automates with Buzz</text>
</g>
<!-- cli -->
<g id="node5" class="node">
<title>cli</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-502.8 860,-502.8 860,-322.8 1180.04,-322.8 1180.04,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="979.45" y="-415.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Buzz CLI</text>
<text xml:space="preserve" text-anchor="start" x="939.59" y="-392.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Agent&#45;first CLI (buzz&#45;cli)</text>
</g>
<!-- buzz -->
<g id="node6" class="node">
<title>buzz</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="965.04,-180 645,-180 645,0 965.04,0 965.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="782.79" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">Buzz</text>
</g>
<!-- user&#45;&gt;desktop -->
<g id="edge1" class="edge">
<title>user&#45;&gt;desktop</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M316.14,-645.67C288.05,-603.94 254.5,-554.11 225.71,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="227.89,-509.9 221.52,-505.14 223.53,-512.83 227.89,-509.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="274.5,-562.8 274.5,-585.6 312.39,-585.6 312.39,-562.8 274.5,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="277.5" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Uses</text>
</g>
<!-- user&#45;&gt;mobile -->
<g id="edge2" class="edge">
<title>user&#45;&gt;mobile</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M435.35,-645.67C463.18,-603.94 496.42,-554.11 524.94,-511.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="527.11,-512.84 529.08,-505.15 522.74,-509.93 527.11,-512.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="489.44,-562.8 489.44,-585.6 527.33,-585.6 527.33,-562.8 489.44,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="492.44" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Uses</text>
</g>
<!-- desktop&#45;&gt;buzz -->
<g id="edge5" class="edge">
<title>desktop&#45;&gt;buzz</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.75,-325.17C372.01,-297.39 430.54,-266.88 484.65,-240 533.42,-215.77 586.89,-190.43 635.94,-167.66"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="636.92,-170.1 642.62,-164.56 634.71,-165.34 636.92,-170.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="484.65,-240 484.65,-262.8 619.02,-262.8 619.02,-240 484.65,-240"/>
<text xml:space="preserve" text-anchor="start" x="487.65" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">WebSocket (NIP&#45;29)</text>
</g>
<!-- mobile&#45;&gt;buzz -->
<g id="edge6" class="edge">
<title>mobile&#45;&gt;buzz</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M617.86,-322.85C628.51,-295.16 642.15,-265.28 658.65,-240 670.51,-221.83 684.82,-204.01 699.79,-187.38"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="701.54,-189.36 704.66,-182.05 697.66,-185.81 701.54,-189.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="658.65,-240 658.65,-262.8 793.02,-262.8 793.02,-240 658.65,-240"/>
<text xml:space="preserve" text-anchor="start" x="661.65" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">WebSocket (NIP&#45;29)</text>
</g>
<!-- developer&#45;&gt;cli -->
<g id="edge3" class="edge">
<title>developer&#45;&gt;cli</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1157.35,-645.67C1132.69,-604.03 1103.25,-554.32 1077.96,-511.63"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1080.25,-510.35 1074.17,-505.23 1075.74,-513.02 1080.25,-510.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1120.72,-562.8 1120.72,-585.6 1158.61,-585.6 1158.61,-562.8 1120.72,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1123.72" y="-568.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Uses</text>
</g>
<!-- developer&#45;&gt;buzz -->
<g id="edge4" class="edge">
<title>developer&#45;&gt;buzz</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1242.71,-645.82C1269.31,-557.46 1293.76,-421.2 1235.02,-322.8 1178.65,-228.37 1069.06,-170.13 974.63,-135.65"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="975.75,-133.26 967.8,-133.2 973.98,-138.2 975.75,-133.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1271.16,-401.4 1271.16,-424.2 1390.76,-424.2 1390.76,-401.4 1271.16,-401.4"/>
<text xml:space="preserve" text-anchor="start" x="1274.16" y="-407.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Connects via ACP</text>
</g>
<!-- cli&#45;&gt;buzz -->
<g id="edge7" class="edge">
<title>cli&#45;&gt;buzz</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M960.42,-322.87C932.45,-281.14 899.06,-231.31 870.4,-188.56"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="872.59,-187.11 866.24,-182.34 868.23,-190.04 872.59,-187.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="918.97,-240 918.97,-262.8 1044.77,-262.8 1044.77,-240 918.97,-240"/>
<text xml:space="preserve" text-anchor="start" x="921.97" y="-245.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">WebSocket / HTTP</text>
</g>
</g>
</svg>
`;case`backend`:return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 15.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="3184pt" height="1558pt"
 viewBox="0.00 0.00 3184.00 1558.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1543.45)">
<g id="clust1" class="cluster">
<title>cluster_buzz</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="360.02,-8 360.02,-1257.6 2364.02,-1257.6 2364.02,-8 360.02,-8"/>
<text xml:space="preserve" text-anchor="start" x="368.02" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BUZZ</text>
</g>
<!-- acp -->
<g id="node1" class="node">
<title>acp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1584.04,-1196.4 1264,-1196.4 1264,-1016.4 1584.04,-1016.4 1584.04,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1378.45" y="-1118.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Buzz ACP</text>
<text xml:space="preserve" text-anchor="start" x="1301.03" y="-1095.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Harness bridging events to AI agents</text>
<text xml:space="preserve" text-anchor="start" x="1388.59" y="-1077.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">(buzz&#45;acp)</text>
</g>
<!-- relay -->
<g id="node2" class="node">
<title>relay</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1584.04,-873.6 1264,-873.6 1264,-693.6 1584.04,-693.6 1584.04,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1373.44" y="-795.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Buzz Relay</text>
<text xml:space="preserve" text-anchor="start" x="1302.73" y="-772.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">WebSocket relay server (buzz&#45;relay)</text>
<text xml:space="preserve" text-anchor="start" x="1311.04" y="-754.6" font-family="Arial" font-size="15.00" fill="#bfdbfe">Main entry point; hosts git &amp; audio</text>
</g>
<!-- core -->
<g id="node3" class="node">
<title>core</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="723.8,-550.8 400.24,-550.8 400.24,-370.8 723.8,-370.8 723.8,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="515.34" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Buzz Core</text>
<text xml:space="preserve" text-anchor="start" x="420.3" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core types &amp; event verification (buzz&#45;core)</text>
</g>
<!-- redis -->
<g id="node4" class="node">
<title>redis</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1154.04,-534.44C1154.04,-543.47 1082.32,-550.8 994.02,-550.8 905.72,-550.8 834,-543.47 834,-534.44 834,-534.44 834,-387.16 834,-387.16 834,-378.13 905.72,-370.8 994.02,-370.8 1082.32,-370.8 1154.04,-378.13 1154.04,-387.16 1154.04,-387.16 1154.04,-534.44 1154.04,-534.44"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1154.04,-534.44C1154.04,-525.41 1082.32,-518.07 994.02,-518.07 905.72,-518.07 834,-525.41 834,-534.44"/>
<text xml:space="preserve" text-anchor="start" x="968.45" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Redis</text>
<text xml:space="preserve" text-anchor="start" x="891.04" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Pub/sub fan&#45;out (buzz&#45;pubsub)</text>
</g>
<!-- auth -->
<g id="node5" class="node">
<title>auth</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1584.04,-550.8 1264,-550.8 1264,-370.8 1584.04,-370.8 1584.04,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1378.44" y="-463.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Buzz Auth</text>
<text xml:space="preserve" text-anchor="start" x="1284.35" y="-440.8" font-family="Arial" font-size="15.00" fill="#bfdbfe">Authentication &amp; authorization (buzz&#45;auth)</text>
</g>
<!-- infra -->
<g id="node6" class="node">
<title>infra</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2014.04,-550.8 1694,-550.8 1694,-370.8 2014.04,-370.8 2014.04,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1727.31" y="-452.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Local Infrastructure (Docker)</text>
</g>
<!-- pg -->
<g id="node7" class="node">
<title>pg</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M2324.04,-211.64C2324.04,-220.67 2252.32,-228 2164.02,-228 2075.72,-228 2004,-220.67 2004,-211.64 2004,-211.64 2004,-64.36 2004,-64.36 2004,-55.33 2075.72,-48 2164.02,-48 2252.32,-48 2324.04,-55.33 2324.04,-64.36 2324.04,-64.36 2324.04,-211.64 2324.04,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M2324.04,-211.64C2324.04,-202.61 2252.32,-195.27 2164.02,-195.27 2075.72,-195.27 2004,-202.61 2004,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="2124.56" y="-150" font-family="Arial" font-size="20.00" fill="#eff6ff">Postgres</text>
<text xml:space="preserve" text-anchor="start" x="2043.54" y="-127" font-family="Arial" font-size="15.00" fill="#bfdbfe">Event store &amp; data access (buzz&#45;db,</text>
<text xml:space="preserve" text-anchor="start" x="2120.67" y="-109" font-family="Arial" font-size="15.00" fill="#bfdbfe">buzz&#45;search)</text>
</g>
<!-- developer -->
<g id="node8" class="node">
<title>developer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1584.04,-1528.4 1264,-1528.4 1264,-1348.4 1584.04,-1348.4 1584.04,-1528.4"/>
<text xml:space="preserve" text-anchor="start" x="1331.74" y="-1441.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Developer / AI Agent</text>
<text xml:space="preserve" text-anchor="start" x="1312.72" y="-1418.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Develops or automates with Buzz</text>
</g>
<!-- desktop -->
<g id="node9" class="node">
<title>desktop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-1196.4 0,-1196.4 0,-1016.4 320.04,-1016.4 320.04,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="102.76" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Desktop App</text>
<text xml:space="preserve" text-anchor="start" x="98.11" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Tauri 2 + React 19</text>
</g>
<!-- mobile -->
<g id="node10" class="node">
<title>mobile</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2724.04,-1196.4 2404,-1196.4 2404,-1016.4 2724.04,-1016.4 2724.04,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="2513.99" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Mobile App</text>
<text xml:space="preserve" text-anchor="start" x="2503.99" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Flutter mobile app</text>
</g>
<!-- cli -->
<g id="node11" class="node">
<title>cli</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3154.04,-1196.4 2834,-1196.4 2834,-1016.4 3154.04,-1016.4 3154.04,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="2953.45" y="-1109.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Buzz CLI</text>
<text xml:space="preserve" text-anchor="start" x="2913.59" y="-1086.4" font-family="Arial" font-size="15.00" fill="#bfdbfe">Agent&#45;first CLI (buzz&#45;cli)</text>
</g>
<!-- acp&#45;&gt;relay -->
<g id="edge5" class="edge">
<title>acp&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1424.02,-1016.47C1424.02,-975.27 1424.02,-926.16 1424.02,-883.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1426.65,-883.96 1424.02,-876.46 1421.4,-883.96 1426.65,-883.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1424.02,-933.6 1424.02,-956.4 1559.98,-956.4 1559.98,-933.6 1424.02,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1427.02" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Subscribes to events</text>
</g>
<!-- relay&#45;&gt;core -->
<g id="edge6" class="edge">
<title>relay&#45;&gt;core</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1264.26,-727.39C1133.29,-681.61 943.39,-614.01 779.02,-550.8 764.15,-545.08 748.75,-539.03 733.34,-532.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="734.5,-530.52 726.56,-530.17 732.55,-535.4 734.5,-530.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="990.88,-610.8 990.88,-633.6 1028.78,-633.6 1028.78,-610.8 990.88,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="993.88" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Uses</text>
</g>
<!-- relay&#45;&gt;redis -->
<g id="edge7" class="edge">
<title>relay&#45;&gt;redis</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1304.81,-693.67C1246.89,-650.45 1177.31,-598.54 1118.68,-554.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1120.49,-552.88 1112.91,-550.5 1117.35,-557.09 1120.49,-552.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1221.91,-610.8 1221.91,-633.6 1281.62,-633.6 1281.62,-610.8 1221.91,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1224.91" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Pub/Sub</text>
</g>
<!-- relay&#45;&gt;auth -->
<g id="edge8" class="edge">
<title>relay&#45;&gt;auth</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1424.02,-693.67C1424.02,-652.47 1424.02,-603.36 1424.02,-560.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1426.65,-561.16 1424.02,-553.66 1421.4,-561.16 1426.65,-561.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1424.02,-610.8 1424.02,-633.6 1536.64,-633.6 1536.64,-610.8 1424.02,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1427.02" y="-616.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">Authenticates via</text>
</g>
<!-- relay&#45;&gt;infra -->
<g id="edge9" class="edge">
<title>relay&#45;&gt;infra</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1543.23,-693.67C1600.32,-651.07 1668.74,-600.03 1726.83,-556.69"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1728.09,-559.03 1732.53,-552.44 1724.95,-554.82 1728.09,-559.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1651.91,-610.8 1651.91,-633.6 1678.91,-633.6 1678.91,-610.8 1651.91,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1654.91" y="-619" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- relay&#45;&gt;pg -->
<g id="edge10" class="edge">
<title>relay&#45;&gt;pg</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1583.87,-761.62C1727.1,-735.15 1934.72,-676.78 2069.02,-550.8 2160.63,-464.86 2176.81,-413.56 2173.02,-288 2172.54,-272.13 2171.78,-255.31 2170.89,-238.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2173.53,-239.15 2170.49,-231.8 2168.29,-239.44 2173.53,-239.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2171.09,-449.4 2171.09,-472.2 2261.11,-472.2 2261.11,-449.4 2171.09,-449.4"/>
<text xml:space="preserve" text-anchor="start" x="2174.09" y="-455.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">Reads/Writes</text>
</g>
<!-- infra&#45;&gt;pg -->
<g id="edge11" class="edge">
<title>infra&#45;&gt;pg</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1939.96,-370.87C1980.36,-329.06 2028.63,-279.11 2070,-236.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2071.68,-238.34 2075,-231.12 2067.9,-234.69 2071.68,-238.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2018.32,-288 2018.32,-310.8 2145.73,-310.8 2145.73,-288 2018.32,-288"/>
<text xml:space="preserve" text-anchor="start" x="2021.32" y="-293.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">Manages Database</text>
</g>
<!-- developer&#45;&gt;acp -->
<g id="edge1" class="edge">
<title>developer&#45;&gt;acp</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1424.02,-1348.53C1424.02,-1304.7 1424.02,-1251.68 1424.02,-1206.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1426.65,-1206.67 1424.02,-1199.17 1421.4,-1206.67 1426.65,-1206.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1424.02,-1265.6 1424.02,-1288.4 1543.63,-1288.4 1543.63,-1265.6 1424.02,-1265.6"/>
<text xml:space="preserve" text-anchor="start" x="1427.02" y="-1271.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">Connects via ACP</text>
</g>
<!-- desktop&#45;&gt;relay -->
<g id="edge2" class="edge">
<title>desktop&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M319.58,-1021.42C324.08,-1019.67 328.57,-1017.99 333.02,-1016.4 648.59,-903.97 1035.9,-837.64 1253.86,-806.44"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1254.06,-809.07 1261.12,-805.41 1253.32,-803.87 1254.06,-809.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="595.89,-933.6 595.89,-956.4 730.26,-956.4 730.26,-933.6 595.89,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="598.89" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">WebSocket (NIP&#45;29)</text>
</g>
<!-- mobile&#45;&gt;relay -->
<g id="edge3" class="edge">
<title>mobile&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2404.4,-1021.58C2399.92,-1019.78 2395.45,-1018.04 2391.02,-1016.4 2119.96,-915.85 1789.74,-847.66 1593.74,-812.52"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1594.47,-809.98 1586.62,-811.25 1593.54,-815.15 1594.47,-809.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2210.75,-933.6 2210.75,-956.4 2345.12,-956.4 2345.12,-933.6 2210.75,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="2213.75" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">WebSocket (NIP&#45;29)</text>
</g>
<!-- cli&#45;&gt;relay -->
<g id="edge4" class="edge">
<title>cli&#45;&gt;relay</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M2834.11,-1035.28C2815.72,-1028.39 2797.08,-1021.92 2779.02,-1016.4 2363.61,-889.45 1853.97,-825.85 1594.07,-799.68"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1594.52,-797.09 1586.8,-798.96 1594,-802.32 1594.52,-797.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2525.28,-933.6 2525.28,-956.4 2651.09,-956.4 2651.09,-933.6 2525.28,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="2528.28" y="-939.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">WebSocket / HTTP</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};