import{d as B,n as v,l,r as m,m as b,w as g,f as r,c as p,a as c,M as d,B as i,o as u,_}from"./index-2c588c1a.js";const k=["href","download","target"],h=B({__name:"BasicButton",props:{to:{type:[String,Object]},disabled:{type:Boolean,default:!1},href:{type:String},download:{type:String},external:{type:Boolean,default:!1},alignLeft:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1}},setup(t){const n=t,f=v(),s=l(()=>{let e=n.to;if(e)switch(typeof e){case"object":if(e.name)return e;break;case"string":return e}else e={};const a=f.next;if(a)return e.name=a,e}),o=l(()=>n.alignLeft?"flex-start":"center");return(e,a)=>{const y=m("RouterLink");return s.value?(u(),b(y,{key:0,to:s.value,replace:"",class:r({disabled:t.disabled,secondary:t.secondary})},{default:g(()=>[c("div",{class:"basic-button",style:i({justifyContent:o.value})},[d(e.$slots,"default",{},void 0,!0)],4)]),_:3},8,["to","class"])):(u(),p("a",{key:1,class:r({disabled:t.disabled,secondary:t.secondary}),href:t.href,download:t.download,target:t.external?"_blank":"_self"},[c("div",{class:"basic-button",style:i({justifyContent:o.value})},[d(e.$slots,"default",{},void 0,!0)],4)],10,k))}}});const w=_(h,[["__scopeId","data-v-e754e81f"]]);export{w as B};