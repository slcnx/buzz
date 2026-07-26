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
    buzz [height=2.5,
        label=<<FONT POINT-SIZE="20">Buzz</FONT>>,
        likec4_id=buzz,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
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
<svg width="350pt" height="210pt"
 viewBox="0.00 0.00 350.00 210.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 195.05)">
<!-- buzz -->
<g id="node1" class="node">
<title>buzz</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="137.79" y="-82" font-family="Arial" font-size="20.00" fill="#eff6ff">Buzz</text>
</g>
</g>
</svg>
`;default:throw Error(`Unknown viewId: `+e)}};export{e as dotSource,t as svgSource};