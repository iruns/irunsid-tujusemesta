import{d,b as p,l as s,c as v,a as _,f,t as g,x,o as k,h as b,_ as C}from"./index-fbcfc12d.js";const D={class:"free-menu-item"},I=d({__name:"FreeMenuItem",props:{route:{},text:{}},setup(m){const t=m;p();const n=s(()=>b[t.route.name]),r=s(()=>n.value.meta.guards),l=s(()=>n.value.meta.flow),u=s(()=>!l.value.isDone||l.value.isDone()),a=s(()=>{var o,e;return u.value?(o=r.value)==null?void 0:o.deleteProgress:(e=r.value)==null?void 0:e.fakeProgress});function i(){x.replace({name:t.route.name})}return(o,e)=>(k(),v("div",D,[_("div",{class:f(["was-done",{done:u.value,switchable:!!a.value}]),onClick:e[0]||(e[0]=w=>{var c;return(c=a.value)==null?void 0:c.call(a)})},null,2),_("a",{onClick:i},g(o.text),1)]))}});const B=C(I,[["__scopeId","data-v-01970088"]]);export{B as F};
