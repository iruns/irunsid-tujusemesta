import{_ as P}from"./PageContainer.vue_vue_type_style_index_0_lang-b7e561a3.js";import{I as V}from"./IncompleteAlert-dcc6c160.js";import{d as z,b as D,Q as E,c as n,s as d,H as L,v as A,x as N,o as l,u as e,a,e as s,t as k,y as G,F as u,i as x,n as O,J as i,l as v,h as M,k as R,C as X,R as F}from"./index-2ec14353.js";const Y=s("div",null,null,-1),K={class:"text"},Q={class:"graph"},T={class:"row-labels"},W={class:"col-sets"},$={class:"col-labels"},j={class:"cells"},q=s("div",{class:"circle"},null,-1),U=[q],Z={class:"overlay"},oe=z({__name:"GraphInstructionsPage",setup(ee){const B=D();E();const _=n(()=>B.progress.topArchetypes),p=n(()=>_.value.persona?F[_.value.persona]:null),I=n(()=>p.value?v.indexOf(p.value):0),h=n(()=>_.value.self?F[_.value.self]:null),b=n(()=>h.value?v.indexOf(h.value):0),f=d(5),S=d(4.6),H=d(20.3),y=n(()=>{const c=[];for(let o=0;o<3;o++)for(let r=0;r<4;r++)c.push(H.value*o+S.value*r);return c}),g=d(0),w=d(6.8),m=n(()=>{const c=[];for(let o=0;o<12;o++)c.push(w.value*o);return c});L(()=>{B.endRun()});const J="ABCDEFGHIJKLMNO";return(c,o)=>(l(),A(P,{"inner-class":{"graph-instructions":!0}},{default:N(()=>[!e(p)||!e(h)?(l(),A(V,{key:0,message:JSON.stringify({persona:e(p),self:e(h)},null,2)},null,8,["message"])):(l(),a(u,{key:1},[Y,s("div",K,[s("p",null,k(e(G)("1")),1)]),s("div",Q,[s("div",T,[(l(!0),a(u,null,x(e(v),(r,t)=>(l(),a("div",{key:t,class:O(["label",{focus:t==e(I)}]),style:i({top:f.value+e(y)[t]+"vw"})},k(t+1),7))),128))]),s("div",W,[s("div",$,[(l(!0),a(u,null,x(e(v),(r,t)=>(l(),a("div",{key:t,class:O(["label",{focus:t==e(b)}]),style:i({width:w.value+"vw",left:g.value+e(m)[t]+"vw"})},k(J[t]),7))),128))]),s("div",j,[(l(!0),a(u,null,x(e(v),(r,t)=>(l(),a(u,null,[(l(!0),a(u,null,x(e(v),(se,C)=>(l(),a("div",{key:C+"-"+t,class:"cell",style:i({width:w.value+"vw",top:f.value+e(y)[t]+"vw",left:g.value+e(m)[C]+"vw"})},U,4))),128))],64))),256))]),s("div",Z,[s("div",{class:"guide stuck-sticker",style:i({left:g.value+e(m)[e(b)]+1+"vw",top:f.value+e(y)[e(I)]+0+"vw"})},null,4),s("div",{class:"guide guide-col",style:i({left:g.value+e(m)[e(b)]-0+"vw",width:w.value-.6+"vw"})},null,4),s("div",{class:"guide guide-row",style:i({top:f.value+e(y)[e(I)]+-.2+"vw",height:S.value+"vw"})},null,4)])])]),M(X,{replace:""},{default:N(()=>[R(k(e(G)("continue","general")),1)]),_:1})],64))]),_:1}))}});export{oe as default};