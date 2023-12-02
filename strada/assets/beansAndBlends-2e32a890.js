import{C as S}from"./index-18502f58.js";import{s as F,t as B}from"./math-c3d3a642.js";function D(d,h,c){const l=c||{};for(const i in d){const e=i;l[e]=0}const o={};let r;for(r in h){const i={};o[r]=i;for(const e in d){const a=e;i[a]=d[a].beans[r]||0}}F(l,l,o,h);const s=[];for(const i in d){const e=i,a=d[e];l[e]*=a.weight,s.push(a)}return s.sort((i,e)=>l[e.id]-l[i.id]),s}function E(d,h,c,l,o){const r=[];o||(o=D(h,l)),o.length=d;const s=B(l),i={},e={},a=[];for(o.forEach((n,b)=>{const g=[];i[n.id]=g;let t;for(t in n.beans){const u=n.beans[t];if(!u)continue;e[t]||(e[t]=[]);let w=0;for(let f=0;f<o.length;f++){if(b==f)continue;const m=o[f].beans[t];w+=Math.max(0,u-(m||0))}const x=1+u-s[t];w*=x;const y={blend:n.id,bean:t,diffScore:w};g.push(y),e[t].push(y),a.push(y)}}),a.sort((n,b)=>b.diffScore-n.diffScore);a.length;){const n=a[0],{blend:b,bean:g}=n;r.push(g),S.pull(a,...i[b]),S.pull(a,...e[g])}return r.sort((n,b)=>c[n].idx-c[b].idx),r}const C={Sf:{id:"Sf",idx:0,label:"Seasonal Fullwash",color:{id:"Biru",hex:"#2979ba"}},Da:{id:"Da",idx:1,label:"Dark Roast Arabica",color:{id:"Abu",hex:"#9a9e9e"}},Dr:{id:"Dr",idx:2,label:"Dark Roast Robusta",color:{id:"Hitam",hex:"#424243"}},Ga:{id:"Ga",idx:3,label:"Gayo",color:{id:"Merah",hex:"#d83529"}},Jb:{id:"Jb",idx:4,label:"Jawa Barat",color:{id:"Dusty Pink",hex:"#DD73A9"}},To:{id:"To",idx:5,label:"Toraja",color:{id:"Lavender",hex:"#7f1645"}},Fl:{id:"Fl",idx:6,label:"Flores",color:{id:"Hijau",hex:"#3b692f"}},Sn:{id:"Sn",idx:7,label:"Seasonal Natural",color:{id:"Berry",hex:"#AA1772"}},Se:{id:"Se",idx:8,label:"Seasonal",color:{id:"Oranye",hex:"#ef6e1b"}},Ft:{id:"Ft",idx:9,label:"Fine Robusta Temanggung",color:{id:"Cokelat Tua",hex:"#834E1E"}},Pa:{id:"Pa",idx:10,label:"Papua",color:{id:"Cokelat",hex:"#B76E2C"}},Ba:{id:"Ba",idx:11,label:"Bali",color:{id:"Kuning",hex:"#f2d21c"}}},J={1:{id:"1",label:{en:"Brightly Confident",id:"Primadona Berani"},beans:{Ga:.5,Ft:.5},weight:.9978181184883645},2:{id:"2",label:{en:"Fearlessly Joyful",id:"Kokoh Gembira"},beans:{Ga:.5,Ba:.5},weight:1.0042987668188115},3:{id:"3",label:{en:"Fearlessly Eager",id:"Kokoh Kelana"},beans:{Ga:.4,To:.3,Ba:.3},weight:.5704003310211334,extra:{en:"Joyful",id:"Gembira"}},4:{id:"4",label:{en:"Sweetly Joyful",id:"Harmoni Gembira"},beans:{Jb:.8,Ba:.2},weight:1.4403222378896787},5:{id:"5",label:{en:"Sweetly Content",id:"Harmoni Ceria"},beans:{Jb:.8,Sn:.2},weight:1.4241413718848943},6:{id:"6",label:{en:"Brightly Delightful",id:"Primadona Riang"},beans:{Fl:.5,Ft:.5},weight:.9961661699008669},7:{id:"7",label:{en:"Brightly Fearless",id:"Primadona Kokoh"},beans:{Ga:.25,Fl:.25,Ft:.5},weight:.691981159860372,extra:{en:"Supportive",id:"Riang"}},8:{id:"8",label:{en:"Eagerly Adoring",id:"Kawan Primadona"},beans:{To:.7,Ft:.3},weight:1.2102400849880628},9:{id:"9",label:{en:"Fearlessly Comforting",id:"Embun Gembira"},beans:{Pa:.5,Ba:.5},weight:.9958359257969888},10:{id:"10",label:{en:"Delightfully Eager",id:"Kawan Kelana"},beans:{To:.2,Fl:.6,Ba:.2},weight:.8486939187124006,extra:{en:"Joyful",id:"Gembira"}},11:{id:"11",label:{en:"Delightfully Fearless",id:"Kawan Kokoh"},beans:{Ga:.25,Fl:.5,Ba:.25},weight:.6979561690052294,extra:{en:"Joyful",id:"Gembira"}},12:{id:"12",label:{en:"Optimistically Energized",id:"Gelora Energi"},beans:{Da:.8,Dr:.2},weight:1.40710305277922},13:{id:"13",label:{en:"Powerfully Thrilling",id:"Ledakan Asa"},beans:{Da:.2,Dr:.8},weight:1.4182413742662474},14:{id:"14",label:{en:"Eagerly Content",id:"Kawan Ceria"},beans:{To:.75,Sn:.25},weight:1.3056830881197081},15:{id:"15",label:{en:"Heartily Content",id:"Embun Ceria"},beans:{Sn:.25,Pa:.75},weight:1.301248724157322},16:{id:"16",label:{en:"Mindfully Joyful",id:"Jejak Gembira"},beans:{Sf:.5,Ba:.5},weight:1.0132771002117114},17:{id:"17",label:{en:"Fearlessly Confident",id:"Kokoh Berani"},beans:{Ga:1},weight:2.2436823604344807},18:{id:"18",label:{en:"Sweetly Nostalgic",id:"Harmoni Nostalgia"},beans:{Jb:1},weight:2.279025645748794},19:{id:"19",label:{en:"Brightly Adoring",id:"Primadona"},beans:{Ft:1},weight:2.276256439967642},20:{id:"20",label:{en:"Wildly Joyful",id:"Rona Gembira"},beans:{Ba:1},weight:2.262126258017183},21:{id:"21",label:{en:"Heartily Comforting",id:"Embun Sejuk"},beans:{Fl:1},weight:2.3155393636565686},22:{id:"22",label:{en:"Delightfully Supportive ",id:"Kawan Riang"},beans:{To:1},weight:2.317230282696218},23:{id:"23",label:{en:"Eagerly Wondering",id:"Kelana Senja"},beans:{Pa:1},weight:2.270878059526289},24:{id:"24",label:{en:"Optimistically Thrilling",id:"Gelora Asa"},beans:{Da:1},weight:2.2321909711986643},25:{id:"25",label:{en:"Powerfully Energized",id:"Ledakan Energi"},beans:{Dr:1},weight:2.248859243246816},26:{id:"26",label:{en:"Mindfully Serene",id:"Jejak Hening"},beans:{Sf:1},weight:2.150398043179222},27:{id:"27",label:{en:"Blissfully Content",id:"Mentari Ceria"},beans:{Sn:1},weight:2.1767220642799856},28:{id:"28",label:{en:"Uniquely Inspiring",id:"Nada Jingga"},beans:{Se:1},weight:2.1648204809668514}};export{J as a,C as b,D as c,E as g};
