import{B as s}from"./BlendViz-307c4b4f.js";import{d as l,r,y as u,m as c,u as t,o as d,_ as m}from"./index-e6d53097.js";import"./math-18f78e4d.js";import"./BasicButton-5d112310.js";/* empty css                                                                    */import"./questions-e434586c.js";var a=(e=>(e[e.energy=0]="energy",e[e.inspiration=1]="inspiration",e))(a||{});const p={0:{particles:{color:{value:[{h:3,s:200,l:50},{h:6,s:20,l:50},{h:12,s:20,l:90}]},opacity:{value:1,animation:{speed:5}},size:{value:15,random:{enable:!0,minimumValue:10}},move:{angle:{value:90,offset:0},speed:10,gravity:{acceleration:2,maxSpeed:100},trail:{length:5}}}},1:{particles:{color:{value:[{h:332,s:255,l:65},{h:30,s:255,l:65},{h:100,s:255,l:65}]},opacity:{value:.8,animation:{speed:10}},size:{value:30,random:{enable:!0,minimumValue:15}},move:{angle:{value:360,offset:0},speed:.1,gravity:{acceleration:20,maxSpeed:10},trail:{length:2}}}}},f={fpsLimit:60,particles:{number:{value:0,density:{enable:!0,value_area:100}},color:{},life:{duration:{value:5},count:1},move:{outModes:{default:"bounce"},collisions:!0,direction:"top",enable:!0,random:!1,straight:!1,gravity:{},trail:{enable:!0}},shape:{type:"circle"},opacity:{random:!1,animation:{enable:!0,minimumValue:.3,sync:!1}},size:{animation:{enable:!1}}},detectRetina:!0,background:{color:"#232813"},emitters:{rate:{quantity:1,delay:.05},size:{width:100,height:100},position:{x:50,y:50}}},g=l({__name:"MindBlendPage",setup(e){const n=r.currentRoute.value.meta.questionSettings,i=u(null),o={[a.energy]:"#faa32f",[a.inspiration]:"#007e97"};return(v,_)=>(d(),c(s,{class:"blend-viz",elId:"tsparticles-mind",fixedConfig:t(f),componentConfigs:t(p),questionSettings:t(n),addingComponent:i.value,pipeColors:o,maskSrc:"blend-mind.webp",particlesStyle:{width:"85vw",height:"160vw",bottom:"-10vw"}},null,8,["fixedConfig","componentConfigs","questionSettings","addingComponent","maskSrc"]))}});const B=m(g,[["__scopeId","data-v-6441b1ed"]]);export{B as default};
