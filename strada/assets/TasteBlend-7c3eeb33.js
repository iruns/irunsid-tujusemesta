import{d as x,j as w,s as v,v as V,a as p,e as m,F as I,l as z,o as f,w as M,t as S,x as C,y as j,_ as D}from"./index-5075c3f8.js";const P=i=>(C("data-v-5f885143"),i=i(),j(),i),T={class:"taste"},W={class:"ui full"},E={class:"flow-buttons"},F=["onMousedown","onMouseup"],K=P(()=>m("div",{id:"tsparticles"},null,-1)),k=.4,L=x({__name:"TasteBlend",setup(i){const c={Bonfire:{particles:{color:{value:[{h:0,s:255,l:50},{h:12,s:255,l:50},{h:23,s:255,l:50}]},opacity:{value:1,animation:{speed:1}},size:{value:6,random:{enable:!0,minimumValue:3}},move:{angle:{value:40,offset:0},speed:16}}},Starlight:{particles:{color:{value:[{h:332,s:255,l:65},{h:160,s:255,l:90},{h:100,s:95,l:60}]},opacity:{value:1,animation:{speed:10}},size:{value:.5,random:{enable:!0,minimumValue:.3}},move:{angle:{value:180,offset:0},speed:.2}}},Moonbeam:{particles:{color:{value:[{h:224,s:255,l:65},{h:160,s:255,l:90},{h:176,s:95,l:60}]},opacity:{value:.05,animation:{speed:.2}},size:{value:30,random:{enable:!0,minimumValue:15}},move:{angle:{value:10,offset:0},speed:-2}}}},B={fpsLimit:60,particles:{number:{value:0,density:{enable:!0,value_area:800}},color:{},life:{duration:{value:2},count:1},move:{outModes:{default:"destroy"},direction:"top",enable:!0,random:!1,straight:!1},shape:{type:"circle"},opacity:{random:!1,animation:{enable:!0,minimumValue:0,sync:!1}},size:{animation:{enable:!1}}},interactivity:{detectsOn:"canvas",events:{resize:!0}},detectRetina:!0,background:{color:"#000000"},emitters:{direction:"top",rate:{quantity:10,delay:.01},size:{width:100,height:100},position:{x:50,y:50}}},r=w({Bonfire:.333,Starlight:.333,Moonbeam:.333}),_=w(null),l=v.cloneDeep(c.Bonfire);d(l,c,r.value),V(()=>{window.tsParticles.load("tsparticles",v.merge({},B,l)).then(e=>{console.log("callback - tsparticles config loaded"),_.value=e})});let s;function h(t,e){!e&&s==null&&(g(t),s=window.setInterval(()=>g(t),200)),e&&s!=null&&(clearInterval(s),s=void 0)}function d(t,e,o){if(typeof t=="object")for(const a in t){const u=t[a];switch(typeof t[a]){case"object":const b=[];for(const n in e)b[n]=e[n][a];d(u,b,o);break;case"number":let y=0;for(const n in e)y+=e[n][a]*o[n];t[a]=y;break}}}function g(t){var o;const e=r.value;e[t]+=k;for(const a in e)e[a]/=1+k;d(l,c,e),v.merge((o=_.value)==null?void 0:o.actualOptions,l)}return(t,e)=>(f(),p("div",T,[m("div",W,[m("div",E,[(f(!0),p(I,null,z(r.value,(o,a)=>(f(),p("div",{key:a,class:"flow-button",onMousedown:M(u=>h(a),["prevent"]),onMouseup:M(u=>h(a,!0),["prevent"])},S(a+": "+Math.round(o*100)/10),41,F))),128))])]),K]))}});const $=D(L,[["__scopeId","data-v-5f885143"]]);export{$ as default};
