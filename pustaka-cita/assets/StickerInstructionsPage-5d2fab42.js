import{d as v,b as y,g as h,c as d,N as f,U as m,z as w,A as _,B as k,o as b,e as a,t as n,u as e,C as o,K as x,h as S,k as B,H as C,V as D}from"./index-be1d4e69.js";const V={class:"basic-frame"},N={style:{color:"black"}},A=v({__name:"StickerInstructionsPage",setup(P){const t=y(),u=h(),i=d(()=>t.resultData.topArchetypes),c=d(()=>i.value.self?D[i.value.shadow]:null),p=0;return f(async()=>{if(t.progressData.revalidated)t.endRun();else{const l=Date.now();if(await t.endRun()){const s=p-(Date.now()-l);s>0&&await m(s),t.setRevalidation(!0)}}}),(l,g)=>(b(),w(k,{"inner-class":{"wire-instructions":!0}},{default:_(()=>{var s,r;return[a("p",null,n(e(o)("1")+" "),1),a("div",null,[a("div",V,[a("div",{class:"wire",style:x({backgroundColor:((s=e(c))==null?void 0:s.shadow.hex)||"black"})},null,4)]),a("h2",N,n(e(o)(((r=e(c))==null?void 0:r.shadow.color)||"")),1)]),a("p",null,n(e(o)("2")+" "),1),S(C,{disabled:!e(u).isLocked,replace:""},{default:_(()=>[B(n(e(o)("continue")),1)]),_:1},8,["disabled"])]}),_:1}))}});export{A as default};
