import{d as ke,b as xe,D as Se,c as v,s as o,I as Ie,H as Ce,w as Be,v as _e,x as oe,o as p,e,u as l,a as S,S as Re,E as U,t as c,A as E,h as W,F as ne,i as be,n as ie,k as ye,C as we,Q as re,m as Ue,q as Le,_ as Me}from"./index-ba8f1bc1.js";import{_ as Te}from"./PageContainer.vue_vue_type_script_setup_true_lang-2c2a6d11.js";/* empty css                                                      */import{S as V}from"./SpriteSheetImg-31ea282e.js";import{I as We}from"./IncompleteAlert-472661be.js";import{p as De,a as Pe,i as ce,s as ze,b as Ke}from"./images-590c907f.js";import{a as Fe}from"./shadow-72f4b3f4.js";const He=""+new URL("shadow-orbit-903cdd91.webp",import.meta.url).href,Ne="data:image/webp;base64,UklGRm4BAABXRUJQVlA4WAoAAAAQAAAALAAALAAAQUxQSB0BAAABgFzb1rLm0QEVuLu765iqoDhacIe4e3IiyPd/00wiYgJEbf+5L/qa3ngzaQT8RzB3zdqYu+YBQ4smliGDDYxtWtjGsOk8wdSugX0KTx2p3sPcZZh1DE9tEancw8JlkG0Cjy35W76DTcAQ9xIeG7K/dAfboAGeJTzU5XDxFrYhZd4VPNTk2MIt7MKKfGt4qMrxyUs4Cyvxr+EmJ6cmLuEsosC/gZusnJ64gKvUSdFzuM6KyvgFXKdPiJ3DdUbUxs7hOnNU/AKu0qI6eg432SMSl3CVEvX+DdzkDiQv4SwiRvrWcJvfk7qCXViM9a7goQ4Ub2EXEqP9a7gH7mHtF+O9K/avvKKje7ln6RY9XXNg7hJdHW+8OUTf3lNP1AIAVlA4ICoAAAAwAwCdASotAC0APm02mEikIyKhI4gAgA2JaQAAG4G9Pg4AAP77nMAAAAA=",Ve={normal:"source-over",multiply:"multiply",screen:"screen",overlay:"overlay",darken:"darken",lighten:"lighten","color-dodge":"color-dodge","color-burn":"color-burn","hard-light":"hard-light","soft-light":"soft-light",difference:"difference",exclusion:"exclusion",hue:"hue",saturation:"saturation",color:"color",luminosity:"luminosity"};function g(n,L,h=1,I,D){const C=L.getBoundingClientRect(),m=C.x*h,r=C.y*h,M=C.width*h,P=C.height*h,{style:f,innerText:d}=L,H=f.filter;H&&(n.filter=H);const Q=Ve[f.mixBlendMode]||"source-over";n.globalCompositeOperation=Q;let x;switch(L.tagName){case"IMG":if(x=L,M!=null&&P!=null)if(I){const u=I.container.getBoundingClientRect(),_=u.x*h,z=u.y*h,b=u.width*h,T=u.height*h,B=x.naturalWidth/I.xSprites,R=x.naturalHeight/I.ySprites;n.drawImage(x,I.x*B,I.y*R,B,R,_,z,b,T)}else n.drawImage(x,m,r,M,P);else n.drawImage(x,m,r);break;case"DIV":f.backgroundColor&&(n.fillStyle=f.backgroundColor,n.fillRect(m,r,M,P),n.fillStyle="none");break}if(d&&d.length){n.fillStyle=f.color;let u=f.fontSize||"16px";const[,_,z]=u.match(/^([\d.]+)(\D+)$/);let b=Number(_)*h;z=="rem"&&(b*=16);const T=((D==null?void 0:D.y)||0)*b;u=b+"px";const B=[f.fontStyle,f.fontVariant,f.fontWeight,u,f.fontFamily];n.font=B.filter(R=>!!R).join(" "),n.textAlign=f.textAlign||"left",n.fillText(d,m,r+b+T,M),n.fillStyle="none"}n.filter="none",n.globalCompositeOperation="source-over"}const G={Ca:{tenants:[{label:"Toko Bakmie Feng"},{label:"Hidden Pick"},{label:"Wearbobe"}],studios:[{label:"Keraptink"}]},Cr:{tenants:[{label:"Area Lukis Braga"},{label:"Restory"}],studios:[{label:"Waktoe Loeang"}]},Ma:{tenants:[{label:"Sweesh"},{label:"Abigail"}],studios:[{label:"Everidea x Bonbin"},{label:"The HallwaSpace"},{label:"Motionbeast x Tjs"}]},Re:{tenants:[],studios:[{label:"Waste Meet Pop"},{label:"Grifen"}]},He:{tenants:[],studios:[{label:"Biang Lara"}]},Ev:{tenants:[{label:"Rameninpo"},{label:"Kinjo Shokudo"}],studios:[{label:"Tab Space"}]},Ru:{tenants:[{label:"Bandung Originale"}],studios:[]},In:{tenants:[{label:"Memmo"},{label:"Warung Makan Moy"}],studios:[{label:"Karasa.bdg"}]},Lo:{tenants:[{label:"Halodo"}],studios:[{label:"Fiorist"}]},En:{tenants:[{label:"Cuanki & Baso Mang Pohang"},{label:"Scoop & Skoops"},{label:"Inefable"},{label:"Gvfi"}],studios:[{label:"Photo(nge)booth"},{label:"Wanara"}]},Ex:{tenants:[{label:"Ethouse Art Space"}],studios:[{label:"No:rue"}]}},k=n=>(Ue("data-v-45dd9714"),n=n(),Le(),n),Ge={class:"top"},Qe={class:"canvas-container"},Je={class:"logo-container center-col"},Xe={class:"intro",style:{width:"30vw"}},qe=["src","alt"],Ye=["src","alt"],je=["alt"],Oe={class:"label-container"},Ze=["src"],$e={class:"label-container"},el=["src"],ll={class:"info hidden-info"},sl=k(()=>e("br",null,null,-1)),tl=k(()=>e("br",null,null,-1)),al={class:"instructions left small bold white"},ol=k(()=>e("div",{class:"spacer"},null,-1)),nl=k(()=>e("img",{class:"arrow",src:Ne},null,-1)),il={class:"parts"},rl={class:"part-container"},cl=k(()=>e("span",{class:"part-type-label"}," (persona) ",-1)),dl={class:"part"},ul={class:"part-container"},fl=k(()=>e("span",{class:"part-type-label"}," (self) ",-1)),vl={class:"part"},hl={class:"part-container"},gl=k(()=>e("span",{class:"part-type-label"}," (shadow) ",-1)),ml={class:"part"},pl={class:"shadow-part"},_l={class:"result-items"},bl=k(()=>e("div",{class:"number"},"1.",-1)),yl={class:"result-items-logos"},wl={class:"container center-col"},Al=["src"],El={class:"result-items"},kl=k(()=>e("div",{class:"number"},"2.",-1)),xl={class:"result-items-logos"},Sl={class:"container center-col"},Il=["src"],Cl={class:"result-items"},Bl=k(()=>e("div",{class:"spacer"},null,-1)),Rl=ke({__name:"ResultPage",setup(n){const L="./imgs",h=xe(),I=Se(),D=v(()=>I.lang),C=v(()=>h.regData.name),m=v(()=>h.progress.topArchetypes),r=v(()=>m.value.persona?re[m.value.persona]:null),M=v(()=>r.value?De[r.value.id]:null),P=v(()=>r.value?Pe[r.value.id]:null),f=v(()=>{var s;return ce[((s=r.value)==null?void 0:s.id)||"Ev"]}),d=v(()=>m.value.self?re[m.value.self]:null),H=v(()=>d.value?ze[d.value.id]:null),Q=v(()=>d.value?Ke[d.value.id]:null),x=v(()=>{var s;return ce[((s=d.value)==null?void 0:s.id)||"Ev"]}),u=v(()=>m.value.shadow?re[m.value.shadow]:null),_=v(()=>{var s;return ce[((s=u.value)==null?void 0:s.id)||"Ev"]}),z=v(()=>u.value?Fe[u.value.id]:null),b=o({fontSize:"1rem",fontWeight:"bold",color:"white",fontFamily:"Mulish, sans-serif",textAlign:"left"}),T=o(null),B=o(null),R=o(""),J=o(null),de=o(null),ue=o(null),X=o(null),q=o(null),Y=o(null),j=o(null),fe=o(null),O=o(null),Z=o(null),$=o(null),ve=o(null),he=o(null),ge=o(null),me=o(null),ee=o(!1);Ie(()=>{Ce(()=>{var y;$.value=((y=Z.value)==null?void 0:y.getElementsByTagName("img")[0])||null,me.value=document.getElementsByClassName("bg active")[0]||null;const s=[J.value,X.value,q.value,Y.value,j.value,O.value,$.value],t=setInterval(()=>{for(let a=0;a<s.length;a++){const w=s[a];w!=null&&w.complete&&w.naturalHeight&&(s.splice(a,1),a--)}s.length||(clearInterval(t),ee.value=!0)},1e3)})}),Be(ee,(s,t)=>{!t&&s&&(Ae(),fe.value.style.animationDuration="10s",Ee())});function Ae(){const s=B.value,t=s.getContext("2d"),y=T.value.getBoundingClientRect().width,a=s.clientWidth/y;t&&(t.fillStyle="#ffffff",t.fillRect(0,0,s.clientWidth,s.clientHeight),g(t,me.value,a),g(t,J.value,a),g(t,de.value,a,void 0,{x:0,y:.1}),g(t,ue.value,a),g(t,X.value,a),g(t,q.value,a),g(t,Y.value,a),g(t,j.value,a),g(t,O.value,a),g(t,$.value,a,{container:Z.value,xSprites:3,ySprites:4,x:_.value.x,y:_.value.y}),g(t,ve.value,a),g(t,he.value,a),g(t,ge.value,a),R.value=s.toDataURL("image/png;base64"))}const le=o({tenants:[],studios:[]});function Ee(){var y,a,w,K;const s=le.value;r.value&&(s.tenants=[...((y=G[r.value.id])==null?void 0:y.tenants)||[]],s.studios=[...((a=G[r.value.id])==null?void 0:a.studios)||[]]),d.value&&r.value!=d.value&&(s.tenants=[...((w=G[d.value.id])==null?void 0:w.tenants)||[]],s.studios=[...((K=G[d.value.id])==null?void 0:K.studios)||[]]);for(const te in s){s.studios.sort((i,A)=>i.label>A.label?1:-1),s.tenants.sort((i,A)=>i.label>A.label?1:-1);const F=[...s.studios,...s.tenants],N=L+"/result-items/";for(let i=0;i<F.length;i++){const A=F[i];let ae=A.label;ae=ae.replace(/\/|\||:|\*|\?|"|<|>|\||&/g,"_");const pe=N+ae+".webp";var t=new Image;t.onload=()=>{A.imgUrl=pe},t.src=pe}}}const se=o(!1);return(s,t)=>(p(),_e(Te,{"inner-class":{result:!0}},{default:oe(()=>{var y,a,w,K,te,F,N;return[e("div",{ref_key:"widthEl",ref:T,style:{width:"100vw"}},null,512),!l(C)||!l(r)||!l(d)||!l(u)?(p(),_e(We,{key:0,message:JSON.stringify({name:l(C),persona:l(r),self:l(d),shadow:l(u)},null,2)},null,8,["message"])):(p(),S(ne,{key:1},[e("div",Ge,[e("div",Qe,[e("canvas",{ref_key:"canvasEl",ref:B,width:1080,height:1920},null,512)]),e("div",Je,[e("img",{ref_key:"logoEl",ref:J,class:"logo",src:Re,style:{filter:"brightness(0)"}},null,512)]),e("p",Xe,[e("div",{ref_key:"nameEl",ref:de,class:"name",style:U({color:"black",fontFamily:"Mulish",fontWeight:"bold",fontSize:"1.4rem",textAlign:"left",fontStyle:"italic",lineHeight:"100%"})},c(l(h).regData.name)+"'s ",5),e("div",{ref_key:"todayEl",ref:ue,style:U({color:"black",fontFamily:"Mulish",fontSize:"1.4rem",textAlign:"left",lineHeight:"100%"})},c(l(E)("intro")),5)]),e("div",{class:"picture",style:U({transform:"translateX(25vw) scale(1.1)"})},[e("img",{ref_key:"selfEl",ref:Y,class:"part-large self",src:l(H),alt:(y=l(d))==null?void 0:y.labels.root},null,8,qe),e("img",{ref_key:"personaEl",ref:j,class:"part-large persona",src:l(M),alt:(a=l(r))==null?void 0:a.labels.root},null,8,Ye),e("div",{ref_key:"shadowEl",ref:fe,class:"part-large shadow"},[e("img",{ref_key:"shadowOrbitEl",ref:O,class:"shadow-orbit",src:He,alt:(w=l(u))==null?void 0:w.labels.root},null,8,je),e("div",{ref_key:"shadowIconEl",ref:Z,class:"shadow-icon"},[W(V,{src:"shadow-icons.webp",alt:(K=l(u))==null?void 0:K.labels.root,"x-sprites":3,"y-sprites":4,x:l(_).x,y:l(_).y},null,8,["alt","x","y"])],512)],512)],4),e("div",{class:"labels",style:U({transform:"translateX(-3vw)"})},[e("div",Oe,[e("img",{ref_key:"personaTextEl",ref:X,src:l(P)},null,8,Ze)]),e("div",$e,[e("img",{ref_key:"selfTextEl",ref:q,src:l(Q)},null,8,el)])],4)]),e("div",ll,[e("p",{ref_key:"info1El",ref:ve,style:U(b.value)},c(l(E)("date")),5),e("p",{ref_key:"info2El",ref:he,style:U(b.value)},c(l(E)("place")),5),sl,tl,e("p",{ref_key:"websiteEl",ref:ge,style:U(b.value)}," ourchetype.com ",4)]),e("p",al,c(l(E)("instructions")),1),ol,e("div",{class:ie(["details",{expanded:se.value}])},[e("div",{class:"header",onClick:t[0]||(t[0]=i=>se.value=!se.value)},[e("h2",null,c(l(E)("fusion")),1),nl]),e("div",il,[e("div",rl,[cl,e("div",dl,[W(V,{src:"elements-small.webp",alt:"Element 1","x-sprites":3,"y-sprites":4,x:l(f).x,y:l(f).y},null,8,["x","y"])]),e("span",null,c(((te=l(r))==null?void 0:te.labels.root)||""),1)]),e("div",ul,[fl,e("div",vl,[W(V,{src:"elements-small.webp",alt:"Element 2","x-sprites":3,"y-sprites":4,x:l(x).x,y:l(x).y},null,8,["x","y"])]),e("span",null,c(((F=l(d))==null?void 0:F.labels.root)||""),1)]),e("div",hl,[gl,e("div",ml,[e("div",pl,[W(V,{src:"shadow-icons.webp",alt:"Element 3","x-sprites":3,"y-sprites":4,x:l(_).x,y:l(_).y},null,8,["x","y"])])]),e("span",null,c(((N=l(u))==null?void 0:N.labels.shadow[l(D)])||""),1)])]),e("div",_l,[e("h3",null,[bl,e("div",null,c(l(E)("tenants")),1)]),e("div",yl,[(p(!0),S(ne,null,be(le.value.tenants,(i,A)=>(p(),S("figure",{key:A,class:"result-item"},[e("div",wl,[i.imgUrl?(p(),S("img",{key:0,src:i.imgUrl},null,8,Al)):(p(),S("div",{key:1,class:ie(["label",{small:i.maxWordLength>=10}])},c(i.label),3))]),e("figcaption",null,c(i.label),1)]))),128))]),e("p",null,c(l(E)("map")),1)]),e("div",El,[e("h3",null,[kl,e("div",null,c(l(E)("studios")),1)]),e("div",xl,[(p(!0),S(ne,null,be(le.value.studios,(i,A)=>(p(),S("figure",{key:A,class:"result-item"},[e("div",Sl,[i.imgUrl?(p(),S("img",{key:0,src:i.imgUrl},null,8,Il)):(p(),S("div",{key:1,class:ie(["label",{small:i.maxWordLength>=10}])},c(i.label),3))]),e("figcaption",null,c(i.label),1)]))),128))]),e("p",null,c(l(E)("map")),1)]),e("div",Cl,[e("h3",null,"3. "+c(l(E)("shadow")),1),W(we,{class:"shadow-button",external:"",href:l(z)||void 0,outline:""},{default:oe(()=>[ye("Shadow")]),_:1},8,["href"])])],2),Bl,W(we,{class:"cta",dark:"",disabled:!ee.value,download:"Ourchetype.png",href:R.value},{default:oe(()=>[ye(" Share ")]),_:1},8,["disabled","download","href"])],64))]}),_:1}))}});const zl=Me(Rl,[["__scopeId","data-v-45dd9714"]]);export{zl as default};
