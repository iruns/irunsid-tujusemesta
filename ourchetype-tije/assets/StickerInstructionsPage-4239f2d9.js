import{d as m,o as k,a as V,V as P,b as C,W as N,c as s,s as o,L as W,v as $,x as f,y as A,h as g,e as a,t as c,u as l,B as d,H as I,k as E,E as H,X as u,l as x}from"./index-ebe57929.js";const O={class:"waiting-validation"},T=P('<h2>Processing your result. Please wait...</h2><div><div class="spinner-stacker"><div class="spinner-container"><div class="spinner spinner-1" style="border:turquoise 5px solid;"></div></div></div><div class="spinner-stacker"><div class="spinner-container"><div class="spinner spinner-2" style="border:tomato 5px solid;"></div></div></div><div class="spinner-stacker"><div class="spinner-container"><div class="spinner spinner-3" style="border:grey 5px solid;"></div></div></div></div>',2),q=[T],z=m({__name:"WaitingValidation",setup(S){return(r,t)=>(k(),V("div",O,q))}});const D=a("div",null,null,-1),L={class:"text post-valid"},M={class:"post-valid"},X=m({__name:"StickerInstructionsPage",setup(S){const r=C();N();const t=s(()=>r.progress.topArchetypes),v=s(()=>t.value.persona?u[t.value.persona]:null);s(()=>v.value?x.indexOf(v.value):0);const _=s(()=>t.value.self?u[t.value.self]:null);s(()=>_.value?x.indexOf(_.value):0);const p=s(()=>t.value.self?u[t.value.shadow]:null);o(5);const b=o(4.6),w=o(20.3);s(()=>{const n=[];for(let e=0;e<3;e++)for(let i=0;i<4;i++)n.push(w.value*e+b.value*i);return n}),o(1.6);const B=o(6.8);s(()=>{const n=[];for(let e=0;e<12;e++)n.push(B.value*e);return n});const y=o(!1);return W(async()=>{r.endRun(),setTimeout(()=>{y.value=!0},2e3)}),(n,e)=>(k(),$(A,{"inner-class":{"sticker-instructions":!0,validated:y.value}},{default:f(()=>{var i,h;return[D,g(z,{class:"pre-valid"}),a("div",L,[a("p",null,[a("span",null,c(l(d)("1")+" "),1),a("b",null,c(l(d)(((i=l(p))==null?void 0:i.color.name)||"")),1)])]),a("div",{class:"sticker post-valid",style:I({backgroundColor:((h=l(p))==null?void 0:h.color.hex)||"white"})},null,4),a("div",M,[g(H,{replace:""},{default:f(()=>[E(c(l(d)("continue")),1)]),_:1})])]}),_:1},8,["inner-class"]))}});export{X as default};
