import{d,b as m,s as p,w as i,o as t,a,K as l,t as _,V as u,m as g,q as f,e as h,_ as b}from"./index-2ec14353.js";const v=e=>(g("data-v-4f1e1deb"),e=e(),f(),e),I={class:"incomplete-alert"},k=v(()=>h("h2",{class:"alert"}," Proses belum lengkap. Coba selesaikan proses terlebih dahulu ",-1)),S={key:1,class:"message"},y=d({__name:"IncompleteAlert",props:{message:{type:String,default:""}},setup(e){const n=e,c=m(),s=p(!1);return i(()=>n.message,o=>{u(o||"<no message>",c.progress)},{immediate:!0}),(o,r)=>(t(),a("div",I,[k,e.message&&!s.value?(t(),a("a",{key:0,onClick:r[0]||(r[0]=w=>s.value=!0)},"Show details")):l("",!0),e.message&&s.value?(t(),a("pre",S,_(e.message),1)):l("",!0)]))}});const C=b(y,[["__scopeId","data-v-4f1e1deb"]]);export{C as I};
