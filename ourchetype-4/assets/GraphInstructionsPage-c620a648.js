import{_ as Q}from"./PageContainer.vue_vue_type_style_index_0_lang-8db426d2.js";import{I as R}from"./IncompleteAlert-c29dbfed.js";import{d as U,b as z,O as K,c as a,s as v,I as G,v as q,x as S,o as l,u as s,a as i,e,F as _,i as C,n as j,E as d,t as P,l as f,h as V,k as J,A as F,C as H,Q as I,m as L,q as X,_ as Z}from"./index-686916f5.js";import"./SpriteSheetImg-f7e1a4d7.js";const Y=""+new URL("graph-611d82d2.webp",import.meta.url).href,D="data:image/webp;base64,UklGRggEAABXRUJQVlA4WAoAAAAQAAAAxQEADAAAQUxQSK0DAAABkHNt2yHJO6qxbduhFTmy2TPR2up0PJOt7VnXbmazs7Vte8eeZ/F19VfvVxHBsG2kMPwCfPrkoCPcer4y20rSQoUvPDsyfHJ2sCZasClY9/r3yzV51proIXTe6eHh0/NCNdGCdd6al79fryuw0UQPwbNPDo+cXRiuiRasslc+v7VhEPh1sM5d7LLI6L4P4NFTALfak83FLq/mIwNA37V+oE9u9BS7zNM67wB4/BjAnc40wTg8G+U+oP9aHzBwpNlLMI7k9lsAnj4CcL87w0Lscq87+AsY3CDZ5q5+C0xeb0kUtewLN38ERs4uDJak0BlHR4GvvZVOAkUyAbzaXGgjWWb1PAGmBOKwK9z8AZgw6KMlKYTB8U3WOQvEMQ68/o/DIqvnEYvDTBSO3NXvgUmDPlaSvHXyIPBd1rmIxfGlt9KR3UeC3jAFvFidS+10vu9iX7j5EzNMQdSL77uEL/yP4+XmQmqnK38XnhkXgeMhgAf/cPDMuAgcA8APWefKM+P0OBJbHgB40JNlZsKgOrkf+CnrXAmNlNhyfZqZOUuOzq4bdUZopMreX8DQ0Rl+pg2qk/uAwaMzfEiWwlHgxGGugIPQ6W4MjuGzC/1Nbsijsvc3w8lXBA4rFZ+PbjkUbv7M4Ajk2dR/p79jLBNHZKQPzB5jePcVNuPoGON0RzojveE+U0pRE08sSs4KNcbhRCxKrlITNSq/qEqV9laSRE2YAjqaSVVtJDZIiCY1gE6UfDhIo8ZLQZQqcbBRY/oAEWuMIGo47erG14Jy1HAlIL/GzAhTw4VqvtTOhnFqcIvyp8r54o0aKhxUsyFAlJKKqFE39txXCqKo4b7pkAoxhmM/70yJklSIDib3wxjpi1rXc7cdx+l6gz6eEkeYQtsiRCnxt82xnzdqXh3UURPKut741SHkcqJ4CE2JkvrONHx0hj/xvYvqrHsyOAaPqhUl71k3qSBzbeGo7GXd4CsCx+bPbNQo37vY66CgPxszjo4yuevMI0qR7xdFOrxFGjUJenVvIOKoEfg0kzhOl/EbSCQOpTH+n9NGbyCR5Vi24wsw+r+Bi0ujJMEVrzdMAu/HgY9bCu0Ft+BQsu0zMPYBmLy8PFY0jtjllyeBD2PA520lDoJbsC/c8hEYf28UK4IraunFCeDjKPBlR5mjJL7M07vu/TpQ6yZpojybDn+52ZpkpokWzFM6bv8+1OChDRweDYc+3+5IMddEC2ZJrTf7Djd5agOHW+2BT3e70ilwSABWUDggNAAAAFAEAJ0BKsYBDQA+bTaZSaQjIqEhKACADYlpAAAItRK1atWrVq1atWrVdAAA/vucwAAAAAA=",M=p=>(L("data-v-cc86b366"),p=p(),X(),p),T={class:"graph"},W={class:"row-labels"},$={class:"col-sets"},ss={class:"col-labels"},es={class:"col-set-imgs"},ts={class:"overlay"},as=M(()=>e("img",{class:"row-top",src:D},null,-1)),ls=M(()=>e("div",{class:"row-bottom"},[e("img",{src:D})],-1)),os=[as,ls],rs=U({__name:"GraphInstructionsPage",setup(p){const x=z();K();const r=a(()=>x.progress.topArchetypes),A=a(()=>r.value.persona?I[r.value.persona]:null),w=a(()=>A.value?f.indexOf(A.value):0),h=a(()=>r.value.self?I[r.value.self]:null),b=a(()=>h.value?f.indexOf(h.value):0),y=a(()=>r.value.self?I[r.value.shadow]:null),m=v(5),E=v(4.6),O=v(20.3),k=a(()=>{const c=[];for(let t=0;t<3;t++)for(let n=0;n<4;n++)c.push(O.value*t+E.value*n);return c}),B=v(1.6),N=v(6.8),g=a(()=>{const c=[];for(let t=0;t<12;t++)c.push(N.value*t);return c});return G(()=>{x.endRun()}),(c,t)=>(l(),q(Q,{"inner-class":{"graph-instructions":!0}},{default:S(()=>{var n;return[!s(A)||!s(h)||!s(y)?(l(),q(R,{key:0,message:JSON.stringify({persona:s(A),self:s(h),shadow:s(y)},null,2)},null,8,["message"])):(l(),i(_,{key:1},[e("div",T,[e("div",W,[(l(!0),i(_,null,C(s(f),(u,o)=>(l(),i("div",{key:o,class:j(["label",{focus:o==s(w)}]),style:d({top:m.value+s(k)[o]+"vw"})},P(u.labels.persona.substring(0,2)),7))),128))]),e("div",$,[e("div",ss,[(l(!0),i(_,null,C(s(f),(u,o)=>(l(),i("div",{key:o,class:j(["label",{focus:o==s(b)}]),style:d({left:B.value+s(g)[o]+"vw"})},P(u.labels.self.substring(0,2)),7))),128))]),e("div",es,[(l(),i(_,null,C(6,u=>e("img",{key:u,style:d({left:s(g)[u*2]+"vw"}),src:Y},null,4)),64))]),e("div",ts,[e("div",{class:"guide stuck-sticker",style:d({backgroundColor:((n=s(y))==null?void 0:n.color.hex)||"transparent",left:B.value+s(g)[s(b)]+.6+"vw",top:m.value+s(k)[s(w)]+2.2+"vw"})},null,4),e("div",{class:"guide guide-col",style:d({left:B.value+s(g)[s(b)]-1.5+"vw",width:N.value-0+"vw"})},null,4),e("div",{class:"guide guide-row",style:d({top:m.value+s(k)[s(w)]+"vw",height:E.value+"vw"})},os,4)])])]),V(H,{replace:""},{default:S(()=>[J(P(s(F)("continue","general")),1)]),_:1})],64))]}),_:1}))}});const ds=Z(rs,[["__scopeId","data-v-cc86b366"]]);export{ds as default};