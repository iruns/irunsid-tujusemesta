import{_ as S}from"./PageContainer.vue_vue_type_style_index_0_lang-d202851b.js";import{B as q}from"./BasicButton-1d923813.js";import{q as B}from"./questions-7c1c3293.js";import{d as k,b as C,v as b,c as e,r as I,x as V,m as A,w as p,o as l,e as m,t as c,a as v,i as N,n as z,y as F,F as P,h as Q,l as R,u as $,s as D}from"./index-f26e5641.js";const E={class:"question"},H={class:"answers"},L=["onClick"],f=3,M=k({__name:"VideoImpressionPage",setup(O){const u=C(),g=b(),d=e(()=>g.lang),o=I.currentRoute.value.meta.questionSettings,r=V(B[o.areaIdx][o.questionIdx]),x=e(()=>r.value.text[d.value]),w=e(()=>r.value.answers),s=e(()=>u.getQuestionHistory(o)),_=e(()=>s.value.sas.length);function y(i){const t=s.value.sas,a=t.indexOf(i);a>=0?t.splice(a,1):_.value<f&&t.push(i),u.updateQuestionScores(s.value,r.value)}const h=[{},{}];return(i,t)=>(l(),A(S,{"inner-class":{"video-impression":!0}},{default:p(()=>[m("div",E,c(x.value),1),m("div",H,[(l(!0),v(P,null,N(w.value,(a,n)=>(l(),v("div",{key:n,class:z(["answer",{selected:s.value.sas.includes(n)}]),style:F(h[n]),onClick:T=>y(n)},c(a.text[d.value]),15,L))),128))]),Q(q,{replace:"",disabled:_.value!=f},{default:p(()=>[R(c($(D)("continue","general")),1)]),_:1},8,["disabled"])]),_:1}))}});export{M as default};
