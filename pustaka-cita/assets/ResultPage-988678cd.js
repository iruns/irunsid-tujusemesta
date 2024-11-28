import{T as m,d as oe,c as h,a as ne,e,K as r,u as s,t as b,h as B,I as V,o as le,C as j,_ as ie,X as C,b as de,J as pe,W as ue,v as fe,w as M,N as ge,M as he,x as be,A as _e,H as me,k as ee,Q as se,Y as te,q as we,s as ve,V as G}from"./index-e45d260f.js";const a="./imgs",ye={Ca:a+"/persona/Ca.webp",Ev:a+"/persona/Ev.webp",In:a+"/persona/In.webp",He:a+"/persona/He.webp",Ex:a+"/persona/Ex.webp",Re:a+"/persona/Re.webp",Lo:a+"/persona/Lo.webp",Cr:a+"/persona/Cr.webp",En:a+"/persona/En.webp",Sa:a+"/persona/Sa.webp",Ma:a+"/persona/Ma.webp",Ru:a+"/persona/Ru.webp"},Se={Ca:a+"/persona/labels/Ca.webp",Ev:a+"/persona/labels/Ev.webp",In:a+"/persona/labels/In.webp",He:a+"/persona/labels/He.webp",Ex:a+"/persona/labels/Ex.webp",Re:a+"/persona/labels/Re.webp",Lo:a+"/persona/labels/Lo.webp",Cr:a+"/persona/labels/Cr.webp",En:a+"/persona/labels/En.webp",Sa:a+"/persona/labels/Sa.webp",Ma:a+"/persona/labels/Ma.webp",Ru:a+"/persona/labels/Ru.webp"},Ce={Ca:a+"/self/Ca.webp",Ev:a+"/self/Ev.webp",In:a+"/self/In.webp",He:a+"/self/He.webp",Ex:a+"/self/Ex.webp",Re:a+"/self/Re.webp",Lo:a+"/self/Lo.webp",Cr:a+"/self/Cr.webp",En:a+"/self/En.webp",Sa:a+"/self/Sa.webp",Ma:a+"/self/Ma.webp",Ru:a+"/self/Ru.webp"},Ee={Ca:a+"/self/labels/Ca.webp",Ev:a+"/self/labels/Ev.webp",In:a+"/self/labels/In.webp",He:a+"/self/labels/He.webp",Ex:a+"/self/labels/Ex.webp",Re:a+"/self/labels/Re.webp",Lo:a+"/self/labels/Lo.webp",Cr:a+"/self/labels/Cr.webp",En:a+"/self/labels/En.webp",Sa:a+"/self/labels/Sa.webp",Ma:a+"/self/labels/Ma.webp",Ru:a+"/self/labels/Ru.webp"},Y={},Ie=[[m.Ca,m.Cr,m.En],[m.Ev,m.Ex,m.He],[m.In,m.Lo,m.Ma],[m.Re,m.Ru,m.Sa]];Ie.forEach((t,o)=>{t.forEach((l,d)=>{Y[l]={x:d,y:o}})});const Re={class:"result-image"},ke={class:"intro"},xe={class:"labels"},Le={class:"picture"},Ae=["src","alt"],Be=["src","alt"],je={class:"shadow-icon"},Fe=oe({__name:"ResultImage",props:{name:null,persona:null,self:null,shadow:null},setup(t){const o=t,l=h(()=>o.self?Ce[o.self.id]:null);h(()=>o.self?Ee[o.self.id]:null);const d=h(()=>o.persona?ye[o.persona.id]:null);h(()=>o.persona?Se[o.persona.id]:null);const p=h(()=>Y[o.shadow.id||"Ev"]),u={fontFamily:"IBM Plex Sans Condensed",fontSize:"3.3vw",textAlign:"center"},w=Object.assign({},u,{fontWeight:"bold"}),c={fontFamily:"Bricolage Grotesque",fontSize:"9vw",textAlign:"center",textTransform:"uppercase"},E=Object.assign({},c,{fontFamily:"Rosseta",fontSize:"12vw"});return(I,F)=>{var i,H,x;return le(),ne("div",Re,[e("div",ke,[e("div",{style:r(s(w))},b(t.name),5),e("div",{style:u},b(", "+s(j)("intro")),1)]),e("div",xe,[e("p",{class:"row-1",style:r(Object.assign({},c,{color:t.self.selfColor}))},b(t.persona.personaRoot),5),e("p",{class:"row-2",style:r(Object.assign({color:t.self.selfColor},s(E)))},b(t.self.labels.self),5)]),e("div",Le,[e("img",{class:"part-large self",src:s(l),alt:(i=t.self)==null?void 0:i.root},null,8,Ae),e("img",{class:"part-large persona",src:s(d),alt:(H=t.persona)==null?void 0:H.root},null,8,Be),e("div",je,[B(V,{src:"shadow-icons.webp",alt:(x=t.shadow)==null?void 0:x.root,"x-sprites":3,"y-sprites":4,x:s(p).x,y:s(p).y},null,8,["alt","x","y"])])])])}}});const He=ie(Fe,[["__scopeId","data-v-1953a08e"]]);function We(t,o){return new Promise((l,d)=>{t.onload=()=>l(t.height),t.onerror=d,t.src=o})}const ae={"":1,"Bricolage Grotesque":.9,Rosseta:1.08};function Me(t,o){return o=(o||"").replace(/"/g,""),t*(ae[o]||ae[""])}async function re(t,o,l,d=1){var x,D,P,N,O,T,$,K,q,J,U,X;const p=l.getBoundingClientRect(),u=(p.x-o.x)*d,w=(p.y-o.y)*d,c=p.width*d,E=p.height*d,I=t.canvas.width;function F(g){return parseFloat(g.replace("vw",""))*I/100}const i=l.style;if(i.opacity==="0")return;const H=(x=i.filter)==null?void 0:x.toString();if(H&&(t.filter=H),i.boxShadow&&i.boxShadow.length){const g=i.boxShadow.replace(/, /g,",").split(" ");t.shadowColor=g[0],t.shadowOffsetX=F(g[1]),t.shadowOffsetY=F(g[2]),t.shadowBlur=F(g[3])}if(l.childElementCount==1&&l.classList.contains("sprite-sheet-img")&&((D=i.overflow)==null?void 0:D.toString())=="hidden"){const g=l.children[0];if(g.tagName=="IMG"){const f=g.getBoundingClientRect(),{naturalWidth:R,naturalHeight:v}=g,S=R*p.width/f.width,L=v*p.height/f.height,W=R*(p.x-f.x)/f.width,z=v*(p.y-f.y)/f.height;t.drawImage(g,W,z,S,L,u,w,c,E)}}else{if(c&&E){let f;switch(l.tagName){case"IMG":f=l,t.drawImage(f,u,w,c,E);return;case"DIV":let R=!1;const v=(P=i.backgroundColor)==null?void 0:P.toString();v&&v!="rgba(0, 0, 0, 0)"&&(R=!0);const S=(N=i.borderWidth)==null?void 0:N.toString();S&&S!="0px"&&(t.strokeStyle=S.toString()||"black",R=!0),(O=i.maskImage)==null||O.toString();const L=(T=i.backgroundImage)==null?void 0:T.toString();if(L&&(R=!0),R){const W=Number.parseFloat((($=i.borderRadius)==null?void 0:$.toString())||"0");if(W)Oe(t,u,w,c,E,c*W),t.fillStyle=v,t.fill();else if(L){const z=new Image(c,E);await We(z,L.replace(/url|\(|\)|"/g,"")),t.drawImage(z,u,w,c,E)}t.fillStyle="none"}break}}const{innerText:g}=l;if(!l.childElementCount&&g&&g.length){t.fillStyle=((K=i.color)==null?void 0:K.toString())||"black";const f=F(i.fontSize),R=[(q=i.fontStyle)==null?void 0:q.toString(),(J=i.fontWeight)==null?void 0:J.toString(),f+"px",(U=i.fontFamily)==null?void 0:U.toString()].join(" ");t.font=R,t.textAlign=((X=i.textAlign)==null?void 0:X.toString())||"left";let v=0;switch(t.textAlign){case"center":v=c/2;break;case"right":v=c;break}t.fillText(g,u+v,w+Me(f,i.fontFamily),c),t.fillStyle="none"}if(t.shadowColor="rgba(0,0,0,0)",l.childElementCount)for(let f=0;f<l.children.length;f++)await re(t,o,l.children[f],d)}t.filter="none"}function Oe(t,o,l,d,p,u){return d<2*u&&(u=d/2),p<2*u&&(u=p/2),t.beginPath(),t.moveTo(o+u,l),t.arcTo(o+d,l,o+d,l+p,u),t.arcTo(o+d,l+p,o,l+p,u),t.arcTo(o,l+p,o,l,u),t.arcTo(o,l,o+d,l,u),t.closePath(),t}const Te={[m.He]:{work:{[C.en]:"Kunjungi furniture ini di area Gedung CADL",[C.id]:"Kunjungi furniture ini di area Gedung CADL"},name:"Nama Problem Solver",date:{[C.en]:"Jumat, 30 Sept 2004",[C.id]:"Friday, 30 Sept 2004"}},[m.Cr]:{work:{[C.en]:"Kunjungi furniture ini di area Gedung CADL",[C.id]:"Kunjungi furniture ini di area Gedung CADL"},name:"Nama Creator",date:{[C.en]:"Jumat, 30 Sept 2004",[C.id]:"Friday, 30 Sept 2004"}},[m.Lo]:{work:{[C.en]:"Kunjungi furniture ini di area Gedung CADL",[C.id]:"Kunjungi furniture ini di area Gedung CADL"},name:"Nama Conceptor",date:{[C.en]:"Jumat, 30 Sept 2004",[C.id]:"Friday, 30 Sept 2004"}}},k=t=>(we("data-v-d5728bda"),t=t(),ve(),t),ze={class:"result outer container"},Ge={class:"canvas-container"},De=["width","height"],Pe={class:"top-container"},Ne={class:"logo"},$e={class:"parts-container"},Ke={class:"left"},qe={class:"parts"},Ve={class:"part-container"},Ye={class:"part"},Je={class:"part-container"},Ue={class:"part"},Xe={class:"part-container"},Qe={class:"part"},Ze={class:"shadow-part"},es={class:"info hidden-part"},ss={class:"logo-set-container hidden-part"},ts={class:"bottom"},as={class:"instructions"},os={class:"details-container"},ns={class:"details"},ls={class:"section"},is={class:"title"},rs=k(()=>e("div",{class:"number"},[e("h2",null,"1")],-1)),cs={class:"text"},ds={class:"box text"},ps={class:"self-title"},us={class:"image-set"},fs={class:"box"},gs=k(()=>e("div",{class:"sub-title-frame"},null,-1)),hs=["src","alt"],bs=k(()=>e("label",{class:"img-caption"},"Image Caption",-1)),_s=k(()=>e("label",{class:"img-caption small"},"Image Caption small",-1)),ms={class:"image-set"},ws={class:"box"},vs=k(()=>e("div",{class:"sub-title-frame"},null,-1)),ys=["src","alt"],Ss=k(()=>e("label",{class:"img-caption"},"Image Caption",-1)),Cs=k(()=>e("label",{class:"img-caption small"},"Image Caption small",-1)),Es={class:"section"},Is={class:"title"},Rs=k(()=>e("div",{class:"number"},[e("h2",null,"2")],-1)),ks={class:"text"},xs={class:"image-set"},Ls={class:"box"},As=k(()=>e("div",{class:"sub-title-frame"},null,-1)),Bs=["src","alt"],js=k(()=>e("label",{class:"img-caption big"},"Image Caption Big",-1)),Fs={class:"section"},Hs={class:"title"},Ws=k(()=>e("div",{class:"number"},[e("h2",null,"3")],-1)),Ms={class:"text"},Os=["href"],Ts=oe({__name:"ResultPage",setup(t){const o="./imgs",l=de(),d=pe();ue();const p=fe();h(()=>d.lang);const u=h(()=>p.regData.name),w=h(()=>l.resultData.topArchetypes),c=h(()=>w.value.persona?G[w.value.persona]:G.Ev),E=h(()=>{var n;return Y[((n=c.value)==null?void 0:n.id)||"Ev"]});h(()=>{var n;return Te[((n=c.value)==null?void 0:n.id)||"He"]});const I=h(()=>w.value.self?G[w.value.self]:G.Ev),F=h(()=>{var n;return Y[((n=I.value)==null?void 0:n.id)||"Ev"]}),i=h(()=>w.value.shadow?G[w.value.shadow]:G.Ev),H=h(()=>{var n;return Y[((n=i.value)==null?void 0:n.id)||"Ev"]});h(()=>I.value.selfColor);const x=h(()=>se("result-frame/"+I.value.id.toLowerCase()+"_frame")),D=M(null),P=M(null),N=M(""),O=M(null),T=M(!1);function $(n,y){if(n.tagName=="IMG")y.push(n);else for(let _=0;_<n.children.length;_++)$(n.children[_],y)}ge(()=>{he(()=>{const n=[];$(O.value,n);const y=setInterval(()=>{for(let _=0;_<n.length;_++){const A=n[_];A!=null&&A.complete&&A.naturalHeight&&(n.splice(_,1),_--)}n.length||(clearInterval(y),T.value=!0)},1e3)})}),be(T,(n,y)=>{!y&&n&&X()});const K=M(1080),q=M(2300),J=h(()=>window.innerWidth),U=h(()=>window.innerWidth*q.value/K.value);async function X(){const n=P.value,y=n.getContext("2d"),_=D.value.getBoundingClientRect(),A=_.width,Q=n.clientWidth/A;y&&(await re(y,_,O.value,Q),y.globalCompositeOperation="destination-over",y.fillStyle="white",y.fillRect(0,0,n.clientWidth,n.clientHeight),N.value=n.toDataURL("image/png;base64"))}const g={color:"black",fontFamily:"Bricolage Grotesque",fontSize:"4vw",textAlign:"center"},f=Object.assign({},g,{fontSize:"4.55vw",textAlign:"left"}),R=Object.assign({},g,{fontStyle:"italic"}),v={color:"black"},S=Object.assign({},g,v);Object.assign({},R,v);const L={color:"black",fontFamily:"Bricolage Grotesque",fontSize:"4vw",textAlign:"center",lineHeight:"120 %"},W=Object.assign({},L,{fontFamily:"Bricolage Grotesque",fontSize:"4vw",fontWeight:"normal"}),z=Object.assign({},L,{fontFamily:"Rosseta",fontSize:"7vw",fontWeight:"normal",marginBottom:"3vw"}),ce=Object.assign({},L,{fontFamily:"IBM Plex Sans Condensed",fontSize:"2.5vw",fontWeight:"normal"});return(n,y)=>{var _,A,Q,Z;return le(),ne("div",ze,[e("div",{class:"result-frame top-frame top-part",style:r({"background-image":s(x)})},null,4),e("div",{ref_key:"anchorEl",ref:D,style:{width:"100vw"}},null,512),e("div",Ge,[e("canvas",{ref_key:"canvasEl",ref:P,width:K.value,height:q.value},null,8,De)]),e("div",{ref_key:"topEl",ref:O,class:"top"},[e("div",Pe,[e("div",{class:"bg-el",style:r({height:100*s(U)/s(J)+"vw"})},[e("div",{class:"bg",style:r({"background-image":s(se)("bg-result")})},null,4),e("div",{class:"result-frame top-frame",style:r({"background-image":s(x)})},null,4)],4),e("div",Ne,[B(V,{src:"logo-small.webp",alt:"Elemen 1","x-sprites":1,"y-sprites":2,x:0,y:0},null,8,["src"])]),B(He,{name:s(u)||"?",persona:s(c),self:s(I),shadow:s(i)},null,8,["name","persona","self","shadow"]),e("div",$e,[e("div",Ke,[e("div",{style:r(s(f))}," Karaktermu ",4),e("div",{style:r(s(f))}," terdiri dari ",4)]),e("div",qe,[e("div",Ve,[e("span",{class:"top-part",style:r(s(S))},b(((_=s(c))==null?void 0:_.root)||""),5),e("div",Ye,[B(V,{src:"elements-small.webp",alt:"Element 1","x-sprites":3,"y-sprites":4,x:s(E).x,y:s(E).y},null,8,["x","y"])]),e("span",{style:r(s(S))}," Persona ",4)]),e("div",Je,[e("span",{class:"top-part",style:r(s(S))},b(((A=s(I))==null?void 0:A.root)||""),5),e("div",Ue,[B(V,{src:"elements-small.webp",alt:"Element 3","x-sprites":3,"y-sprites":4,x:s(F).x,y:s(F).y},null,8,["x","y"])]),e("span",{style:r(s(S))}," Self ",4)]),e("div",Xe,[e("span",{class:"top-part",style:r(s(S))},b(((Q=s(i))==null?void 0:Q.labels.shadow.en)||""),5),e("div",Qe,[e("div",Ze,[B(V,{src:"shadow-icons.webp",alt:"Element 2","x-sprites":3,"y-sprites":4,x:s(H).x,y:s(H).y},null,8,["x","y"])])]),e("span",{style:r(s(S))}," Shadow ",4)])])]),e("div",es,[e("div",{style:r(s(W))},b(s(j)("title")),5),e("div",{style:r(s(z))},b(s(j)("place")),5),e("div",{style:r(s(W))},b(s(j)("date")),5),e("div",{style:r(s(ce))}," www.ourchetype.com ",4)]),e("div",ss,[B(te)])])],512),e("div",ts,[e("div",{class:"result-frame middle-frame",style:r({"background-image":s(x)})},null,4),e("div",{class:"result-frame bottom-frame",style:r({"background-image":s(x)})},null,4),B(me,{class:"cta",dark:"",disabled:!T.value,download:"Ourchetype.png",href:N.value},{default:_e(()=>[ee(b(s(j)("download")),1)]),_:1},8,["disabled","download","href"]),e("p",as,b(s(j)("instructions")),1),e("div",os,[e("div",ns,[e("div",ls,[e("div",is,[rs,e("div",cs,b(s(j)("1a")),1)]),e("div",ds,[e("p",ps,b((Z=s(I))==null?void 0:Z.root),1)]),e("div",us,[e("div",fs,[gs,e("img",{src:s(o)+"/result-items/work_Cr.webp",alt:"work "+s(c).id},null,8,hs)]),bs,_s]),e("div",ms,[e("div",ws,[vs,e("img",{src:s(o)+"/result-items/work_Cr.webp",alt:"work "+s(c).id},null,8,ys)]),Ss,Cs])]),e("div",Es,[e("div",Is,[Rs,e("div",ks,b(s(j)("2a")),1)]),e("div",xs,[e("div",Ls,[As,e("img",{src:s(o)+"/result-items/work_Cr.webp",alt:"work "+s(c).id},null,8,Bs)]),js])]),e("div",Fs,[e("div",Hs,[Ws,e("div",Ms,[ee(b(s(j)("3a"))+" ",1),e("a",{href:s(i).shadowUrl,target:"_blank",class:"shadow-button",style:r({color:s(I).selfColor,borderColor:s(I).selfColor})}," Shadow ",12,Os)])])])])])]),B(te,{class:"bottom-logo-set"})])}}});const Gs=ie(Ts,[["__scopeId","data-v-d5728bda"]]);export{Gs as default};
