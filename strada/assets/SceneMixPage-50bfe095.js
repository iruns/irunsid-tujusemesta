import{_ as Q}from"./PageContainer.vue_vue_type_style_index_0_lang-373ba358.js";import{B as N}from"./BasicButton-55e17bae.js";import{q as V}from"./questions-e434586c.js";import{d as A,b as I,v as $,c as o,r as z,l as F,w as f,o as a,e as d,u,s as l,a as r,t as c,m as M,q as h,F as S,n as P,y as R,h as j,k as D}from"./index-3dd395e6.js";const E={class:"questions"},H={key:0,class:"instruction"},L={class:"step-number"},O={class:"answers"},T=d("div",{class:"line"},null,-1),G=["onClick"],J=1,ee=A({__name:"SceneMixPage",setup(K){const p=I(),q=$(),y=o(()=>q.lang),n=z.currentRoute.value.meta.questionSettings,x=o(()=>{const e=[n];for(let t=1;t<(n.nQuestions||1);t++)e.push(Object.assign({},n,{questionIdx:n.questionIdx+t}));return e}),k=n.nQuestions||1,v=o(()=>{let e=[];const t=V[n.areaIdx];for(let s=0;s<k;s++)e.push(t[n.questionIdx+s]);return e}),_=o(()=>x.value.map(e=>p.getQuestionHistory(e))),g=o(()=>_.value.map(e=>e.sas.length)),w=o(()=>{for(let e=0;e<g.value.length;e++)if(g.value[e]!=J)return!1;return!0});function b(e,t){const s=_.value[e];s.sas[0]==t?s.sas.length=0:s.sas[0]=t,p.updateQuestionScores(s,v.value[e])}const C=[{},{}];return(e,t)=>(a(),F(Q,{"inner-class":{"scene-mix-page":!0}},{default:f(()=>[d("div",E,[u(l)("instruction")?(a(),r("div",H,c(u(l)("instruction")),1)):M("",!0),d("div",L,c(u(l)("number")),1),(a(!0),r(S,null,h(v.value,(s,m)=>(a(),r("div",{key:m,class:"question"},[d("div",O,[T,(a(!0),r(S,null,h(s.answers,(B,i)=>(a(),r("div",{key:i,class:P(["answer",{selected:_.value[m].sas.includes(i)}]),style:R(C[i]),onClick:U=>b(m,i)},c(B.text[y.value]),15,G))),128))])]))),128)),j(N,{class:"cta",replace:"",disabled:!w.value},{default:f(()=>[D(c(u(l)("continue","general")),1)]),_:1},8,["disabled"])])]),_:1}))}});export{ee as default};
