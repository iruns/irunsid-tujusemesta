function K(t,n,e){return n+(e-n)*t}function m(t,n,e,o){if(t==e&&t==n)return .5;const y=e-n;let i=(t-n)/y;return o&&(i=u(0,1,i)),i}function u(t,n,e){return Math.max(Math.min(e,n),t)}function l(t){const n={};let e=0;for(const o in t)e+=t[o];if(e)for(const o in t)n[o]=t[o]/e;else{const o=1/Object.keys(t).length;for(const y in t)n[y]=o}return n}function h(t,n,e,o){const y=l(o);let i=0;for(const f in t){n[f]=0;for(const r in e){const s=e[r][f]||0,a=y[r];n[f]+=Math.abs(s-a)**2}const c=1/n[f];n[f]=c,i+=c}if(i!=1/0)for(const f in n){const c=f;n[c]/=i}else{let f=0;for(const c in n)n[c]==1/0&&f++;for(const c in n){const r=c;n[r]!=1/0?n[r]=0:n[r]=1/f}}}export{K as l,h as s,l as t,m as u};