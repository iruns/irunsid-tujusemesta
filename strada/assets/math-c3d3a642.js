function b(t,n,o,e){if(t==o&&t==n)return .5;const a=o-n;let i=(t-n)/a;return e&&(i=l(0,1,i)),i}function l(t,n,o){return Math.max(Math.min(o,n),t)}function K(t,n,o){if(typeof t=="object")for(const e in t){const a=t[e],i={};let f=0;switch(typeof t[e]){case"object":for(const c in n)i[c]=n[c][e];K(a,i,o);break;case"number":for(const c in n)f+=n[c][e]*o[c];t[e]=f;break}}}function u(t){const n={};let o=0;for(const e in t)o+=t[e];if(o)for(const e in t)n[e]=t[e]/o;else{const e=1/Object.keys(t).length;for(const a in t)n[a]=e}return n}function k(t,n,o,e){const a=u(e);let i=0;for(const f in t){n[f]=0;for(const r in o){const y=o[r][f]||0,s=a[r];n[f]+=Math.abs(y-s)**2}const c=1/n[f];n[f]=c,i+=c}if(i!=1/0)for(const f in n){const c=f;n[c]/=i}else{let f=0;for(const c in n)n[c]==1/0&&f++;for(const c in n){const r=c;n[r]!=1/0?n[r]=0:n[r]=1/f}}}export{K as a,k as s,u as t,b as u};