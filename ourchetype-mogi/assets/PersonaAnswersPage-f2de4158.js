import{d as z,b as E,H as j,c as r,o as d,a as f,e as v,t as y,u as t,A as M,F as A,i as k,n as N,I as m,J,K as x,v as Q,w as V,L as K,M as g,k as G,y as U,B as W,N as X,O as $,r as L,f as Y,Q as Z,_ as ee}from"./index-dba6776b.js";const se={class:"instruction"},te={class:"shapes"},ne={class:"your-answers"},ae={class:"answers"},oe=["onClick"],re=z({__name:"PersonaStepSet",props:{stepIdx:null,idxOffset:{default:0},onSelect:null},setup(h){const b=h,c=E(),_=j(),I=r(()=>c.progressData.personaHistory),l=r(()=>I.value[b.stepIdx]),u=r(()=>x[l.value.answerSetIdx]);return(B,C)=>(d(),f("div",{class:N(["step-set",h.idxOffset?h.idxOffset==1?"next-1":h.idxOffset==-1?"prev-1":!1:"active"])},[v("p",se,y(t(M)("1")),1),v("div",te,[(d(!0),f(A,null,k(t(J),(i,p)=>(d(),f("div",{key:p,class:N(["shape",{active:p==t(u).question}]),style:m({backgroundColor:p==t(u).question?i:"white"})},null,6))),128))]),v("p",ne,y(t(M)("2")),1),v("div",ae,[(d(!0),f(A,null,k(t(u).answers,(i,p)=>(d(),f("div",{key:p,class:"answer",onClick:H=>h.onSelect(p)},[v("p",null,y(i.text[t(_).lang]),1)],8,oe))),128))])],2))}});const le={class:"persona-answers"},ce={class:"progress"},ue=z({__name:"PersonaAnswersPage",setup(h){const c=E(),_=Q(c.progressData.personaHistory),I=r(()=>{const e={};return _.value.map(s=>e[x[s.answerSetIdx].id]=!0),e}),l=r(()=>_.value.length-1),u=r(()=>X.last(_.value)||null),B=r(()=>l.value==g-1),C=r(()=>{let e=0,s=$[e];for(;l.value+2>s.until;)e++,s=$[e];return s.focusBetween}),i=Q([]);function p(){var n;i.value=x.filter(a=>!(a.question==H.value||I.value[a.id]));const e=[],s=c.resultData.personaScoresSum;for(const a in s){const o=a;e.push({archId:o,score:s[o]})}e.sort((a,o)=>o.score-a.score),e.length=C.value;for(let a=0;a<i.value.length;a++){const o=i.value[a];o.fitness=0;const{contrasts:T}=o;for(let S=0;S<e.length;S++){const q=e[S];for(let P=S+1;P<e.length;P++){const D=e[P];o.fitness+=(((n=T[q.archId])==null?void 0:n[D.archId])||0)/(1+q.score+D.score)}}o.fitness+=Math.random(),o.fitness*=1+Math.random()*.1}i.value.sort((a,o)=>o.fitness-a.fitness);const w=i.value[0];w&&c.addPersonaStep({answerSetIdx:x.indexOf(Z(w))})}const H=r(()=>u.value?x[u.value.answerSetIdx].question:null),F=r(()=>!B.value&&(!u.value||u.value.selectedAnswerIdx!=null));V(F,(e,s)=>{e!=s&&e&&p()},{immediate:!0});function R(e){c.selectPersonaAnswer(e)}const O=r(()=>{const e=u.value;if(!e)return 0;let s=_.value.length;return e.selectedAnswerIdx==null&&s--,s});return K(()=>{O.value==g&&c.removePersonaStep()}),V(O,e=>{var s;if(e==g){c.selectPersona();const w=L.currentRoute.value.name,n=(s=Y[w].meta.flow.next)==null?void 0:s.page;L.replace({name:n})}}),(e,s)=>(d(),f("div",le,[v("div",{class:"steps-container",style:m({top:"-"+t(l)*1.5*100+"vh"})},[(d(!0),f(A,null,k(t(c).progressData.personaHistory,(w,n)=>(d(),f(A,null,[G(y(t(l)+", "+n+", "+(t(l)-n))+" ",1),Math.abs(t(l)-n)<=1?(d(),U(re,{key:n,"step-idx":n,"idx-offset":n-t(l),"on-select":R,style:m({top:n*1.5*100+"vh"})},null,8,["step-idx","idx-offset","style"])):W("",!0)],64))),256))],4),v("div",ce,[v("div",{class:"fill",style:m({width:t(l)/t(g)*100+"%"})},null,4)])]))}});const de=ee(ue,[["__scopeId","data-v-d8559299"]]);export{de as default};
