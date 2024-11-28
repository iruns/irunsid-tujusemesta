import{d as C,b as N,c as m,a as x,e as r,n as I,u as e,t as k,r as j,o as h,f as t,_ as $,g as T,P as d,h as o,F as y,i as F,j as s,p as P,R as S,k as M,l as D,m as K,q as G,s as V}from"./index-4a676b83.js";const W={class:"free-menu-item"},B=C({__name:"FreeMenuItem",props:{route:null,text:null},setup(_){const a=_;N();const p=m(()=>t[a.route.name]),g=m(()=>p.value.meta.guards),v=m(()=>p.value.meta.flow),w=m(()=>!v.value.isDone||v.value.isDone()),i=m(()=>{var R,l;return w.value?(R=g.value)==null?void 0:R.deleteProgress:(l=g.value)==null?void 0:l.fakeProgress});function u(){j.replace({name:a.route.name})}return(R,l)=>(h(),x("div",W,[r("div",{class:I(["was-done",{done:e(w),switchable:!!e(i)}]),onClick:l[0]||(l[0]=A=>{var f;return(f=e(i))==null?void 0:f()})},null,2),r("a",{onClick:u},k(_.text),1)]))}});const n=$(B,[["__scopeId","data-v-81c49cd5"]]),c=_=>(G("data-v-618f4669"),_=_(),V(),_),O={class:"free-menu"},q={class:"content"},z=c(()=>r("div",{class:"switch"},[r("div",{class:"indicator"})],-1)),E=c(()=>r("span",null,"Auto-Fake Progress",-1)),H=[z,E],L=c(()=>r("h2",null,"Intro",-1)),b=c(()=>r("h2",null,"Ruang 1",-1)),J=c(()=>r("h2",null,"Ruang 2 Persona",-1)),Q=c(()=>r("h2",null,"Ruang 3 Shadow",-1)),U=c(()=>r("h2",null,"Ruang 4",-1)),X=c(()=>r("h2",null,"Ruang 5 Self",-1)),Y=c(()=>r("h2",null,"Ruang 6",-1)),Z=c(()=>r("h2",null,"Result",-1)),ee={class:"archetypes"},te={class:"part"},oe=["onClick"],se=c(()=>r("div",{class:"spacer"},null,-1)),ne=C({__name:"FreeMenuPage",setup(_){const a=N(),p=T();p.switchFreeMode(!0);const g=m(()=>a.resultData.topArchetypes),v=[d.Persona,d.Shadow,d.Self];return(w,i)=>(h(),x("div",O,[r("div",q,[r("div",{class:I(["switch-control",{on:e(p).isAutoFakingProgress}]),onClick:i[0]||(i[0]=u=>e(p).switchAutoFakingProgress())},H,2),r("a",{class:"link",style:{color:"red"},onClick:i[1]||(i[1]=(...u)=>e(a).resetAll&&e(a).resetAll(...u))}," Hapus Semua Data "),r("a",{class:"link",style:{color:"red"},onClick:i[2]||(i[2]=(...u)=>e(a).reset&&e(a).reset(...u))}," Reset Progress "),L,o(n,{route:e(t)[e(s).Welcome],text:"Welcome >"},null,8,["route"]),o(n,{route:e(t)[e(s).OnlineReg],text:"Online Registration >"},null,8,["route"]),b,o(n,{route:e(t)[e(s).Room1Intro],text:"Intro >"},null,8,["route"]),o(n,{route:e(t)[e(s).Room1Answers],text:"Answers >"},null,8,["route"]),o(n,{route:e(t)[e(s).Room1ToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),J,o(n,{route:e(t)[e(s).PersonaIntro],text:`Passcode > [${e(P)[e(S).Room2]}] >`},null,8,["route","text"]),o(n,{route:e(t)[e(s).PersonaAnswers],text:"Answers >"},null,8,["route"]),o(n,{route:e(t)[e(s).PersonaFinished],text:"Finished >"},null,8,["route"]),o(n,{route:e(t)[e(s).PersonaToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),Q,o(n,{route:e(t)[e(s).ShadowIntro],text:`Passcode > [${e(P)[e(S).Room3]}] >`},null,8,["route","text"]),o(n,{route:e(t)[e(s).ShadowAnswerGroups],text:"Answer Groups >"},null,8,["route"]),o(n,{route:e(t)[e(s).ShadowAnswers],text:"Answers >"},null,8,["route"]),o(n,{route:e(t)[e(s).ShadowToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),U,o(n,{route:e(t)[e(s).Room4Intro],text:"Intro >"},null,8,["route"]),o(n,{route:e(t)[e(s).Room4ToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),X,o(n,{route:e(t)[e(s).SelfIntro],text:`Passcode > [${e(P)[e(S).Room5]}]`},null,8,["route","text"]),o(n,{route:e(t)[e(s).SelfAnswers],text:"Answers >"},null,8,["route"]),o(n,{route:e(t)[e(s).SelfToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),Y,o(n,{route:e(t)[e(s).Room6Intro],text:"Ruang 6 >"},null,8,["route"]),o(n,{route:e(t)[e(s).Room6ToNextRoom],text:"Ke Ruang Selanjutnya >"},null,8,["route"]),Z,o(n,{route:e(t)[e(s).ResultIntro],text:"Welcome >"},null,8,["route"]),r("div",ee,[(h(),x(y,null,F(v,(u,R)=>r("div",{key:R},[M(k(u)+" ",1),r("div",te,[(h(!0),x(y,null,F(e(D),(l,A)=>(h(),x(y,{key:A},[u!=e(d).Persona||l.persona.idx!=null?(h(),x("div",{key:0,class:I(["archetype",{archetype:!0,active:l.id==e(g)[u]}]),onClick:f=>u==e(d).Persona?e(a).forceTopArchProgress(e(d).Persona,l.id):u==e(d).Shadow?e(a).selectShadow(l.id):u==e(d).Self?e(a).selectSelf(l.id):()=>{}},k(l.id),11,oe)):K("",!0)],64))),128))])])),64))]),o(n,{route:e(t)[e(s).WireInstructions],text:"Sticker Instructions >"},null,8,["route"]),o(n,{route:e(t)[e(s).GraphInstructions],text:"Graph Instructions >"},null,8,["route"]),o(n,{route:e(t)[e(s).ResultPasscode],text:`Passcode > [${e(P)[e(S).Result]}]`},null,8,["route","text"]),o(n,{route:e(t)[e(s).Result],text:"Result >"},null,8,["route"]),se])]))}});const ue=$(ne,[["__scopeId","data-v-618f4669"]]);export{ue as default};