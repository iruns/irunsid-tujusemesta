import{_ as k}from"./PageContainer.vue_vue_type_style_index_0_lang-30578961.js";import{B as x}from"./BasicButton-bf7cdf78.js";import{d as v,b as V,c as E,l as N,w as m,o as f,e as t,t as n,u as g,s as b,a as S,q as C,k as B,F,h as w}from"./index-2d50e498.js";import{s as D}from"./math-18f78e4d.js";import{b as u}from"./beansAndBlends-c8aab6e3.js";const M=t("p",null," From bean scores: ",-1),L=v({__name:"ResultPage",setup(P){const a=V(),_={},o=a.progress.scores,d={};let i=0;for(const s in o){const e=s;i=Math.max(i,o[e]);const l={};_[e]=l,u.forEach((c,y)=>{l[y]=c.beans[e]||0})}for(const s in o){const e=s;d[e]=o[e]/i}const r={};u.forEach((s,e)=>{r[e]=0}),D(r,r,_,d);const p=[];u.forEach((s,e)=>{p[e]=[e,r[e]]}),p.sort((s,e)=>e[1]-s[1]),a.selectBlend(p[0][0]);const h=E(()=>a.progress.blend!=null?u[a.progress.blend]:null);return(s,e)=>(f(),N(k,{"inner-class":{result:!0}},{default:m(()=>[t("p",null,n(g(b)("1")),1),t("p",null,n(JSON.stringify(h.value,null,2)),1),t("div",null,[M,(f(),S(F,null,C(d,(l,c)=>t("div",{key:c},[t("b",null,n(c)+": ",1),B(n(Math.round(l*100)),1)])),64))]),w(x,{replace:""},{default:m(()=>[B(n(g(b)("continue","general")),1)]),_:1})]),_:1}))}});export{L as default};
