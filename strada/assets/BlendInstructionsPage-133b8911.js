import{_ as C}from"./PageContainer.vue_vue_type_style_index_0_lang-815efc55.js";import{d as E,b as M,c as k,C as N,m as P,w as x,o as c,a as d,e as n,t as a,u,v as _,F as g,q as I,s as V,h as T,k as w,p as L,i as D,_ as F}from"./index-55a02f94.js";import{B as H}from"./BasicButton-ee194299.js";import{b as v,a as $}from"./beansAndBlends-c8aab6e3.js";import{s as q}from"./math-18f78e4d.js";/* empty css                                                                    */const A=i=>(L("data-v-e206e0b0"),i=i(),D(),i),R={key:0,class:"content"},j={class:"step"},z=A(()=>n("div",{class:"step-number"},"1",-1)),G={class:"step-number"},J=["innerHTML"],K={class:"step"},O={class:"step-number"},Q={class:"step-number"},U=E({__name:"BlendInstructionsPage",setup(i){const r=M(),y={},p=r.progress.scores,B={};let b=0;for(const t in p){const e=t;b=Math.max(b,p[e]);const s={};y[e]=s,v.forEach((o,S)=>{s[S]=o.beans[e]||0})}for(const t in p){const e=t;B[e]=p[e]/b}const m={};v.forEach((t,e)=>{m[e]=0}),q(m,m,y,B);const f=[];v.forEach((t,e)=>{f[e]=[e,m[e]]}),f.sort((t,e)=>e[1]-t[1]),r.selectBlend(f[0][0]);const l=k(()=>r.progress.blend!=null?v[r.progress.blend]:null),h=k(()=>{const t=[];if(l.value)for(const e in l.value.beans){const s=e,o=l.value.beans[s];o&&t.push({amount:o,bean:$[s]})}return t});return N(()=>{r.endRun()}),(t,e)=>(c(),P(C,{"inner-class":{instructions:!0}},{default:x(()=>[l.value?(c(),d("div",R,[n("div",j,[z,n("p",null,a(u(_)("1")),1)]),(c(!0),d(g,null,I(h.value,(s,o)=>(c(),d("div",{class:"step",key:"b"+o},[s.amount?(c(),d(g,{key:0},[n("div",G,a(2+o),1),n("p",{innerHTML:u(_)("bean").replace("<num>",""+s.amount).replace("<col>",`<b class='dispenser-color' style='color: ${s.bean.color.hex}'>`+s.bean.color.id+"</b>")},null,8,J)],64)):V("",!0)]))),128)),n("div",K,[n("div",O,a(2+h.value.length),1),n("p",null,a(u(_)("sticker").replace("<num>",""+l.value.idx)),1)]),(c(),d(g,null,I(4,s=>n("div",{class:"step",key:"s"+s},[n("div",Q,a(2+s+h.value.length),1),n("p",null,a(u(_)(""+s)),1)])),64)),T(H,{replace:""},{default:x(()=>[w(a(u(_)("continue","general")),1)]),_:1})])):V("",!0)]),_:1}))}});const te=F(U,[["__scopeId","data-v-e206e0b0"]]);export{te as default};
