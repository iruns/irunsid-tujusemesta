import{_ as E}from"./PageContainer.vue_vue_type_style_index_0_lang-64212e69.js";import{d as D,T as G,x as O,y as U,z as q,A as J,o,a as r,n as k,_ as K,b as Q,c as n,s as x,w as B,i as L,u as e,F as b,e as c,t as y,M as w,G as F,h as W,H as X,D as Y,k as Z,v as H,r as V,f as ee,p as se}from"./index-97add1d6.js";const te=D({__name:"PasscodeField",props:{passcode:{type:String,default:"passcode"},onMatch:{type:Function,default:()=>{console.log("match")}}},setup(T){const v=T;G();const _=O("");return U(_,u=>{u.toLowerCase()==v.passcode.toLowerCase()&&v.onMatch()}),(u,t)=>q((o(),r("input",{"onUpdate:modelValue":t[0]||(t[0]=h=>_.value=h),class:k({"passcode-field":!0,dark:!0}),placeholder:"Passcode"},null,512)),[[J,_.value]])}});const oe=K(te,[["__scopeId","data-v-1b5827a5"]]),ae=c("div",null,null,-1),ne=["innerHTML"],re={key:0,class:"room-dot center-col"},le={class:"room-number"},ce={key:1,class:"path"},ue={key:0,class:"line-dot-container"},ie={class:"room-number"},de={class:"line-container center-col"},_e={key:1,class:"line-dot-container"},pe={class:"room-number"},me=["innerHTML"],ve=c("div",null,null,-1),ge=D({__name:"GeneralPage",setup(T){const v=Q(),_=G(),u=n(()=>V.currentRoute.value),t=n(()=>{var s;return(s=u.value)==null?void 0:s.meta.generalPageSettings}),h=n(()=>{var s;return((s=t.value)==null?void 0:s.textStyles)||[]}),C=n(()=>_.bgSettings.bgColor!=null),g=n(()=>{const s=[];let a;do a=H(s.length+1,u.value.name),a&&s.push(a);while(a);return s}),f=n(()=>{var s;return((s=t.value)==null?void 0:s.nTopTexts)||0}),R=n(()=>{const s=[];if(f.value)for(let a=0;a<f.value;a++)s.push(g.value[a]);return s}),$=n(()=>{var l;const s=[],a=((l=t.value)==null?void 0:l.nTopTexts)||0;for(let i=a;i<g.value.length;i++)s.push(g.value[i]);return s}),z=n(()=>u.value.meta.area),I=n(()=>{var l;const s=V.currentRoute.value.name;return{name:(l=ee[s].meta.flow.next)==null?void 0:l.page}}),j=n(()=>se[u.value.meta.area]),A={yellow:0,blue:1,red:2};return(s,a)=>(o(),x(E,{"inner-class":{"general-page":!0}},{default:B(()=>{var l,i,N,P,S,M;return[ae,(o(!0),r(b,null,L(e(R),(d,p)=>{var m;return o(),r("p",{key:"t"+(p-1),class:k([(m=e(h)[p])==null?void 0:m.classes,e(C)?"white":""]),innerHTML:d},null,10,ne)}),128)),((l=e(t))==null?void 0:l.lineColor)==null?(o(),r(b,{key:0},[(i=e(t))!=null&&i.roomNumber?(o(),r("div",re,[c("div",le,y((N=e(t))==null?void 0:N.roomNumber),1)])):w("",!0)],64)):(o(),r("div",ce,[e(t).roomNumber?(o(),r("div",ue,[c("div",{class:"line-dot",style:F({transform:"translate(20vw, 0vw)"})},[c("div",ie,y(e(t).roomNumber),1)],4)])):w("",!0),c("div",de,[W(X,{class:"line",src:"paths.webp","x-sprites":1,"y-sprites":3,x:0,y:A[e(t).lineColor]||0},null,8,["y"])]),e(t).nextRoomNumber?(o(),r("div",_e,[c("div",{class:"line-dot",style:F({transform:"translate(20vw, -9vw)"})},[c("div",pe,y(e(t).nextRoomNumber),1)],4)])):w("",!0)])),(o(!0),r(b,null,L(e($),(d,p)=>{var m;return o(),r("p",{key:"t"+(p-1),class:k([(m=e(h)[e(f)+p])==null?void 0:m.classes,e(C)?"white":""]),innerHTML:d},null,10,me)}),128)),ve,(P=e(t))!=null&&P.isPasscode?(o(),x(oe,{key:3,passcode:e(j),"on-match":()=>{e(v).setPasscodeProgress(e(z),!0),s.$router.replace(e(I))}},null,8,["passcode","on-match"])):(o(),x(Y,{key:2,replace:"","bg-color":((S=e(t))==null?void 0:S.ctaBGColor)||"black",color:((M=e(t))==null?void 0:M.ctaColor)||"white"},{default:B(()=>{var d;return[Z(y(e(H)(((d=e(t))==null?void 0:d.cta)||"continue","general")),1)]}),_:1},8,["bg-color","color"]))]}),_:1}))}});export{ge as default};
