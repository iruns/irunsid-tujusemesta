import{_ as z}from"./PageContainer.vue_vue_type_style_index_0_lang-f09e4c63.js";import{I as L}from"./IncompleteAlert-e8437e50.js";import{f as N,l as O,u as V,g as r,a3 as F,s as G,w as R,o as a,h as e,a as t,d as l,t as I,n as _,F as c,y as v,v as h,a7 as o,i as X,a6 as Y,P as D,a9 as E,ag as S,p as M,b as $,_ as q}from"./index-26994c33.js";const f=m=>(M("data-v-9c02177a"),m=m(),$(),m),H={class:"text"},J=f(()=>l("span",null,"Silakan ambil sticker berwarna ",-1)),K=f(()=>l("p",null,"dan tempelkan pada grafik di posisi ini",-1)),Q={class:"graph"},U=f(()=>l("div",null,null,-1)),W={key:0,class:"circle"},Z={key:1,class:"circle top"},ee=f(()=>l("div",{class:"col"},null,-1)),se=f(()=>l("div",null,null,-1)),le=N({__name:"GraphInstructionsPage",setup(m){const C=O(),j=V(),u=r(()=>C.progress.topArchetypes),k=r(()=>u.value.persona?S[u.value.persona]:null),g=r(()=>k.value?o.indexOf(k.value):0),y=r(()=>u.value.self?S[u.value.self]:null),d=r(()=>y.value?o.indexOf(y.value):0),b=r(()=>u.value.self?S[u.value.shadow]:null),B=r(()=>{const i=["1fr"];for(let n=0;n<o.length;n++)i.push(n!=d.value?"1fr":"1.5fr");return i.join(" ")}),x=r(()=>{const i=["1.2fr"];for(let n=0;n<o.length;n++)i.push(n!=g.value?"1fr":"1.5fr");return i.join(" ")});return F(()=>{j.setBGSetting({logoSize:.5,headerY:.5}),C.endRun()}),(i,n)=>(a(),G(z,{"inner-class":{"graph-instruction":!0}},{default:R(()=>{var P,T;return[!e(k)||!e(y)?(a(),G(L,{key:0})):(a(),t(c,{key:1},[l("div",H,[l("p",null,[J,l("b",null,I((P=e(b))==null?void 0:P.colorLabel),1)]),l("div",{class:"sticker",style:_({backgroundColor:(T=e(b))==null?void 0:T.color})},null,4),K]),l("div",Q,[l("div",{class:"cells",style:_({gridTemplateColumns:e(B),gridTemplateRows:e(x)})},[U,(a(!0),t(c,null,v(e(o),(p,s)=>(a(),t("div",{key:s,class:h(["self-label",{top:e(d)==s}])},I(p.labels.self.substring(0,2)),3))),128)),(a(!0),t(c,null,v(e(o),(p,s)=>(a(),t(c,{key:s},[l("div",{class:h(["persona-label",{top:e(g)==s}])},I(p.labels.persona.substring(0,2)),3),(a(!0),t(c,null,v(e(o),(ae,w)=>{var A;return a(),t("div",{key:w+"-"+s,class:h(["cell",{"odd-row":s%2==0,"odd-col":w%2==0}])},[e(d)!=w||e(g)!=s?(a(),t("div",W)):(a(),t("div",Z,[l("div",{class:"stuck-sticker",style:_({backgroundColor:(A=e(b))==null?void 0:A.color})},null,4)]))],2)}),128))],64))),128))],4),l("div",{class:"cols",style:_({gridTemplateColumns:e(B)})},[ee,(a(!0),t(c,null,v(e(o),(p,s)=>(a(),t("div",{key:s,class:h({col:!0,last:s<11,top:e(d)==s||e(d)-1==s})},null,2))),128))],4),l("div",{class:"rows",style:_({gridTemplateRows:e(x)})},[se,(a(!0),t(c,null,v(e(o),(p,s)=>(a(),t("div",{key:s,class:"row"},[l("div",{class:h(["line",{top:e(g)==s}])},null,2)]))),128))],4)]),X(E,{to:{name:e(D).OutroPasscode},replace:""},{default:R(()=>[Y(" Lanjut ")]),_:1},8,["to"])],64))]}),_:1}))}});const re=q(le,[["__scopeId","data-v-9c02177a"]]);export{re as default};
