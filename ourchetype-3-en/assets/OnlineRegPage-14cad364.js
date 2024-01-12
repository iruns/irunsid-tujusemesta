import{d as C,f as S,g as U,v as p,c as d,w as k,h as M,x as O,y as h,o as R,b as a,e as n,u as o,z as t,B as r,C as v,i as z,m as P,l as D,D as N,q as A,s as F,_ as $}from"./index-81b0898f.js";import{_ as E}from"./PageContainer.vue_vue_type_style_index_0_lang-ed7c8e53.js";const s=u=>(A("data-v-83d98e3a"),u=u(),F(),u),L=s(()=>a("div",{class:"error-info"}," Must be between 3-20 characters ",-1)),T=s(()=>a("div",{class:"error-info"},"Must be a valid email",-1)),Z=s(()=>a("label",{for:"pria"}," Male ",-1)),j=s(()=>a("label",{for:"wanita"}," Female ",-1)),q=s(()=>a("label",{for:"bandung"},"From Bandung",-1)),G=s(()=>a("label",{for:"luar"}," Outside of Bandung ",-1)),Y=s(()=>a("div",{class:"error-info"},"3 characters or more",-1)),H=C({__name:"OnlineRegPage",setup(u){const f=S(),B=U(),I=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,e=p(Object.assign({},f.regData)),c=p(!1),g=d(()=>e.value.email?I.test(e.value.email.toLowerCase()):!1),_=d(()=>e.value.name&&e.value.name.length>=3&&e.value.name.length<=20),b=d(()=>!e.value.age||typeof e.value.age=="string"?!1:!!e.value.age),V=d(()=>!!e.value.gender),x=d(()=>!!e.value.domicile),w=d(()=>e.value.info_from&&e.value.info_from.length>2),m=p(!1);k(()=>e.value,()=>{_.value&&g.value&&V.value&&b.value&&x.value&&w.value?m.value=!0:m.value=!1},{deep:!0,immediate:!0});function y(){f.submitRegForm(e.value)}return M(()=>{B.setBGSetting({headerY:1,logoSize:1})}),(J,l)=>(R(),O(E,{"inner-class":{"registration full-width":!0}},{default:h(()=>[a("div",{class:n(["form",{checked:c.value}])},[a("div",{class:n(["field",{invalid:!o(_)}])},[t(a("input",{"onUpdate:modelValue":l[0]||(l[0]=i=>e.value.name=i),placeholder:"Name (will be displayed in the result)",class:"text"},null,512),[[r,e.value.name]]),L],2),a("div",{class:n(["field",{invalid:!o(g)}])},[t(a("input",{"onUpdate:modelValue":l[1]||(l[1]=i=>e.value.email=i),placeholder:"Email",class:"text"},null,512),[[r,e.value.email]]),T],2),a("div",{class:n(["options",{invalid:!o(V)}])},[t(a("input",{id:"pria","onUpdate:modelValue":l[2]||(l[2]=i=>e.value.gender=i),type:"radio",value:"pria"},null,512),[[v,e.value.gender]]),Z,t(a("input",{id:"wanita","onUpdate:modelValue":l[3]||(l[3]=i=>e.value.gender=i),type:"radio",value:"wanita"},null,512),[[v,e.value.gender]]),j],2),a("div",{class:n(["field",{invalid:!o(b)}])},[t(a("input",{"onUpdate:modelValue":l[4]||(l[4]=i=>e.value.age=i),placeholder:"Age",class:"text"},null,512),[[r,e.value.age,void 0,{number:!0}]])],2),a("div",{class:n(["options",{invalid:!o(x)}])},[t(a("input",{id:"bandung","onUpdate:modelValue":l[5]||(l[5]=i=>e.value.domicile=i),type:"radio",value:"Bandung"},null,512),[[v,e.value.domicile]]),q,t(a("input",{id:"luar","onUpdate:modelValue":l[6]||(l[6]=i=>e.value.domicile=i),type:"radio",value:"Luar Bandung"},null,512),[[v,e.value.domicile]]),G],2),a("div",{class:n(["field",{invalid:!o(w)}])},[t(a("input",{"onUpdate:modelValue":l[7]||(l[7]=i=>e.value.info_from=i),placeholder:"Exhibition information from...",class:"text"},null,512),[[r,e.value.info_from]]),Y],2)],2),a("div",{onClick:l[8]||(l[8]=i=>c.value=!0)},[z(N,{disabled:!m.value,class:"cta",to:{name:o(D).OnSiteReg},replace:"",onClick:y},{default:h(()=>[P(" Continue ")]),_:1},8,["disabled","to"])])]),_:1}))}});const W=$(H,[["__scopeId","data-v-83d98e3a"]]);export{W as default};