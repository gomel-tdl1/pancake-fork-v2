(this["webpackJsonppancake-fork-v2"]=this["webpackJsonppancake-fork-v2"]||[]).push([[8],{1368:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(6),s=n.n(a),i=n(14),l=n(1),b=n(3),j=n(45),u=n(74),d=n(64),x=n(69),p=n(63),O=n(820),h=n(374),f=n(15),m=n(244),v=n(898),g=n(371),w=n(790),k=n(835),y=n(863),S=n(7),C=n(5),B=n(764),I=n(40),A=n(792),L=n(793),P=n(0),V=Object(C.e)(b.m)(c||(c=Object(S.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),D=function(e){var t=e.proposal,n=Object(f.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(P.jsxs)(b.u,{mb:"16px",children:[Object(P.jsx)(b.x,{children:Object(P.jsx)(b.Y,{as:"h3",scale:"md",children:n("Details")})}),Object(P.jsxs)(b.v,{children:[Object(P.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(P.jsx)(b.cc,{color:"textSubtle",children:n("Identifier")}),Object(P.jsx)(b.ib,{href:"".concat(L.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(P.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(P.jsx)(b.cc,{color:"textSubtle",children:n("Creator")}),Object(P.jsx)(b.ib,{href:Object(I.e)(t.author,"address"),ml:"8px",children:Object(A.a)(t.author)})]}),Object(P.jsxs)(b.W,{alignItems:"center",mb:"16px",children:[Object(P.jsx)(b.cc,{color:"textSubtle",children:n("Snapshot")}),Object(P.jsx)(b.ib,{href:Object(I.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(P.jsxs)(V,{p:"16px",children:[Object(P.jsx)(k.a,{proposalState:t.state,mb:"8px"}),Object(P.jsxs)(b.W,{alignItems:"center",children:[Object(P.jsx)(b.cc,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(P.jsx)(b.cc,{ml:"8px",children:Object(B.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(P.jsxs)(b.W,{alignItems:"center",children:[Object(P.jsx)(b.cc,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(P.jsx)(b.cc,{ml:"8px",children:Object(B.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},E=n(821),N=n.n(E),W=Object(C.e)(b.cc)(r||(r=Object(S.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),z=function(e){var t=e.choices,n=e.votes,c=Object(f.b)().t,r=Object(w.a)(n),o=Object(O.e)(),a=Object(j.c)().account,s=Object(w.f)(n);return Object(P.jsxs)(b.u,{children:[Object(P.jsx)(b.x,{children:Object(P.jsx)(b.Y,{as:"h3",scale:"md",children:c("Current Results")})}),Object(P.jsxs)(b.v,{children:[o===p.g.IDLE&&t.map((function(e,t){var n=r[e]||[],o=Object(w.f)(n),i=s.eq(0)?0:o.div(s).times(100).toNumber(),l=n.some((function(e){return a&&e.voter.toLowerCase()===a.toLowerCase()}));return Object(P.jsxs)(b.m,{mt:t>0?"24px":"0px",children:[Object(P.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(P.jsx)(W,{mb:"4px",title:e,children:e}),l&&Object(P.jsxs)(b.ac,{variant:"success",outline:!0,ml:"8px",children:[Object(P.jsx)(b.E,{mr:"4px"})," ",c("Voted")]})]}),Object(P.jsx)(b.m,{mb:"4px",children:Object(P.jsx)(b.Kb,{primaryStep:i,scale:"sm"})}),Object(P.jsxs)(b.W,{alignItems:"center",justifyContent:"space-between",children:[Object(P.jsx)(b.cc,{color:"textSubtle",children:c("%total% Votes",{total:o.toFormat(3)})}),Object(P.jsxs)(b.cc,{children:[i.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),o===p.g.LOADING&&N()(t.length).map((function(e,t){return Object(P.jsx)(b.m,{mt:t>0?"24px":"0px",children:Object(P.jsx)(b.Pb,{height:"36px",mb:"4px"})},e)}))]})]})},T=n(4),F=n(9),M=n(32),H=n(95),Y=n(105),q=n(16),K=n(197),J=n(25),G=n(97);!function(e){e.MAIN="main",e.DETAILS="details"}(o||(o={}));var Q,R,_,U,X,Z,$,ee,te=n(842),ne=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,o=e.onConfirm,a=e.onViewDetails,s=e.onDismiss,i=Object(f.b)().t;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(te.a,{children:[Object(P.jsx)(b.cc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Voting For")}),Object(P.jsx)(W,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(P.jsx)(b.cc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Your Voting Power")}),r?Object(P.jsx)(b.Pb,{height:"64px",mb:"24px"}):Object(P.jsxs)(te.b,{onClick:a,style:{cursor:"pointer"},children:[Object(P.jsx)(b.cc,{bold:!0,fontSize:"20px",children:n.toFormat(3)}),Object(P.jsx)(b.bb,{scale:"sm",variant:"text",children:Object(P.jsx)(b.I,{width:"24px"})})]}),Object(P.jsx)(b.cc,{as:"p",color:"textSubtle",fontSize:"14px",children:i("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(P.jsx)(b.q,{isLoading:c,endIcon:c?Object(P.jsx)(b.h,{spin:!0,color:"currentColor"}):null,disabled:r||n.eq(0),width:"100%",mb:"8px",onClick:o,children:i("Confirm Vote")}),Object(P.jsx)(b.q,{variant:"secondary",width:"100%",onClick:s,children:i("Cancel")})]})},ce=n(864),re=n(865),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,a=e.block,u=e.onDismiss,d=Object(l.useState)(o.MAIN),x=Object(F.a)(d,2),O=x[0],h=x[1],m=Object(l.useState)(!0),v=Object(F.a)(m,2),g=v[0],k=v[1],y=Object(l.useState)(!1),S=Object(F.a)(y,2),C=S[0],B=S[1],I=Object(j.c)().account,A=Object(f.b)().t,L=Object(H.a)().toastError,V=Object(J.a)().library,D=Object(G.a)().theme,E=Object(re.a)(a,g),N=E.isLoading,W=E.total,z=E.cakeBalance,M=E.cakeVaultBalance,Y=E.cakePoolBalance,Q=E.poolsBalance,R=E.cakeBnbLpBalance,_=E.verificationHash,U=O===o.MAIN,X=U?null:function(){return h(o.MAIN)},Z=(t={},Object(q.a)(t,o.MAIN,A("Confirm Vote")),Object(q.a)(t,o.DETAILS,A("Voting Power")),t),$=function(){k(!1),u()},ee=function(){var e=Object(i.a)(s.a.mark((function e(){var t,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),t=JSON.stringify(Object(T.a)(Object(T.a)({},Object(w.e)()),{},{type:p.f.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:W.toString(),verificationHash:_}}})),e.next=5,Object(K.c)(V,I,t);case 5:return o=e.sent,a={address:I,msg:t,sig:o},e.next=9,Object(w.i)(a);case 9:return B(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),B(!1),L(A("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)(b.ub,{title:Z[O],onBack:X,onDismiss:u,hideCloseButton:!U,headerBackground:D.colors.gradients.cardHeader,children:Object(P.jsxs)(b.m,{mb:"24px",width:"320px",children:[O===o.MAIN&&Object(P.jsx)(ne,{vote:r,isLoading:N,isPending:C,total:W,onConfirm:ee,onViewDetails:function(){return h(o.DETAILS)},onDismiss:$}),O===o.DETAILS&&Object(P.jsx)(ce.a,{total:W,cakeBalance:z,cakeVaultBalance:M,cakePoolBalance:Y,poolsBalance:Q,cakeBnbLpBalance:R})]})})},ae=["proposal"],se=C.e.label(Q||(Q=Object(S.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),ie=C.e.div(R||(R=Object(S.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),le=function(e){var t=e.proposal,n=Object(M.a)(e,ae),c=Object(l.useState)(null),r=Object(F.a)(c,2),o=r[0],a=r[1],u=Object(f.b)().t,d=Object(H.a)().toastSuccess,p=Object(x.b)(),O=Object(j.c)().account,m=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(u("Vote cast!")),p(Object(h.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(b.yc)(Object(P.jsx)(oe,{onSuccess:m,proposalId:t.id,vote:o,block:Number(t.snapshot)})),g=Object(F.a)(v,1)[0];return Object(P.jsxs)(b.u,Object(T.a)(Object(T.a)({},n),{},{children:[Object(P.jsx)(b.x,{children:Object(P.jsx)(b.Y,{as:"h3",scale:"md",children:u("Cast your vote")})}),Object(P.jsxs)(b.v,{children:[t.choices.map((function(e,t){var n=t+1===(null===o||void 0===o?void 0:o.value);return Object(P.jsxs)(se,{isChecked:n,isDisabled:!O,children:[Object(P.jsx)("div",{style:{flexShrink:0},children:Object(P.jsx)(b.Mb,{scale:"sm",value:e,checked:n,onChange:function(){a({label:e,value:t+1})},disabled:!O})}),Object(P.jsx)(ie,{children:Object(P.jsx)(b.cc,{as:"span",title:e,children:e})})]},e)})),O?Object(P.jsx)(b.q,{onClick:g,disabled:null===o,children:u("Cast Vote")}):Object(P.jsx)(Y.a,{})]})]}))},be=n(264),je=n.n(be),ue=Object(C.e)(b.W)(_||(_=Object(S.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),de=Object(C.e)(b.Pb)(U||(U=Object(S.a)(["\n  flex: 1;\n"]))),xe=function(){return Object(P.jsx)(b.m,{children:N()(10).map((function(e){return Object(P.jsxs)(ue,{children:[Object(P.jsx)(b.Pb,{height:"21px",mr:"32px",width:"100px"}),Object(P.jsx)(de,{height:"21px",mr:"32px",width:"100%"}),Object(P.jsx)(de,{height:"21px",width:"100%"})]},e)}))})},pe=n(17),Oe=n.n(pe),he=Object(C.e)(b.m).attrs({alignItems:"center"})(X||(X=Object(S.a)(["\n  grid-area: address;\n"]))),fe=Object(C.e)(b.m)(Z||(Z=Object(S.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),me=Object(C.e)(b.m)($||($=Object(S.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),ve=Object(C.e)(b.X)(ee||(ee=Object(S.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas: 'address choice vote';\n  grid-template-columns: minmax(110px, 200px) 1fr 1fr;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ge=function(e){var t,n=e.vote,c=e.isVoter,r=Object(f.b)().t,o=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),a=o?new Oe.a(n.metadata.votingPower).toFormat(3):"--";return Object(P.jsxs)(ve,{children:[Object(P.jsx)(he,{children:Object(P.jsxs)(b.W,{alignItems:"center",children:[Object(P.jsx)(b.ib,{href:Object(I.e)(n.voter,"address"),children:Object(A.a)(n.voter)}),c&&Object(P.jsxs)(b.ac,{variant:"success",outline:!0,ml:"8px",children:[Object(P.jsx)(b.E,{mr:"4px"})," ",r("Voted")]})]})}),Object(P.jsx)(fe,{children:Object(P.jsx)(W,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(P.jsx)(me,{children:Object(P.jsxs)(b.W,{alignItems:"center",justifyContent:"end",children:[Object(P.jsx)(b.cc,{title:n.metadata.votingPower,children:a}),o&&Object(P.jsx)(b.ib,{href:"".concat(L.b,"/").concat(n.id)})]})})]})},we=function(e){var t;return parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower)},ke=function(e){var t=e.votes,n=Object(l.useState)(!1),c=Object(F.a)(n,2),r=c[0],o=c[1],a=Object(f.b)().t,s=Object(j.c)().account,i=je()(t,[we,"created"],["desc","desc"]),u=r?i:i.slice(0,20),d=Object(O.e)()===p.g.IDLE;return Object(P.jsxs)(b.u,{children:[Object(P.jsx)(b.x,{children:Object(P.jsxs)(b.W,{alignItems:"center",justifyContent:"space-between",children:[Object(P.jsx)(b.Y,{as:"h3",scale:"md",children:a("Votes (%count%)",{count:t.length.toLocaleString()})}),!d&&Object(P.jsx)(b.h,{spin:!0,width:"22px"})]})}),!d&&Object(P.jsx)(xe,{}),d&&u.length>0&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(ve,{children:[Object(P.jsx)(he,{children:Object(P.jsx)(b.cc,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Voter")})}),Object(P.jsx)(fe,{children:Object(P.jsx)(b.cc,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Decision")})}),Object(P.jsx)(me,{children:Object(P.jsx)(b.cc,{fontSize:"12px",color:"textSubtle",textTransform:"uppercase",bold:!0,children:a("Vote Weight")})})]}),u.map((function(e){var t=s&&e.voter.toLowerCase()===s.toLowerCase();return Object(P.jsx)(ge,{vote:e,isVoter:t},e.id)})),Object(P.jsx)(b.W,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(P.jsx)(b.q,{width:"100%",onClick:function(){o(!r)},variant:"text",endIcon:r?Object(P.jsx)(b.J,{color:"primary",width:"21px"}):Object(P.jsx)(b.G,{color:"primary",width:"21px"}),disabled:!d,children:a(r?"Hide":"See All")})})]}),d&&0===u.length&&Object(P.jsx)(b.W,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(P.jsx)(b.Y,{as:"h5",children:a("No votes found")})})]})};t.default=function(){var e=Object(u.i)().id,t=Object(O.a)(e),n=Object(f.b)().t,c=Object(j.c)().account,r=Object(x.b)(),o=Object(O.d)(e),a=Object(O.e)(),S=Object(O.b)(),C=c&&o.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),B=null!==t&&void 0!==t?t:{},I=B.id,A=void 0===I?null:I,L=B.snapshot,V=void 0===L?null:L,E=a===p.g.LOADING||S===p.g.LOADING;return Object(l.useEffect)((function(){r(Object(h.b)(e))}),[e,r]),Object(l.useEffect)((function(){A&&V&&function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(h.d)({proposalId:A,block:Number(V)}));case 2:r(Object(h.e)({proposalId:A,snapshot:V}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[A,V,r]),t?Object(P.jsxs)(m.a,{py:"40px",children:[Object(P.jsx)(b.m,{mb:"40px",children:Object(P.jsx)(b.q,{as:d.a,to:"/voting",variant:"text",startIcon:Object(P.jsx)(b.b,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(P.jsxs)(y.a,{children:[Object(P.jsxs)(b.m,{children:[Object(P.jsxs)(b.m,{mb:"32px",children:[Object(P.jsxs)(b.W,{alignItems:"center",mb:"8px",children:[Object(P.jsx)(k.a,{proposalState:t.state}),Object(P.jsx)(k.b,{isCoreProposal:Object(w.h)(t),ml:"8px"})]}),Object(P.jsx)(b.Y,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(P.jsx)(b.m,{children:Object(P.jsx)(v.a,{children:t.body})})]}),!E&&!C&&t.state===p.d.ACTIVE&&Object(P.jsx)(le,{proposal:t,mb:"16px"}),Object(P.jsx)(ke,{votes:o})]}),Object(P.jsxs)(b.m,{children:[Object(P.jsx)(D,{proposal:t}),Object(P.jsx)(z,{choices:t.choices,votes:o})]})]})]}):Object(P.jsx)(g.a,{})}},790:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return y})),n.d(t,"f",(function(){return S}));var c=n(16),r=n(39),o=n(4),a=n(6),s=n.n(a),i=n(14),l=n(17),b=n.n(l),j=n(23),u=n(101),d=n(33),x=n(63),p=n(96),O=n(793),h=function(e){return e.author.toLowerCase()===O.a.toLowerCase()},f=function(e,t){switch(t){case x.e.COMMUNITY:return e.filter((function(e){return!h(e)}));case x.e.CORE:return e.filter((function(e){return h(e)}));case x.e.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},v=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(j.f)(),decimals:18}}]}},g=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},w=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.e,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.f,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),y=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},S=function(e){return e.reduce((function(e,t){var n,c=new b.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.d)}},792:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"...").concat(e.substring(e.length-n))}},793:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},820:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(38),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},835:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(4),r=n(32),o=(n(1),n(195)),a=n(63),s=n(0),i=["proposalState"],l=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===a.d.ACTIVE?Object(s.jsx)(o.h,Object(c.a)({},n)):t===a.d.PENDING?Object(s.jsx)(o.g,Object(c.a)({},n)):Object(s.jsx)(o.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(s.jsx)(o.d,Object(c.a)({},n)):Object(s.jsx)(o.b,Object(c.a)({},n))}},842:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return b}));var c,r=n(4),o=n(7),a=(n(1),n(3)),s=n(5),i=n(0),l=s.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),b=function(e){return Object(i.jsx)(a.m,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},863:function(e,t,n){"use strict";var c,r=n(7),o=n(5).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=o},864:function(e,t,n){"use strict";n(1);var c=n(3),r=n(15),o=n(842),a=n(0);t.a=function(e){var t=e.total,n=e.cakeBalance,s=e.cakeVaultBalance,i=e.cakePoolBalance,l=e.poolsBalance,b=e.cakeBnbLpBalance,j=Object(r.b)().t;return Object(a.jsxs)(o.a,{mb:"0",children:[Object(a.jsx)(c.cc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:j("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(a.jsx)(c.cc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Overview")}),Object(a.jsxs)(o.b,{children:[Object(a.jsx)(c.cc,{color:"secondary",children:j("Your Voting Power")}),Object(a.jsx)(c.cc,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(a.jsx)(c.cc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:j("Your Cake Held Now")}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.cc,{color:"textSubtle",fontSize:"16px",children:j("Wallet")}),Object(a.jsx)(c.cc,{textAlign:"right",children:n.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.cc,{color:"textSubtle",fontSize:"16px",children:j("Manual CAKE Pool")}),Object(a.jsx)(c.cc,{textAlign:"right",children:i.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.cc,{color:"textSubtle",fontSize:"16px",children:j("Auto CAKE Pool")}),Object(a.jsx)(c.cc,{textAlign:"right",children:s.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.cc,{color:"textSubtle",fontSize:"16px",children:j("Other Syrup Pools")}),Object(a.jsx)(c.cc,{textAlign:"right",children:l.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.cc,{color:"textSubtle",fontSize:"16px",children:j("CAKE BNB LP")}),Object(a.jsx)(c.cc,{textAlign:"right",children:b.toFormat(3)})]})]})}},865:function(e,t,n){"use strict";var c=n(6),r=n.n(c),o=n(4),a=n(14),s=n(9),i=n(1),l=n(45),b=n(33),j=n(190),u=n(23),d=n(96),x=n(17),p=n.n(x),O=n(790),h={verificationHash:null,cakeBalance:b.d,cakeVaultBalance:b.d,cakePoolBalance:b.d,poolsBalance:b.d,cakeBnbLpBalance:b.d,total:b.d};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,b=Object(i.useState)(h),x=Object(s.a)(b,2),f=x[0],m=x[1],v=Object(i.useState)(!!c),g=Object(s.a)(v,2),w=g[0],k=g[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(a.a)(r.a.mark((function n(){var a,s,i,l,b,x,h,f,v,g,w;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return a=n.t0,n.next=10,Object(j.b)(a);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(O.g)(c,i,a);case 14:l=n.sent,b=l.cakeBalance,x=l.cakeBnbLpBalance,h=l.cakePoolBalance,f=l.total,v=l.poolsBalance,g=l.cakeVaultBalance,w=l.verificationHash,t&&m((function(e){return Object(o.a)(Object(o.a)({},e),{},{verificationHash:w,cakeBalance:new p.a(b),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(h),poolsBalance:new p.a(v),cakeVaultBalance:new p.a(g),total:new p.a(f)})}));case 23:return n.prev=23,k(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,k]),Object(o.a)(Object(o.a)({},f),{},{isLoading:w})}},898:function(e,t,n){"use strict";var c,r,o,a=n(4),s=(n(1),n(903)),i=n.n(s),l=n(939),b=n.n(l),j=n(7),u=n(3),d=n(5),x=n(0),p=d.e.table(c||(c=Object(j.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=d.e.div(r||(r=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=function(e){return Object(x.jsx)(u.Y,Object(a.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:h,h2:h,h3:h,h4:h,h5:h,h6:h,p:function(e){return Object(x.jsx)(u.cc,Object(a.a)({as:"p",my:"16px"},e))},table:p,ol:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ul"},e))},pre:d.e.pre(o||(o=Object(j.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(i.a,Object(a.a)({remarkPlugins:[b.a],components:f},e))}}}]);
//# sourceMappingURL=8.6aea6e69.chunk.js.map