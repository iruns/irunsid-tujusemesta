import{d as H,c as I,s as c,w as M,Q as O,o as l,a as i,e as P,F as g,i as B,H as E,t as b,u as e,n as Q,_ as T,S as W,g as j,v as q,x as U,y as G,B as n,h as $,z as J,A as X,k as Y,T as Z,E as ee}from"./index-ebe57929.js";const te=H({__name:"PostPaper",props:{content:null,size:null},setup(d){const a=d,o=I(()=>a.content),f=c(!1),v=c(5),x=c(null),s=I(()=>a.size*.8),r=c(0);let F=0;const w=20;let y=-1;M(o,()=>{clearTimeout(y),y=setTimeout(K,1e3)});const z=c([]);let k=-1;const A=c("");function K(){z.value.length=0,a.content.split(/\r\n|\n/).forEach(R=>{const S=[];z.value.push(S);let u=!1;R.split(new RegExp("(?<=[.|!|?])","g")).forEach(p=>{const _=[];S.push(_);const h=p.indexOf("!")>-1?1.5:1;p.split(/\s/).forEach(t=>{const C=t.toUpperCase()==t?1.5:1,m=[];t[0]=="*"&&(m.push("*"),t=t.substring(1));const V=t.length;let D=!1;t[V-1]=="*"&&(D=!0,t=t.substring(0,V-1)),m.push(...t.split("*")),D&&m.push("*"),m.forEach(N=>{if(N=="*")u=!u;else{const L=u?1.2:1;_.push({text:N,size:12*h*C*L,bold:u})}})})})}),k=setInterval(()=>{r.value=x.value.getClientRects()[0].height,F<w&&r.value>s.value?(v.value*=.9,F++):(clearInterval(k),f.value=!0,A.value=o.value)},5)}return O(()=>{clearInterval(k),clearTimeout(y)}),(R,S)=>(l(),i("div",{ref:"paperEl",class:Q(["post-paper",{settled:f.value}]),style:E({width:d.size+"px",height:d.size+"px",padding:(d.size-e(s))/2+"px",backgroundColor:"white",boxShadow:"rgba(0, 0, 0, 0.1) 1px 1px 5px"})},[P("div",{ref_key:"content",ref:x,class:"content",style:E({marginTop:(f.value?(e(s)-r.value)/2:0)+"px"})},[(l(!0),i(g,null,B(z.value,(u,p)=>(l(),i("div",{key:p,class:"paragraph neutral"},[(l(!0),i(g,null,B(u,(_,h)=>(l(),i(g,{key:p+"-"+h},[(l(!0),i(g,null,B(_,(t,C)=>(l(),i("div",{ref_for:!0,ref:"wordEls",key:p+"-"+h+"-"+C,class:"word",style:E({color:"black",fontFamily:"Kalam",fontSize:t.size*v.value+"px",fontWeight:t.bold?"bold":"normal"})},b(t.text),5))),128))],64))),128))]))),128))],4)],6))}});const ae=T(te,[["__scopeId","data-v-15d93f3a"]]),se=["placeholder"],ne=H({__name:"ResahSubmission",setup(d){const a=c(""),o=I(()=>a.value.length>0),f=W(),v=j();return(x,s)=>(l(),q(G,{"inner-class":{"resah-submission":!0}},{default:U(()=>[P("p",null,b(e(n)("1")),1),$(ae,{content:a.value,size:200},null,8,["content"]),J(P("textarea",{"onUpdate:modelValue":s[0]||(s[0]=r=>a.value=r),placeholder:e(n)("placeholder")},null,8,se),[[X,a.value]]),$(ee,{class:"cta","no-nav":"","bg-color":"black",color:"white",onClick:s[1]||(s[1]=r=>e(f).addDialogue({info:e(n)(e(o)?"submit_confirmation":"skip_confirmation"),confirmationText:e(n)(e(o)?"submit":"skip","general"),cancellationText:e(n)("cancel"),hasPrimary:!0,onConfirmation:()=>{e(o)&&e(Z)(a.value),e(v).goForward()}}))},{default:U(()=>[Y(b(e(o)?e(n)("submit"):e(n)("skip"))+" & "+b(e(n)("continue")),1)]),_:1})]),_:1}))}});const oe=T(ne,[["__scopeId","data-v-c925db17"]]);export{oe as default};
