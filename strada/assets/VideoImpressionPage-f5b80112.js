import{_ as b}from"./PageContainer.vue_vue_type_style_index_0_lang-6f44bd57.js";import{d as q,b as I,x as k,k as n,v as B,y as C,z as A,l as V,w as f,o as l,a,t as c,u,s as d,c as g,m as z,e as N,A as F,f as h,S as P,F as Q,i as R}from"./index-ca6b6884.js";import{B as $}from"./BasicButton-7a083e5d.js";const D={class:"question"},E={class:"instruction"},H={class:"answers"},L=["onClick"],M=a("div",{class:"ripple"},null,-1),v=3,O="answers-1-1.webp",U=q({__name:"VideoImpressionPage",setup(T){const p=I(),w=k();n(()=>w.lang);const t=B.currentRoute.value.meta.questionSettings,_=C(A[t.areaIdx][t.questionIdx]),x=n(()=>_.value.answers),o=n(()=>p.getQuestionHistory(t.areaIdx,t.questionIdx)),m=n(()=>o.value.sas.length);function y(i){const s=o.value.sas,r=s.indexOf(i);r>=0?s.splice(r,1):(s.push(i),m.value>v&&s.shift()),p.updateQuestionScores(o.value,_.value)}const S=[{left:"18%",top:"0%"},{left:"22%",top:"20%"},{right:"28%",bottom:"30%"},{left:"38%",top:"23%"},{left:"22%",bottom:"18%"},{right:"12%",top:"20%"},{left:"0%",bottom:"44%"},{right:"0%",top:"42%"},{right:"22%",top:"8%"},{right:"48%",top:"48%"},{right:"18%",bottom:"20%"},{right:"24%",bottom:"0%"}];return(i,s)=>(l(),V(b,{"inner-class":{"video-impression":!0}},{default:f(()=>[a("div",D,c(u(d)(1)),1),a("div",E,c(u(d)("see instructions","general")),1),a("div",H,[(l(!0),g(Q,null,z(x.value,(r,e)=>(l(),g("div",{key:e,class:N(["answer",{selected:o.value.sas.includes(e)}]),style:F(S[e]),onClick:j=>y(e)},[h(P,{src:O,"x-sprites":4,"y-sprites":3,x:e%4,y:Math.floor(e/4)},null,8,["x","y"]),M],14,L))),128))]),h($,{disabled:m.value!=v},{default:f(()=>[R(c(u(d)("continue","general")),1)]),_:1},8,["disabled"])]),_:1}))}});export{U as default};