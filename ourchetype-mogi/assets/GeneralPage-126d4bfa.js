import{_ as L}from"./PageContainer.vue_vue_type_style_index_0_lang-7e1c510f.js";import{d as k,b as w,v as M,w as T,C as V,D as G,o as c,a as d,n as P,_ as N,W as $,c as t,y as h,z as x,i as z,u as s,F as H,G as I,k as R,t as y,A as _,e as g,h as j,r as b,f as A,p as E}from"./index-bef298e6.js";const O=k({__name:"PasscodeField",props:{passcode:{type:String,default:"passcode"},onMatch:{type:Function,default:()=>{}}},setup(m){const u=m;w();const r=M("");return T(r,a=>{a.toLowerCase()==u.passcode.toLowerCase()&&u.onMatch()}),(a,n)=>V((c(),d("input",{"onUpdate:modelValue":n[0]||(n[0]=p=>r.value=p),class:P({"passcode-field":!0,dark:!0}),placeholder:"Passcode"},null,512)),[[G,r.value]])}});const U=N(O,[["__scopeId","data-v-c05f89b4"]]),W=g("div",null,null,-1),q=["innerHTML"],J=g("div",null,null,-1),K={key:1,class:"passcode-container"},Q={class:"white italic"},Z=k({__name:"GeneralPage",setup(m){const u=w(),r=$(),a=t(()=>b.currentRoute.value),n=t(()=>{var e;return(e=a.value)==null?void 0:e.meta.generalPageSettings}),p=t(()=>{var e;return((e=n.value)==null?void 0:e.textStyles)||[]}),C=t(()=>r.bgSettings.bgDarkness||1>2),S=t(()=>{const e=[];let o;do o=_(e.length+1,a.value.name),o&&e.push(o);while(o);return e}),B=t(()=>a.value.meta.area),F=t(()=>{var l;const e=b.currentRoute.value.name;return{name:(l=A[e].meta.flow.next)==null?void 0:l.page}}),D=t(()=>E[a.value.meta.area]);return(e,o)=>(c(),h(L,{"inner-class":{"general-page":!0,"dark-bg":s(C)}},{default:x(()=>{var l;return[W,(c(!0),d(H,null,z(s(S),(i,f)=>{var v;return c(),d("p",{key:"t"+(f-1),class:P((v=s(p)[f])==null?void 0:v.classes),innerHTML:i},null,10,q)}),128)),J,(l=s(n))!=null&&l.isPasscode?(c(),d("div",K,[g("p",Q,y(s(_)("input-passcode")),1),j(U,{passcode:s(D),"on-match":()=>{s(u).setPasscodeProgress(s(B),!0),e.$router.replace(s(F))}},null,8,["passcode","on-match"])])):(c(),h(I,{key:0,color:"black","bg-color":"white",replace:""},{default:x(()=>{var i;return[R(y(s(_)(((i=s(n))==null?void 0:i.cta)||"continue","general")),1)]}),_:1}))]}),_:1},8,["inner-class"]))}});export{Z as default};
