import{Q as _,d as re,c as m,o as ce,a as fe,e,J as w,u as s,t as f,B as E,_ as ue,V as k,b as ge,I as we,U as me,v as be,w as I,M as ye,L as _e,x as ve,z as Se,A as Q,i as H,h as ie,H as le,T as J,q as ke,s as Ce,W as Ee}from"./index-265973d4.js";import{_ as Re}from"./PageContainer.vue_vue_type_style_index_0_lang-34ac1363.js";import{_ as ee}from"./SpriteSheetImg.vue_vue_type_script_setup_true_lang-2caadc86.js";const o="./imgs",Ie={Ca:o+"/persona/Ca.webp",Ev:o+"/persona/Ev.webp",In:o+"/persona/In.webp",He:o+"/persona/He.webp",Ex:o+"/persona/Ex.webp",Re:o+"/persona/Re.webp",Lo:o+"/persona/Lo.webp",Cr:o+"/persona/Cr.webp",En:o+"/persona/En.webp",Sa:o+"/persona/Sa.webp",Ma:o+"/persona/Ma.webp",Ru:o+"/persona/Ru.webp"},Ae={Ca:o+"/persona/labels/Ca.webp",Ev:o+"/persona/labels/Ev.webp",In:o+"/persona/labels/In.webp",He:o+"/persona/labels/He.webp",Ex:o+"/persona/labels/Ex.webp",Re:o+"/persona/labels/Re.webp",Lo:o+"/persona/labels/Lo.webp",Cr:o+"/persona/labels/Cr.webp",En:o+"/persona/labels/En.webp",Sa:o+"/persona/labels/Sa.webp",Ma:o+"/persona/labels/Ma.webp",Ru:o+"/persona/labels/Ru.webp"},We={Ca:o+"/self/Ca.webp",Ev:o+"/self/Ev.webp",In:o+"/self/In.webp",He:o+"/self/He.webp",Ex:o+"/self/Ex.webp",Re:o+"/self/Re.webp",Lo:o+"/self/Lo.webp",Cr:o+"/self/Cr.webp",En:o+"/self/En.webp",Sa:o+"/self/Sa.webp",Ma:o+"/self/Ma.webp",Ru:o+"/self/Ru.webp"},Fe={Ca:o+"/self/labels/Ca.webp",Ev:o+"/self/labels/Ev.webp",In:o+"/self/labels/In.webp",He:o+"/self/labels/He.webp",Ex:o+"/self/labels/Ex.webp",Re:o+"/self/labels/Re.webp",Lo:o+"/self/labels/Lo.webp",Cr:o+"/self/labels/Cr.webp",En:o+"/self/labels/En.webp",Sa:o+"/self/labels/Sa.webp",Ma:o+"/self/labels/Ma.webp",Ru:o+"/self/labels/Ru.webp"},U={},Le=[[_.Ca,_.Cr,_.En],[_.Ev,_.Ex,_.He],[_.In,_.Lo,_.Ma],[_.Re,_.Ru,_.Sa]];Le.forEach((t,a)=>{t.forEach((i,l)=>{U[i]={x:l,y:a}})});const Me={class:"result-image"},Te={class:"intro"},Be={class:"labels"},Pe={class:"picture"},Ne=["src","alt"],Oe=["src","alt"],De=re({__name:"ResultImage",props:{name:null,persona:null,self:null},setup(t){const a=t,i=m(()=>a.self?We[a.self.id]:null);m(()=>a.self?Fe[a.self.id]:null);const l=m(()=>a.persona?Ie[a.persona.id]:null);m(()=>a.persona?Ae[a.persona.id]:null);const d={color:"#333",fontFamily:"PP Neue Machina Plain",fontWeight:"lighter",fontSize:"0.9rem",textAlign:"center",lineHeight:"100%"},u={color:"#333",fontFamily:"PP Neue Machina Inktrap",fontSize:"2rem",textAlign:"center",lineHeight:"100%",textTransform:"uppercase"},R=Object.assign({},d,{fontWeight:"bold"});return(p,y)=>{var r,S;return ce(),fe("div",Me,[e("div",Te,[e("div",{style:w(s(R))},f(t.name),5),e("div",{style:d},f(", "+s(E)("intro")),1)]),e("div",Be,[e("p",{style:u},f(t.persona.labels.persona),1),e("p",{style:u},f(t.self.labels.self),1)]),e("div",Pe,[e("img",{class:"part-large self",src:s(i),alt:(r=t.self)==null?void 0:r.root},null,8,Ne),e("img",{class:"part-large persona",src:s(l),alt:(S=t.persona)==null?void 0:S.root},null,8,Oe)])])}}});const je=ue(De,[["__scopeId","data-v-5e1ff4e7"]]);function xe(t,a){return new Promise((i,l)=>{t.onload=()=>i(t.height),t.onerror=l,t.src=a})}async function K(t,a,i,l=1){var Y,B,Z,L,$,q,G,P,N,O,D;const d=i.getBoundingClientRect(),u=(d.x-a.x)*l,R=(d.y-a.y)*l,p=d.width*l,y=d.height*l,r=i.style;if(r.opacity==="0")return;const S=(Y=r.filter)==null?void 0:Y.toString();if(S&&(t.filter=S),r.boxShadow&&r.boxShadow.length){const g=r.boxShadow.replace(/, /g,",").split(" ");t.shadowColor=g[0],t.shadowOffsetX=V(g[1],l),t.shadowOffsetY=V(g[2],l),t.shadowBlur=V(g[3],l)}if(i.childElementCount==1&&((B=r.overflow)==null?void 0:B.toString())=="hidden"){const g=i.children[0];if(g.tagName=="IMG"){const c=g.getBoundingClientRect(),{naturalWidth:C,naturalHeight:v}=g,M=C*d.width/c.width,j=v*d.height/c.height,x=C*(d.x-c.x)/c.width,W=v*(d.y-c.y)/c.height;t.drawImage(g,x,W,M,j,u,R,p,y)}}else{if(p&&y){let c;switch(i.tagName){case"IMG":c=i,t.drawImage(c,u,R,p,y);return;case"DIV":let C=!1;const v=(Z=r.backgroundColor)==null?void 0:Z.toString();v&&v!="rgba(0, 0, 0, 0)"&&(C=!0);const M=(L=r.borderWidth)==null?void 0:L.toString();M&&M!="0px"&&(t.strokeStyle=M.toString()||"black",C=!0);const j=($=r.maskImage)==null?void 0:$.toString();if(C){const x=Number.parseFloat(((q=r.borderRadius)==null?void 0:q.toString())||"0");if(x)ze(t,u,R,p,y,p*x),t.fillStyle=v,t.fill();else{if(j){const W=new Image(p,y);await xe(W,j.replace(/url|\(|\)|"/g,"")),t.drawImage(W,u,R,p,y),t.globalCompositeOperation="source-in"}t.fillStyle=v,t.fillRect(u,R,p,y),t.globalCompositeOperation="source-over"}t.fillStyle="none"}break}}const{innerText:g}=i;if(!i.childElementCount&&g&&g.length){t.fillStyle=((G=r.color)==null?void 0:G.toString())||"black";const c=V(r.fontSize,l*17),C=[(P=r.fontStyle)==null?void 0:P.toString(),(N=r.fontWeight)==null?void 0:N.toString(),c+"px",(O=r.fontFamily)==null?void 0:O.toString()].join(" ");t.font=C,t.textAlign=((D=r.textAlign)==null?void 0:D.toString())||"left";let v=0;switch(t.textAlign){case"center":v=p/2;break;case"right":v=p;break}t.fillText(g,u+v,R+c,p),t.fillStyle="none"}if(t.shadowColor="rgba(0,0,0,0)",i.childElementCount)for(let c=0;c<i.children.length;c++)await K(t,a,i.children[c],l)}t.filter="none",t.globalCompositeOperation="source-over"}function V(t,a){return t=t.replace("px",""),parseFloat(t)*a}function ze(t,a,i,l,d,u){return l<2*u&&(u=l/2),d<2*u&&(u=d/2),t.beginPath(),t.moveTo(a+u,i),t.arcTo(a+l,i,a+l,i+d,u),t.arcTo(a+l,i+d,a,i+d,u),t.arcTo(a,i+d,a,i,u),t.arcTo(a,i,a+l,i,u),t.closePath(),t}const He={Cr:{persona:{en:"You're truly the artsiest one, aren't you? For you, everything has its own artistry, even hopping on the TiJe bus. It's an art, to be super cool even in the busiest times. Yahoo~",id:""},self:{en:"Your version of normal is like an entirely new creation, leaving others bewildered. What even constitutes normalcy, anyway?",id:""},shadow:"https://www.instagram.com/p/C4-OD2Urvq3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ex:{persona:{en:"Well-well, toast to the most exploarative person. Even if your destination's just one spot, you're all about trying out different routes for that fresh experience. Every new route feels like unlocking a new achievement for you!",id:""},self:{en:"Life's all about the quest for discovery. While you may have just one bus, for you, exploring each route one by one is an essential part of the journey!",id:""},shadow:"https://www.instagram.com/p/C4_Bbqrv4wL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ru:{persona:{en:"Swoosh! You're as punctual as a clock's tick-tock. When you make plans, you're there on the dot. So precise, you could be waiting before the TiJe bus pulls up!",id:""},self:{en:"Whether standing or sitting, what matters most to you is the destination. Home is just ahead!",id:""},shadow:"https://www.instagram.com/p/C4-NtBpr18S/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Sa:{persona:{en:"Ah, for most folks, figuring out the TiJe route is sooo complicated. But for you, it's like playing a fun strategic game. You're always one step ahead, dodging traffic jams like a pro!",id:""},self:{en:"Contemplating every step, every bus ride, every stop – you're a true thinker of life. To you, existence lacks completeness without thoroughly pondering each aspect, like a well-prepared dish.",id:""},shadow:"https://www.instagram.com/p/C4-OAAPLerQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ca:{persona:{en:"You've got the keenest senses! Even from afar, you catch onto the vibes of passengers in need. Are you secretly related to fortune-tellers or something? Your intuition is off the charts!",id:""},self:{en:"The hustle and bustle of the TiJe bus serves as your daily reminder to nurture and care for those around you.",id:""},shadow:"https://www.instagram.com/p/C4_BH65PhWw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ma:{persona:{en:"Hop on the TiJe bus and you'll transform into a spontaneous seer! Your daily encounters with countless individuals have bestowed upon you an uncanny insight into their lives. It's as if you've unlocked the secrets of the universe during each ride!",id:""},self:{en:"Though people may label you as a dreamer, in truth, you possess something magical within your thoughts and the gaze out the window.",id:""},shadow:"https://www.instagram.com/p/C4_A2mkvqKs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ev:{persona:{en:"You and TiJe are totally BFFs! You, who likes mingling with the crowd, must be excited to travel amidst crowds. Especially with TiJe, always being a dust-proof buddy~",id:""},self:{en:"When else can you meet random people at random times?! Amidst countless moments, meeting new folks on the TiJe bus becomes quite memorable for you.",id:""},shadow:"https://www.instagram.com/p/C4_AntfPLtd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Re:{persona:{en:"While other TiJe riders chill out quietly, you're the complete opposite, aren't you? If you're not jamming out standing up, you might even find yourself deep in a political chat with someone. Ahem.",id:""},self:{en:"On the outside, you rock the calm vibe, but deep within, your soul thrives on rebellion. A bit of chaos? Oh yeah, bring it on! Let's shake things up!",id:""},shadow:"https://www.instagram.com/p/C4-N8WdLELq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},En:{persona:{en:"For you who thrive on a good vibes, riding TiJe is an entertainment in itself. Especially when you're with your buddies. Leaving you all full of joys~",id:""},self:{en:"You're a natural entertainer and a delight to be around! Your greatest joy comes from brightening up the lives of those around you with your charm and wit.",id:""},shadow:"https://www.instagram.com/p/C4_BRupvk1H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},In:{persona:{en:"You are an eager beaver! Always buzzing with excitement at every little thing around you. For you, there's just so much to appreciate, like the scenery on your way back home when life gets too tired. It's the little things that bring you joy :)",id:""},self:{en:"To you, riding the TiJe is like hopping aboard the adventure of life. Despite its ups and downs, it's a chance to gaze wide-eyed at the world through multiple windows of opportunity.",id:""},shadow:"https://www.instagram.com/p/C4-PCSDrmN6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Lo:{persona:{en:"You posses an emotional radar that's second to none. Whether amidst the hustle or in trancquil silence, at the sight of something beautiful, you're swept away into a world entirely your own. It's awe-inspiring, truly!",id:""},self:{en:"For you, what matters most are commitment and genuine feelings. Just like the loyalty of TiJe, always faithfully accompanying you~",id:""},shadow:"https://www.instagram.com/p/C4_A-l3P5D5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},He:{persona:{en:"You're a real trooper, you know that? Always going places on your own, you're probably the first to lend a hand to others. For you,TJ bus isn't just a ride—it's your trusty companion, helping you navigate the journey of independence.",id:""},self:{en:"Fight until the last breath. The spirit of fortune seekers!",id:""},shadow:"https://www.instagram.com/p/C4_BjJ1PSQr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}},Je={[_.He]:{work:{[k.en]:"Kunjungi furniture ini di area Gedung CADL",[k.id]:"Kunjungi furniture ini di area Gedung CADL"},name:"Nama Problem Solver",date:{[k.en]:"Jumat, 30 Sept 2004",[k.id]:"Friday, 30 Sept 2004"}},[_.Cr]:{work:{[k.en]:"Kunjungi furniture ini di area Gedung CADL",[k.id]:"Kunjungi furniture ini di area Gedung CADL"},name:"Nama Creator",date:{[k.en]:"Jumat, 30 Sept 2004",[k.id]:"Friday, 30 Sept 2004"}},[_.Sa]:{work:{[k.en]:"Kunjungi furniture ini di area Gedung CADL",[k.id]:"Kunjungi furniture ini di area Gedung CADL"},name:"Nama Conceptor",date:{[k.en]:"Jumat, 30 Sept 2004",[k.id]:"Friday, 30 Sept 2004"}}},F=t=>(ke("data-v-bca8b010"),t=t(),Ce(),t),Ye={class:"canvas-container"},Ze=["width","height"],$e=F(()=>e("img",{class:"logo",src:Ee,alt:"Mempertemukan Jakarta"},null,-1)),qe={class:"parts"},Ge={class:"part-container"},Ke={class:"part"},Ve={class:"part-container"},Ue={class:"part"},Xe={class:"part-container"},Qe={class:"part"},et=F(()=>e("div",{class:"spacer"},null,-1)),tt=F(()=>e("div",null,null,-1)),st=F(()=>e("div",null,null,-1)),ot=F(()=>e("div",null,null,-1)),nt={class:"instructions"},at={class:"details-container"},it={class:"details"},lt={class:"section"},rt={class:"title"},ct=F(()=>e("div",{class:"number"},[e("h2",null,"1")],-1)),ut={class:"self-title"},dt={class:"section"},pt={class:"title"},ht=F(()=>e("div",{class:"number"},[e("h2",null,"2")],-1)),ft=["src","alt"],gt={class:"section"},wt={class:"title"},mt=F(()=>e("div",{class:"number"},[e("h2",null,"3")],-1)),bt=re({__name:"ResultPage",setup(t){const a="./imgs",i=ge(),l=we(),d=me(),u=be();m(()=>l.lang);const R=m(()=>u.regData.name),p=m(()=>i.resultData.topArchetypes),y=m(()=>p.value.persona?J[p.value.persona]:J.Ev),r=m(()=>{var n;return U[((n=y.value)==null?void 0:n.id)||"Ev"]});m(()=>{var n;return Je[((n=y.value)==null?void 0:n.id)||"He"]});const S=m(()=>p.value.self?J[p.value.self]:J.Ev),Y=m(()=>{var n;return U[((n=S.value)==null?void 0:n.id)||"Ev"]}),B=m(()=>p.value.shadow?J[p.value.shadow]:J.Ev),Z=m(()=>{var n;return U[((n=B.value)==null?void 0:n.id)||"Ev"]}),L=m(()=>S.value.selfColor),$=I(null),q=I(null),G=I(""),P=I(null),N=I(null),O=I(null),D=I(null),g=I(!1);function c(n,b){if(n.tagName=="IMG")b.push(n);else for(let h=0;h<n.children.length;h++)c(n.children[h],b)}ye(()=>{d.bgSettings.bgColorHex=L.value,_e(()=>{const n=[];c(D.value,n),c(P.value,n),c(O.value,n),c(N.value,n);const b=setInterval(()=>{for(let h=0;h<n.length;h++){const A=n[h];A!=null&&A.complete&&A.naturalHeight&&(n.splice(h,1),h--)}n.length||(clearInterval(b),g.value=!0)},1e3)})}),ve(g,(n,b)=>{!b&&n&&x()});const C=I(1080),v=I(1920),M=m(()=>window.innerWidth),j=m(()=>window.innerWidth*v.value/C.value);async function x(){const n=q.value,b=n.getContext("2d"),h=$.value.getBoundingClientRect(),A=h.width,T=n.clientWidth/A;b&&(await K(b,h,D.value,T),await K(b,h,P.value,T),await K(b,h,O.value,T),await K(b,h,N.value,T),b.globalCompositeOperation="destination-over",b.fillStyle="white",b.fillRect(0,0,n.clientWidth,n.clientHeight),G.value=n.toDataURL("image/png;base64"))}const W={color:"#444",fontFamily:"PP Neue Machina Plain",fontSize:"0.8rem",textAlign:"center"},de=Object.assign({},W,{fontSize:"1rem"}),pe=Object.assign({},W,{fontStyle:"italic"}),te={color:"black"},z=Object.assign({},W,te);Object.assign({},pe,te);const X={color:"#444",fontFamily:"PP Neue Machina Plain",fontSize:"0.7rem",textAlign:"center",lineHeight:"120 %",transform:"scaleX(1.5)"},se=Object.assign({},X,{fontSize:"0.7rem",fontWeight:"normal"}),oe=Object.assign({},X,{fontFamily:"PP Neue Machina Inktrap",fontSize:"0.7rem",fontWeight:"normal"}),he=Object.assign({},X,{fontFamily:"PP Neue Machina Inktrap",fontSize:"0.9rem",fontWeight:"normal"});return(n,b)=>(ce(),Se(Re,{"inner-class":{result:!0}},{default:Q(()=>{var h,A,T,ne,ae;return[e("div",{ref_key:"bgEl",ref:D,class:"bg-el hidden-part",style:w({"mask-image":`url(${s(a)}/result-bg.webp)`,"background-color":s(S).selfColor,height:100*s(j)/s(M)+"vw"})},null,4),e("div",{ref_key:"anchorEl",ref:$,style:{width:"100vw"}},null,512),e("div",Ye,[e("canvas",{ref_key:"canvasEl",ref:q,width:C.value,height:v.value},null,8,Ze)]),e("div",{ref_key:"topEl",ref:P,class:"top"},[$e,H(je,{name:s(R)||"?",persona:s(y),self:s(S)},null,8,["name","persona","self"])],512),e("div",{ref_key:"partsEl",ref:N,class:"parts-container"},[e("div",{style:w(s(de))},f(s(E)("fusion")),5),e("div",qe,[e("div",Ge,[e("span",{style:w(s(z))},f(((h=s(y))==null?void 0:h.labels.persona)||""),5),e("div",Ke,[H(ee,{src:"elements-small.webp",alt:"Element 1","x-sprites":3,"y-sprites":4,x:s(r).x,y:s(r).y},null,8,["x","y"])]),e("span",{style:w(s(z))}," Persona ",4)]),e("div",Ve,[e("span",{style:w(s(z))},f(((A=s(B))==null?void 0:A.root)||""),5),e("div",Ue,[H(ee,{src:"elements-small.webp",alt:"Element 2","x-sprites":3,"y-sprites":4,x:s(Z).x,y:s(Z).y},null,8,["x","y"])]),e("span",{style:w(s(z))}," Shadow ",4)]),e("div",Xe,[e("span",{style:w(s(z))},f(((T=s(S))==null?void 0:T.root)||""),5),e("div",Qe,[H(ee,{src:"elements-small.webp",alt:"Element 3","x-sprites":3,"y-sprites":4,x:s(Y).x,y:s(Y).y},null,8,["x","y"])]),e("span",{style:w(s(z))}," Self ",4)])]),e("div",{ref_key:"infoEl",ref:O,class:"info hidden-part"},[e("div",{style:w(s(he))},f(s(E)("title")),5),e("div",{style:w(s(oe))},f(s(E)("subtitle")),5),et,e("div",{style:w(s(se))},f(s(E)("place")),5),e("div",{style:w(s(oe))},f(s(E)("date")),5),tt,st,ot,e("div",{style:w(s(se))},"www.ourchetype.com",4)],512)],512),e("div",{class:"bottom",style:w({backgroundColor:s(L)})},[e("div",{class:"details-top",style:w({backgroundColor:s(L),maskImage:`url(${s(a)}/bg-footer-1.webp)`})},null,4),e("p",nt,f(s(E)("instructions")),1),e("div",at,[e("div",it,[e("div",lt,[e("div",rt,[ct,e("p",null,f(s(E)("1a")),1)]),e("div",{class:"box text",style:w({backgroundColor:s(L)})},[e("p",ut,f((ne=s(S))==null?void 0:ne.root),1)],4)]),e("div",dt,[e("div",pt,[ht,e("p",null,f(s(E)("2a")),1)]),e("img",{class:"box",src:s(a)+"/result-items/work_"+s(y).id+".png",alt:"work "+s(y).id},null,8,ft)]),e("div",gt,[e("div",wt,[mt,e("p",null,f(s(E)("3a")),1)]),H(le,{class:"cta","bg-color":"black",dark:"",href:s(He)[(ae=s(B))==null?void 0:ae.id].shadow,external:""},{default:Q(()=>[ie(" Shadow ")]),_:1},8,["href"])])])]),H(le,{class:"cta",dark:"",disabled:!g.value,download:"Ourchetype.png",href:G.value},{default:Q(()=>[ie(f(s(E)("download")),1)]),_:1},8,["disabled","download","href"])],4)]}),_:1}))}});const St=ue(bt,[["__scopeId","data-v-bca8b010"]]);export{St as default};
