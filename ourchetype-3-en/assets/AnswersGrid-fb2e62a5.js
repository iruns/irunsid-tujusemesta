import{d as c,H as u,p as m,o as t,a as l,F as y,j as f,e as p,i as _,u as o,M as r,N as x,t as v,E as b,_ as g}from"./index-81b0898f.js";import{S as k}from"./PageContainer.vue_vue_type_style_index_0_lang-ed7c8e53.js";const w={class:"answers-grid"},C={key:0},A=c({__name:"AnswersGrid",props:{src:null,part:null,select:{type:Function,default:e=>{}},selected:{default:null}},setup(e){const a=e,d=u([...m]);function i(n){a.selected!==n?a.select(n):a.select()}return(n,S)=>(t(),l("div",w,[(t(!0),l(y,null,f(o(d),s=>(t(),l("div",{key:s.id,class:p(["answer",{selected:e.selected==s.id,"not-selected":!!(e.selected&&e.selected!=s.id)}])},[_(k,{src:e.src,class:"symbol",alt:"Elemen 1","x-sprites":3,"y-sprites":4,x:o(r)[s.id].x,y:o(r)[s.id].y,onClick:x(E=>i(s.id),["stop"])},null,8,["src","x","y","onClick"]),s.symbolLabels[e.part]?(t(),l("label",C,v(s.symbolLabels[e.part]),1)):b("",!0)],2))),128))]))}});const L=g(A,[["__scopeId","data-v-d46a8a77"]]);export{L as A};
