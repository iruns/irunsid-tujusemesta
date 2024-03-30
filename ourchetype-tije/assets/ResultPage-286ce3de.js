import{_ as ue}from"./PageContainer.vue_vue_type_style_index_0_lang-893a7e70.js";import{W as k,d as ce,c as y,o as U,a as se,e,M as C,u as s,t as u,B as T,h as F,N as J,_ as de,b as he,L as pe,w as W,S as fe,Q as we,x as _e,z as ge,A as K,k as A,I as ie,Y as be,F as re,n as me,X as H,m as ye,q as ve}from"./index-9f3395d5.js";const Ee=""+new URL("shadow-orbit-903cdd91.webp",import.meta.url).href,o="./imgs",Se={Ca:o+"/persona/Ca.webp",Ev:o+"/persona/Ev.webp",In:o+"/persona/In.webp",He:o+"/persona/He.webp",Ex:o+"/persona/Ex.webp",Re:o+"/persona/Re.webp",Lo:o+"/persona/Lo.webp",Cr:o+"/persona/Cr.webp",En:o+"/persona/En.webp",Sa:o+"/persona/Sa.webp",Ma:o+"/persona/Ma.webp",Ru:o+"/persona/Ru.webp"},ke={Ca:o+"/persona/labels/Ca.webp",Ev:o+"/persona/labels/Ev.webp",In:o+"/persona/labels/In.webp",He:o+"/persona/labels/He.webp",Ex:o+"/persona/labels/Ex.webp",Re:o+"/persona/labels/Re.webp",Lo:o+"/persona/labels/Lo.webp",Cr:o+"/persona/labels/Cr.webp",En:o+"/persona/labels/En.webp",Sa:o+"/persona/labels/Sa.webp",Ma:o+"/persona/labels/Ma.webp",Ru:o+"/persona/labels/Ru.webp"},Ce={Ca:o+"/self/Ca.webp",Ev:o+"/self/Ev.webp",In:o+"/self/In.webp",He:o+"/self/He.webp",Ex:o+"/self/Ex.webp",Re:o+"/self/Re.webp",Lo:o+"/self/Lo.webp",Cr:o+"/self/Cr.webp",En:o+"/self/En.webp",Sa:o+"/self/Sa.webp",Ma:o+"/self/Ma.webp",Ru:o+"/self/Ru.webp"},Re={Ca:o+"/self/labels/Ca.webp",Ev:o+"/self/labels/Ev.webp",In:o+"/self/labels/In.webp",He:o+"/self/labels/He.webp",Ex:o+"/self/labels/Ex.webp",Re:o+"/self/labels/Re.webp",Lo:o+"/self/labels/Lo.webp",Cr:o+"/self/labels/Cr.webp",En:o+"/self/labels/En.webp",Sa:o+"/self/labels/Sa.webp",Ma:o+"/self/labels/Ma.webp",Ru:o+"/self/labels/Ru.webp"},$={},Ie=[[k.Ca,k.Cr,k.En],[k.Ev,k.Ex,k.He],[k.In,k.Lo,k.Ma],[k.Re,k.Ru,k.Sa]];Ie.forEach((t,n)=>{t.forEach((l,i)=>{$[l]={x:i,y:n}})});const Ae={class:"result-image"},We={class:"intro"},Te={class:"labels"},Le={class:"label-container"},xe=["src"],Be={class:"label-container"},Fe=["src"],Me={class:"picture"},Oe=["src","alt"],Ne=["src","alt"],ze={ref:"shadowEl",class:"part-large shadow"},De=["alt"],je={class:"shadow-icon"},He=ce({__name:"ResultImage",props:{name:null,persona:null,self:null,shadow:null},setup(t){const n=t,l=y(()=>n.self?Ce[n.self.id]:null),i=y(()=>n.self?Re[n.self.id]:null),h=y(()=>n.persona?Se[n.persona.id]:null),r=y(()=>n.persona?ke[n.persona.id]:null),p=y(()=>$[n.shadow.id||"Ev"]),f={color:"#333",fontFamily:"Unbounded",fontWeight:"lighter",fontSize:"0.9em",textAlign:"center",lineHeight:"100%"},c=Object.assign({},f,{fontWeight:"bold"});return(E,M)=>{var R,L,x,B;return U(),se("div",Ae,[e("div",We,[e("div",{style:C(s(c))},u(t.name),5),e("div",{style:f},u(", "+s(T)("intro")),1)]),e("div",Te,[e("div",Le,[e("img",{src:s(r),style:C({filter:"brightness(0)"})},null,12,xe)]),e("div",Be,[e("img",{src:s(i),style:C({filter:"brightness(0)"})},null,12,Fe)])]),e("div",Me,[e("img",{class:"part-large self",src:s(l),alt:(R=t.self)==null?void 0:R.labels.root},null,8,Oe),e("img",{class:"part-large persona",src:s(h),alt:(L=t.persona)==null?void 0:L.labels.root},null,8,Ne),e("div",ze,[e("img",{class:"shadow-orbit",src:Ee,alt:(x=t.shadow)==null?void 0:x.labels.root},null,8,De),e("div",je,[F(J,{src:"shadow-icons.webp",alt:(B=t.shadow)==null?void 0:B.labels.root,"x-sprites":3,"y-sprites":4,x:s(p).x,y:s(p).y},null,8,["alt","x","y"])])],512)])])}}});const Ye=de(He,[["__scopeId","data-v-efdf4198"]]);function P(t,n,l=1){var M,R,L,x,B,Y,O,N,z,D;const i=n.getBoundingClientRect(),h=i.x*l,r=i.y*l,p=i.width*l,f=i.height*l,c=n.style,E=(M=c.filter)==null?void 0:M.toString();if(E&&(t.filter=E),c.boxShadow&&c.boxShadow.length){const w=c.boxShadow.replace(/, /g,",").split(" ");t.shadowColor=w[0],t.shadowOffsetX=q(w[1],l),t.shadowOffsetY=q(w[2],l),t.shadowBlur=q(w[3],l)}if(n.childElementCount==1&&((R=c.overflow)==null?void 0:R.toString())=="hidden"){const w=n.children[0];if(w.tagName=="IMG"){const b=w.getBoundingClientRect(),{naturalWidth:d,naturalHeight:I}=w,v=d*i.width/b.width,j=I*i.height/b.height,X=d*(i.x-b.x)/b.width,Z=I*(i.y-b.y)/b.height;t.drawImage(w,X,Z,v,j,h,r,p,f)}}else{let w;switch(n.tagName){case"IMG":w=n,t.drawImage(w,h,r,p,f);return;case"DIV":let d=!1;const I=(L=c.backgroundColor)==null?void 0:L.toString();I&&I!="rgba(0, 0, 0, 0)"&&(t.fillStyle=I,d=!0);const v=(x=c.borderWidth)==null?void 0:x.toString();if(v&&v!="0px"&&(t.strokeStyle=v.toString()||"black",d=!0),d){const j=Number.parseFloat(((B=c.borderRadius)==null?void 0:B.toString())||"0");j?(Je(t,h,r,p,f,p*j),t.fill()):t.fillRect(h,r,p,f),t.fillStyle="none"}break}const{innerText:b}=n;if(!n.childElementCount&&b&&b.length){t.fillStyle=((Y=c.color)==null?void 0:Y.toString())||"black";const d=q(c.fontSize,l*17),I=[(O=c.fontStyle)==null?void 0:O.toString(),(N=c.fontWeight)==null?void 0:N.toString(),d+"px",(z=c.fontFamily)==null?void 0:z.toString()].join(" ");t.font=I,t.textAlign=((D=c.textAlign)==null?void 0:D.toString())||"left";let v=0;switch(t.textAlign){case"center":v=p/2;break;case"right":v=p;break}t.fillText(b,h+v,r+d,p),t.fillStyle="none"}if(t.shadowColor="rgba(0,0,0,0)",n.childElementCount)for(let d=0;d<n.children.length;d++)P(t,n.children[d],l)}t.filter="none",t.globalCompositeOperation="source-over"}function q(t,n){return t=t.replace("px",""),parseFloat(t)*n}function Je(t,n,l,i,h,r){return i<2*r&&(r=i/2),h<2*r&&(r=h/2),t.beginPath(),t.moveTo(n+r,l),t.arcTo(n+i,l,n+i,l+h,r),t.arcTo(n+i,l+h,n,l+h,r),t.arcTo(n,l+h,n,l,r),t.arcTo(n,l,n+i,l,r),t.closePath(),t}const ee={Cr:{persona:{en:"You're truly the artsiest one, aren't you? For you, everything has its own artistry, even hopping on the TiJe bus. It's an art, to be super cool even in the busiest times. Yahoo~",id:""},self:{en:"Your version of normal is like an entirely new creation, leaving others bewildered. What even constitutes normalcy, anyway?",id:""},shadow:"https://www.instagram.com/p/C4-OD2Urvq3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ex:{persona:{en:"Well-well, toast to the most exploarative person. Even if your destination's just one spot, you're all about trying out different routes for that fresh experience. Every new route feels like unlocking a new achievement for you!",id:""},self:{en:"Life's all about the quest for discovery. While you may have just one bus, for you, exploring each route one by one is an essential part of the journey!",id:""},shadow:"https://www.instagram.com/p/C4_Bbqrv4wL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ru:{persona:{en:"Swoosh! You're as punctual as a clock's tick-tock. When you make plans, you're there on the dot. So precise, you could be waiting before the TiJe bus pulls up!",id:""},self:{en:"Whether standing or sitting, what matters most to you is the destination. Home is just ahead!",id:""},shadow:"https://www.instagram.com/p/C4-NtBpr18S/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Sa:{persona:{en:"Ah, for most folks, figuring out the TiJe route is sooo complicated. But for you, it's like playing a fun strategic game. You're always one step ahead, dodging traffic jams like a pro!",id:""},self:{en:"Contemplating every step, every bus ride, every stop – you're a true thinker of life. To you, existence lacks completeness without thoroughly pondering each aspect, like a well-prepared dish.",id:""},shadow:"https://www.instagram.com/p/C4-OAAPLerQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ca:{persona:{en:"You've got the keenest senses! Even from afar, you catch onto the vibes of passengers in need. Are you secretly related to fortune-tellers or something? Your intuition is off the charts!",id:""},self:{en:"The hustle and bustle of the TiJe bus serves as your daily reminder to nurture and care for those around you.",id:""},shadow:"https://www.instagram.com/p/C4_BH65PhWw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ma:{persona:{en:"Hop on the TiJe bus and you'll transform into a spontaneous seer! Your daily encounters with countless individuals have bestowed upon you an uncanny insight into their lives. It's as if you've unlocked the secrets of the universe during each ride!",id:""},self:{en:"Though people may label you as a dreamer, in truth, you possess something magical within your thoughts and the gaze out the window.",id:""},shadow:"https://www.instagram.com/p/C4_A2mkvqKs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Ev:{persona:{en:"You and TiJe are totally BFFs! You, who likes mingling with the crowd, must be excited to travel amidst crowds. Especially with TiJe, always being a dust-proof buddy~",id:""},self:{en:"When else can you meet random people at random times?! Amidst countless moments, meeting new folks on the TiJe bus becomes quite memorable for you.",id:""},shadow:"https://www.instagram.com/p/C4_AntfPLtd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Re:{persona:{en:"While other TiJe riders chill out quietly, you're the complete opposite, aren't you? If you're not jamming out standing up, you might even find yourself deep in a political chat with someone. Ahem.",id:""},self:{en:"On the outside, you rock the calm vibe, but deep within, your soul thrives on rebellion. A bit of chaos? Oh yeah, bring it on! Let's shake things up!",id:""},shadow:"https://www.instagram.com/p/C4-N8WdLELq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},En:{persona:{en:"For you who thrive on a good vibes, riding TiJe is an entertainment in itself. Especially when you're with your buddies. Leaving you all full of joys~",id:""},self:{en:"You're a natural entertainer and a delight to be around! Your greatest joy comes from brightening up the lives of those around you with your charm and wit.",id:""},shadow:"https://www.instagram.com/p/C4_BRupvk1H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},In:{persona:{en:"You are an eager beaver! Always buzzing with excitement at every little thing around you. For you, there's just so much to appreciate, like the scenery on your way back home when life gets too tired. It's the little things that bring you joy :)",id:""},self:{en:"To you, riding the TiJe is like hopping aboard the adventure of life. Despite its ups and downs, it's a chance to gaze wide-eyed at the world through multiple windows of opportunity.",id:""},shadow:"https://www.instagram.com/p/C4-PCSDrmN6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},Lo:{persona:{en:"You posses an emotional radar that's second to none. Whether amidst the hustle or in trancquil silence, at the sight of something beautiful, you're swept away into a world entirely your own. It's awe-inspiring, truly!",id:""},self:{en:"For you, what matters most are commitment and genuine feelings. Just like the loyalty of TiJe, always faithfully accompanying you~",id:""},shadow:"https://www.instagram.com/p/C4_A-l3P5D5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},He:{persona:{en:"You're a real trooper, you know that? Always going places on your own, you're probably the first to lend a hand to others. For you,TJ bus isn't just a ride—it's your trusty companion, helping you navigate the journey of independence.",id:""},self:{en:"Fight until the last breath. The spirit of fortune seekers!",id:""},shadow:"https://www.instagram.com/p/C4_BjJ1PSQr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}},g=t=>(ye("data-v-8f9652aa"),t=t(),ve(),t),Pe={class:"canvas-container"},$e={class:"logo"},Ze=["src"],qe=["src"],Ue={class:"parts"},Xe={class:"part-container"},Ve={class:"part"},Ge={class:"part-container"},Qe={class:"part"},Ke={class:"part-container"},es={class:"part"},ss={class:"shadow-part"},ts=g(()=>e("div",null,null,-1)),os=g(()=>e("div",null,null,-1)),ns=g(()=>e("div",null,null,-1)),as=g(()=>e("div",null,null,-1)),ls=g(()=>e("div",{class:"spacer"},null,-1)),is={class:"instructions"},rs=g(()=>e("div",{class:"number"},[e("h2",null,"1")],-1)),cs={class:"part-details"},ds={class:"character"},us=["src"],hs=g(()=>e("br",null,null,-1)),ps={class:"character"},fs=["src"],ws=g(()=>e("br",null,null,-1)),_s=g(()=>e("img",null,null,-1)),gs=g(()=>e("div",{class:"number"},[e("h2",null,"2")],-1)),bs={class:"part-details"},ms={class:"character"},ys=["src"],vs={class:"text"},Es={class:"title"},Ss=g(()=>e("div",{class:"number"},[e("h2",null,"1")],-1)),ks=g(()=>e("br",null,null,-1)),Cs={class:"description"},Rs={class:"part-details"},Is={class:"character"},As=["src"],Ws={class:"text"},Ts={class:"title"},Ls=g(()=>e("div",{class:"number"},[e("h2",null,"2")],-1)),xs=g(()=>e("br",null,null,-1)),Bs={class:"description"},Fs={class:"shadow"},Ms=g(()=>e("div",{class:"spacer"},null,-1)),Os=ce({__name:"ResultPage",setup(t){const n="./imgs",l=he(),i=pe(),h=y(()=>i.lang),r=y(()=>l.regData.name),p=y(()=>l.resultData.topArchetypes),f=y(()=>p.value.persona?H[p.value.persona]:H.Ev),c=y(()=>{var a;return $[((a=f.value)==null?void 0:a.id)||"Ev"]}),E=y(()=>p.value.self?H[p.value.self]:H.Ev),M=y(()=>{var a;return $[((a=E.value)==null?void 0:a.id)||"Ev"]}),R=y(()=>p.value.shadow?H[p.value.shadow]:H.Ev),L=y(()=>{var a;return $[((a=R.value)==null?void 0:a.id)||"Ev"]}),x=W(null),B=W(null),Y=W(""),O=W(null),N=W(null),z=W(null),D=W(null),w=W(null),b=W(!1);function d(a,_){if(a.tagName=="IMG")_.push(a);else for(let m=0;m<a.children.length;m++)d(a.children[m],_)}fe(()=>{we(()=>{D.value=document.getElementsByClassName("bgs")[0]||null,w.value=document.getElementsByClassName("part-large shadow")[0]||null;const a=[];d(D.value,a),d(O.value,a),d(z.value,a),d(N.value,a);const _=setInterval(()=>{for(let m=0;m<a.length;m++){const S=a[m];S!=null&&S.complete&&S.naturalHeight&&(a.splice(m,1),m--)}a.length||(clearInterval(_),b.value=!0)},1e3)})}),_e(b,(a,_)=>{!_&&a&&(I(),w.value.style.animationDuration="10s")});function I(){const a=B.value,_=a.getContext("2d"),m=x.value.getBoundingClientRect().width,S=a.clientWidth/m;_&&(_.fillStyle="#ffffff",_.fillRect(0,0,a.clientWidth,a.clientHeight),P(_,D.value,S),P(_,O.value,S),P(_,z.value,S),P(_,N.value,S),Y.value=a.toDataURL("image/png;base64"))}const v={color:"#444",fontFamily:"Unbounded",fontSize:"0.8em",fontWeight:"lighter",textAlign:"center",width:"100%"},j=Object.assign({},v,{}),X=Object.assign({},v,{fontStyle:"italic"}),Z={color:"black"},V=Object.assign({},v,Z),G=Object.assign({},X,Z),Q={color:"#444",fontFamily:"Unbounded",fontSize:"0.7em",fontWeight:"lighter",textAlign:"center",lineHeight:"120 %",transform:"scaleX(1.5)"},te=Object.assign({},Q,{fontSize:"0.7em",fontWeight:"normal"});return(a,_)=>(U(),ge(ue,{"inner-class":{result:!0}},{default:K(()=>{var m,S,oe,ne,ae,le;return[e("div",{ref_key:"widthEl",ref:x,style:{width:"100vw"}},null,512),e("div",Pe,[e("canvas",{ref_key:"canvasEl",ref:B,width:1080,height:1920},null,512)]),e("div",{ref_key:"topEl",ref:O,class:"top"},[e("div",$e,[F(J,{src:"logos.webp",alt:"Mempertemukan Jakarta","x-sprites":1,"y-sprites":2,x:0,y:1})]),e("img",{class:"bg-character left hidden-part",src:s(n)+"/result-items/"+s(f).id+"_left.webp"},null,8,Ze),e("img",{class:"bg-character right hidden-part",src:s(n)+"/result-items/"+s(E).id+"_right.webp"},null,8,qe),F(Ye,{name:s(r)||"?",persona:s(f),self:s(E),shadow:s(R)},null,8,["name","persona","self","shadow"])],512),e("div",{ref_key:"partsEl",ref:N,class:"parts-container"},[e("div",{style:C(s(j))},u(s(T)("fusion")),5),e("div",Ue,[e("div",Xe,[e("span",{style:C(s(G))}," (persona) ",4),e("div",Ve,[F(J,{src:"elements-small.webp",alt:"Element 1","x-sprites":3,"y-sprites":4,x:s(c).x,y:s(c).y},null,8,["x","y"])]),e("span",{style:C(s(V))},u(((m=s(f))==null?void 0:m.labels.root)||""),5)]),e("div",Ge,[e("span",{style:C(s(G))}," (self) ",4),e("div",Qe,[F(J,{src:"elements-small.webp",alt:"Element 2","x-sprites":3,"y-sprites":4,x:s(M).x,y:s(M).y},null,8,["x","y"])]),e("span",{style:C(s(V))},u(((S=s(E))==null?void 0:S.labels.root)||""),5)]),e("div",Ke,[e("span",{style:C(s(G))}," (shadow) ",4),e("div",es,[e("div",ss,[F(J,{src:"shadow-icons.webp",alt:"Element 3","x-sprites":3,"y-sprites":4,x:s(L).x,y:s(L).y},null,8,["x","y"])])]),e("span",{style:C(s(V))},u(((oe=s(R))==null?void 0:oe.labels.shadow[s(h)])||""),5)])])],512),e("div",{ref_key:"infoEl",ref:z,class:"info hidden-part"},[e("div",{style:C(s(te))},u(s(T)("title")),5),e("div",{style:C(s(te))},u(s(T)("subtitle")),5),ts,os,ns,as,e("div",{style:Q},u(s(T)("place")),1),e("div",{style:Q},u(s(T)("date")),1)],512),F(ie,{class:"cta",dark:"",disabled:!b.value,download:"Ourchetype.png",href:Y.value},{default:K(()=>[A(" Share ")]),_:1},8,["disabled","download","href"]),ls,e("div",{class:me(["details",s(h)])},[s(h)==s(be).id?(U(),se(re,{key:0},[e("p",is,u(s(T)("instructions")),1),rs,e("p",null,u(s(T)("persona_self")),1),e("div",cs,[e("div",ds,[e("img",{src:s(n)+"/result-items/"+s(f).id+"_cropped.webp"},null,8,us),e("p",null,[A(" Persona"),hs,A(" "+u(s(f).labels.root),1)])]),e("div",ps,[e("img",{src:s(n)+"/result-items/"+s(E).id+"_cropped.webp"},null,8,fs),e("p",null,[A(" Self"),ws,A(" "+u(s(E).labels.root),1)])])]),_s,gs],64)):(U(),se(re,{key:1},[e("div",bs,[e("div",ms,[e("img",{src:s(n)+"/result-items/"+s(f).id+".webp"},null,8,ys)]),e("div",vs,[e("div",Es,[Ss,e("h3",null,[A(" PERSONA -"),ks,A("The "+u(s(f).labels.persona),1)])]),e("p",Cs,u(s(ee)[(ne=s(f))==null?void 0:ne.id].persona.en),1)])]),e("div",Rs,[e("div",Is,[e("img",{src:s(n)+"/result-items/"+s(E).id+".webp"},null,8,As)]),e("div",Ws,[e("div",Ts,[Ls,e("h3",null,[A(" SELF -"),xs,A("The "+u(s(f).labels.self),1)])]),e("p",Bs,u(s(ee)[(ae=s(E))==null?void 0:ae.id].self.en),1)])])],64)),e("div",Fs,[e("p",null,u(s(T)("shadow")),1),F(ie,{class:"cta","bg-color":"blue",dark:"",href:s(ee)[(le=s(R))==null?void 0:le.id].shadow,external:""},{default:K(()=>[A(" Shadow ")]),_:1},8,["href"])])],2),Ms]}),_:1}))}});const Ds=de(Os,[["__scopeId","data-v-8f9652aa"]]);export{Ds as default};
