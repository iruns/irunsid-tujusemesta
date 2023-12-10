import{d as T,b as C,c as p,a as m,e as r,n as w,u as e,t as k,r as N,o as g,f as t,_ as M,g as $,P as _,h as o,F,i as A,j as s,p as S,R as I,k as j,l as K,m as B,q as D}from"./index-564c381d.js";const L={class:"free-menu-item"},O=T({__name:"FreeMenuItem",props:{route:null,text:null},setup(d){const l=d;C();const h=p(()=>t[l.route.name]),R=p(()=>h.value.meta.guards),v=p(()=>h.value.meta.flow),P=p(()=>!v.value.isDone||v.value.isDone()),i=p(()=>{var x,a;return P.value?(x=R.value)==null?void 0:x.deleteProgress:(a=R.value)==null?void 0:a.fakeProgress});function u(){N.replace({name:l.route.name})}return(x,a)=>(g(),m("div",L,[r("div",{class:w(["was-done",{done:e(P),switchable:!!e(i)}]),onClick:a[0]||(a[0]=y=>{var f;return(f=e(i))==null?void 0:f()})},null,2),r("a",{onClick:u},k(d.text),1)]))}});const n=M(O,[["__scopeId","data-v-01970088"]]),c=d=>(B("data-v-40183fef"),d=d(),D(),d),V={class:"free-menu"},W={class:"content"},G=c(()=>r("div",{class:"switch"},[r("div",{class:"indicator"})],-1)),b=c(()=>r("span",null,"Auto-Fake Progress",-1)),q=[G,b],z=c(()=>r("h2",null,"Intro",-1)),E=c(()=>r("h2",null,"Ruang 1",-1)),H=c(()=>r("h2",null,"Ruang 2 Persona",-1)),Y=c(()=>r("h2",null,"Ruang 3 Shadow",-1)),J=c(()=>r("h2",null,"Ruang 4",-1)),Q=c(()=>r("h2",null,"Ruang 5 Self",-1)),U=c(()=>r("h2",null,"Ruang 6",-1)),X=c(()=>r("h2",null,"Result",-1)),Z={class:"archetypes"},ee={class:"part"},te=["onClick"],oe=c(()=>r("div",{class:"spacer"},null,-1)),se=T({__name:"FreeMenuPage",setup(d){const l=C(),h=$();h.switchFreeMode(!0);const R=p(()=>l.progress.topArchetypes),v=[_.Persona,_.Shadow,_.Self];return(P,i)=>(g(),m("div",V,[r("div",W,[r("div",{class:w(["switch-control",{on:e(h).isAutoFakingProgress}]),onClick:i[0]||(i[0]=u=>e(h).switchAutoFakingProgress())},q,2),r("a",{class:"link",style:{color:"red"},onClick:i[1]||(i[1]=(...u)=>e(l).resetAll&&e(l).resetAll(...u))}," Hapus Semua Data "),r("a",{class:"link",style:{color:"red"},onClick:i[2]||(i[2]=(...u)=>e(l).reset&&e(l).reset(...u))}," Reset Progress "),z,o(n,{route:e(t)[e(s).Welcome],text:"Welcome >"},null,8,["route"]),o(n,{route:e(t)[e(s).OnlineReg],text:"Online Registration >"},null,8,["route"]),o(n,{route:e(t)[e(s).IntroToTicketBooth],text:"Ke Loket >"},null,8,["route"]),o(n,{route:e(t)[e(s).IntroTicketBooth],text:"Loket >"},null,8,["route"]),E,o(n,{route:e(t)[e(s).Room1Intro],text:"Intro >"},null,8,["route"]),o(n,{route:e(t)[e(s).Room1ToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),H,o(n,{route:e(t)[e(s).PersonaIntro],text:"Intro >"},null,8,["route"]),o(n,{route:e(t)[e(s).PersonaAnswers],text:"Answers >"},null,8,["route"]),o(n,{route:e(t)[e(s).PersonaFinished],text:"Finished >"},null,8,["route"]),o(n,{route:e(t)[e(s).PersonaToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),Y,o(n,{route:e(t)[e(s).ShadowIntro],text:`Passcode > [${e(S)[e(I).Room3]}] >`},null,8,["route","text"]),o(n,{route:e(t)[e(s).ShadowPreRecs],text:"Pre Recordings >"},null,8,["route"]),o(n,{route:e(t)[e(s).ShadowRecs],text:"Recordings >"},null,8,["route"]),o(n,{route:e(t)[e(s).ShadowMost],text:"Yang Paling >"},null,8,["route"]),o(n,{route:e(t)[e(s).ShadowToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),J,o(n,{route:e(t)[e(s).Room4Intro],text:"Intro >"},null,8,["route"]),o(n,{route:e(t)[e(s).Room4ToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),Q,o(n,{route:e(t)[e(s).SelfIntro],text:`Passcode > [${e(S)[e(I).Room5]}]`},null,8,["route","text"]),o(n,{route:e(t)[e(s).SelfAnswers],text:"Answers >"},null,8,["route"]),U,o(n,{route:e(t)[e(s).Room6Intro],text:"Intro >"},null,8,["route"]),o(n,{route:e(t)[e(s).Room6ToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),X,o(n,{route:e(t)[e(s).ResultIntro],text:"Welcome >"},null,8,["route"]),r("div",Z,[(g(),m(F,null,A(v,(u,x)=>r("div",{key:x},[j(k(u)+" ",1),r("div",ee,[(g(!0),m(F,null,A(e(K),(a,y)=>(g(),m("div",{key:y,class:w({archetype:!0,active:a.id==e(R)[u]}),onClick:f=>u==e(_).Persona?e(l).forceTopArchProgress(e(_).Persona,a.id):u==e(_).Shadow?e(l).selectShadow(a.id):u==e(_).Self?e(l).selectSelf(a.id):()=>{}},k(a.id),11,te))),128))])])),64))]),o(n,{route:e(t)[e(s).GraphInstructions],text:"Graph Instructions >"},null,8,["route"]),o(n,{route:e(t)[e(s).ResultPasscode],text:`Passcode > [${e(S)[e(I).Result]}]`},null,8,["route","text"]),o(n,{route:e(t)[e(s).Result],text:"Result >"},null,8,["route"]),oe])]))}});const re=M(se,[["__scopeId","data-v-40183fef"]]);export{re as default};
