import{d as O,c as I,x as o,y as M,O as Q,o as a,a as l,e as P,F as m,i as B,G as E,t as g,u as s,n as W,_ as A,s as j,w as U,v as p,h as $,z as q,A as J,k as X,Q as Y,D as Z}from"./index-97add1d6.js";import{_ as w}from"./PageContainer.vue_vue_type_style_index_0_lang-64212e69.js";const T=O({__name:"PostPaper",props:{content:null,size:null},setup(c){const t=c,d=I(()=>t.content),f=o(!1),n=o(5),i=o(null),x=I(()=>t.size*.8),y=o(0);let R=0;const G=20;let z=-1;M(d,()=>{clearTimeout(z),z=setTimeout(K,1e3)});const b=o([]);let k=-1;const H=o("");function K(){b.value.length=0,t.content.split(/\r\n|\n/).forEach(V=>{const S=[];b.value.push(S);let r=!1;V.split(new RegExp("(?<=[.|!|?])","g")).forEach(u=>{const v=[];S.push(v);const _=u.indexOf("!")>-1?1.5:1;u.split(/\s/).forEach(e=>{const C=e.toUpperCase()==e?1.5:1,h=[];e[0]=="*"&&(h.push("*"),e=e.substring(1));const D=e.length;let F=!1;e[D-1]=="*"&&(F=!0,e=e.substring(0,D-1)),h.push(...e.split("*")),F&&h.push("*"),h.forEach(N=>{if(N=="*")r=!r;else{const L=r?1.2:1;v.push({text:N,size:12*_*C*L,bold:r})}})})})}),k=setInterval(()=>{y.value=i.value.getClientRects()[0].height,R<G&&y.value>x.value?(n.value*=.9,R++):(clearInterval(k),f.value=!0,H.value=d.value)},5)}return Q(()=>{clearInterval(k),clearTimeout(z)}),(V,S)=>(a(),l("div",{ref:"paperEl",class:W(["post-paper",{settled:f.value}]),style:E({width:c.size+"px",height:c.size+"px",padding:(c.size-s(x))/2+"px",backgroundColor:"white",boxShadow:"rgba(0, 0, 0, 0.1) 1px 1px 5px"})},[P("div",{ref_key:"content",ref:i,class:"content",style:E({marginTop:(f.value?(s(x)-y.value)/2:0)+"px"})},[(a(!0),l(m,null,B(b.value,(r,u)=>(a(),l("div",{key:u,class:"paragraph neutral"},[(a(!0),l(m,null,B(r,(v,_)=>(a(),l(m,{key:u+"-"+_},[(a(!0),l(m,null,B(v,(e,C)=>(a(),l("div",{ref_for:!0,ref:"wordEls",key:u+"-"+_+"-"+C,class:"word",style:E({color:"black",fontFamily:"Kalam",fontSize:e.size*n.value+"px",fontWeight:e.bold?"bold":"normal"})},g(e.text),5))),128))],64))),128))]))),128))],4)],6))}});const ee=A(T,[["__scopeId","data-v-15d93f3a"]]),te=["placeholder"],se=O({__name:"ResahSubmission",setup(c){const t=o(""),d=I(()=>t.value.length>0);return(f,n)=>(a(),j(w,{"inner-class":{"resah-submission":!0}},{default:U(()=>[P("p",null,g(s(p)("1")),1),$(ee,{content:t.value,size:200},null,8,["content"]),q(P("textarea",{placeholder:s(p)("placeholder"),"onUpdate:modelValue":n[0]||(n[0]=i=>t.value=i)},null,8,te),[[J,t.value]]),$(Z,{class:"cta",onClick:n[1]||(n[1]=i=>s(Y)(t.value))},{default:U(()=>[X(g(s(d)?s(p)("submit","general"):s(p)("skip"))+" & "+g(s(p)("continue","general")),1)]),_:1})]),_:1}))}});const le=A(se,[["__scopeId","data-v-7d172275"]]);export{le as default};
