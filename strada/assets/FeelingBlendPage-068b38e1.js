import{d as p,r as f,x as v,a as n,e as s,F as _,i as g,u as e,h as l,w as h,o,z as r,t as u,l as y,s as b,_ as x}from"./index-f624e104.js";import{_ as C}from"./BlendViz.vue_vue_type_script_setup_true_lang-6988ef39.js";import{B}from"./BasicButton-a73f2833.js";import"./questions-7c1c3293.js";const d={0:{particles:{color:{value:[{h:0,s:255,l:50},{h:12,s:255,l:50},{h:23,s:255,l:50}]},opacity:{value:1,animation:{speed:1}},size:{value:6,random:{enable:!0,minimumValue:3}},move:{angle:{value:40,offset:0},speed:16}}},1:{particles:{color:{value:[{h:332,s:255,l:65},{h:160,s:255,l:90},{h:100,s:95,l:60}]},opacity:{value:1,animation:{speed:10}},size:{value:.5,random:{enable:!0,minimumValue:.3}},move:{angle:{value:180,offset:0},speed:.2}}},2:{particles:{color:{value:[{h:224,s:255,l:65},{h:160,s:255,l:90},{h:176,s:95,l:60}]},opacity:{value:.05,animation:{speed:.2}},size:{value:30,random:{enable:!0,minimumValue:15}},move:{angle:{value:10,offset:0},speed:-2}}}},w={fpsLimit:60,particles:{number:{value:0,density:{enable:!0,value_area:100}},color:{},life:{duration:{value:2},count:1},move:{outModes:{default:"destroy"},direction:"top",enable:!0,random:!1,straight:!1},shape:{type:"circle"},opacity:{random:!1,animation:{enable:!0,minimumValue:0,sync:!1}},size:{animation:{enable:!1}}},interactivity:{detectsOn:"canvas",events:{resize:!0}},detectRetina:!0,background:{color:"#000000"},emitters:{direction:"top",rate:{quantity:5,delay:.01},size:{width:100,height:100},position:{x:50,y:50}}},z={class:"feeling"},V={class:"ui full"},q={class:"flow-buttons"},F=["onTouchstart"],S={style:{position:"absolute",bottom:"10vw","z-index":2}},k=p({__name:"FeelingBlendPage",setup(N){const c=f.currentRoute.value.meta.questionSettings,t=v(null);return(T,i)=>(o(),n("div",z,[s("div",V,[s("div",q,[(o(!0),n(_,null,g(e(d),(P,a)=>(o(),n("div",{key:a,class:"flow-button",onTouchstart:r(m=>t.value=Number(a),["prevent"]),onTouchend:i[0]||(i[0]=r(m=>t.value=null,["prevent"]))},u(a),41,F))),128))]),s("div",S,[l(B,{replace:""},{default:h(()=>[y(u(e(b)("continue","general")),1)]),_:1})])]),l(C,{elId:"tsparticles-feeling",fixedConfig:e(w),componentConfigs:e(d),questionSettings:e(c),addingComponent:t.value},null,8,["fixedConfig","componentConfigs","questionSettings","addingComponent"])]))}});const R=x(k,[["__scopeId","data-v-b648dae6"]]);export{R as default};
