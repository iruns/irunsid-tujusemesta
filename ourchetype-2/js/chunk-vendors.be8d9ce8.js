(self["webpackChunkourchetype"]=self["webpackChunkourchetype"]||[]).push([[998],{1001:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return r}})},9662:function(t,e,n){var r=n(614),i=n(6330),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var r,i,o,s=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),g=n(8052),m=n(3070).f,v=n(7976),y=n(9518),b=n(7674),w=n(5112),_=n(9711),E=n(9909),T=E.enforce,S=E.get,C=c.Int8Array,A=C&&C.prototype,I=c.Uint8ClampedArray,O=I&&I.prototype,x=C&&y(C),k=A&&y(A),D=Object.prototype,N=c.TypeError,R=w("toStringTag"),L=_("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",P=s&&!!b&&"Opera"!==f(c.opera),j=!1,$={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h($,e)||h(F,e)},U=function(t){var e=y(t);if(l(e)){var n=S(e);return n&&h(n,M)?n[M]:U(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h($,e)||h(F,e)},H=function(t){if(B(t))return t;throw N("Target is not a typed array")},G=function(t){if(u(t)&&(!b||v(x,t)))return t;throw N(d(t)+" is not a typed array constructor")},q=function(t,e,n,r){if(a){if(n)for(var i in $){var o=c[i];if(o&&h(o.prototype,t))try{delete o.prototype[t]}catch(s){try{o.prototype[t]=e}catch(u){}}}k[t]&&!n||g(k,t,n?e:P&&A[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(b){if(n)for(r in $)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(o){}if(x[t]&&!n)return;try{return g(x,t,n?e:P&&x[t]||e)}catch(o){}}for(r in $)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in $)i=c[r],o=i&&i.prototype,o?T(o)[M]=i:P=!1;for(r in F)i=c[r],o=i&&i.prototype,o&&(T(o)[M]=i);if((!P||!u(x)||x===Function.prototype)&&(x=function(){throw N("Incorrect invocation")},P))for(r in $)c[r]&&b(c[r],x);if((!P||!k||k===D)&&(k=x.prototype,P))for(r in $)c[r]&&b(c[r].prototype,k);if(P&&y(O)!==k&&b(O,k),a&&!h(k,R))for(r in j=!0,m(k,R,{get:function(){return l(this)?this[L]:void 0}}),$)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:P,TYPED_ARRAY_TAG:j&&L,aTypedArray:H,aTypedArrayConstructor:G,exportTypedArrayMethod:q,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:U,isView:V,isTypedArray:B,TypedArray:x,TypedArrayPrototype:k}},1318:function(t,e,n){var r=n(5656),i=n(1400),o=n(6244),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c),l=i(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},9671:function(t,e,n){var r=n(9974),i=n(8361),o=n(7908),s=n(6244),a=function(t){var e=1==t;return function(n,a,c){var u,l,h=o(n),f=i(h),d=r(a,c),p=s(f);while(p-- >0)if(u=f[p],l=d(u,p,h),l)switch(t){case 0:return u;case 1:return p}return e?-1:void 0}};t.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(t,e,n){"use strict";var r=n(9781),i=n(3157),o=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!s(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},4326:function(t,e,n){var r=n(1702),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),o=n(4326),s=n(5112),a=s("toStringTag"),c=Object,u="Arguments"==o(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),o=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=s.f,u=o.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),o=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),i=n(3070),o=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&o(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},5117:function(t,e,n){"use strict";var r=n(6330),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),i=n(7854);t.exports="process"==r(i.process)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,i,o=n(7854),s=n(8113),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,o=r("".replace),s=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(s);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=o(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,o=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,v=t.stat;if(l=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),s(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.apply,s=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(o):function(){return s.apply(o,arguments)})},9974:function(t,e,n){var r=n(1470),i=n(9662),o=n(4374),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1470:function(t,e,n){var r=n(4326),i=n(1702);t.exports=function(t){if("Function"===r(t))return i(t)}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),i=n(7293),o=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),o=n(4326),s=Object,a=r("".split);t.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a(t,""):s(t)}:s},9587:function(t,e,n){var r=n(614),i=n(111),o=n(7674);t.exports=function(t,e,n){var s,a;return o&&r(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&o(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),o=n(5465),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource},9909:function(t,e,n){var r,i,o,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,v=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var b=h.state||(h.state=new m);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw g(p);return e.facade=t,b.set(t,e),e},i=function(t){return b.get(t)||{}},o=function(t){return b.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw g(p);return e.facade=t,u(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},o=function(t){return l(t,w)}}t.exports={set:r,get:i,has:o,enforce:v,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),o=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===o}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),o=n(7976),s=n(3307),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),i=n(614),o=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,f=Object.defineProperty,d=s&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||a&&t.name!==e)&&(s?f(t,"name",{value:e,configurable:!0}):t.name=e),d&&n&&o(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=l(t);return o(r,"source")||(r.source=p.join("string"==typeof e?e:"")),t};Function.prototype.toString=g((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),i=n(4664),o=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?o?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),o=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return s(!i(o.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),o=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=o(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),o=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=o(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),i=n(9670),o=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),o=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!o(a=r(n,t)))return a;if(i(n=t.valueOf)&&!o(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!o(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),o=n(8006),s=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=s.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),o="__core-js_shared__",s=r[o]||i(o,{});t.exports=s},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:function(t,e,n){var r,i,o,s,a=n(7854),c=n(2104),u=n(9974),l=n(614),h=n(2597),f=n(7293),d=n(490),p=n(206),g=n(317),m=n(8053),v=n(6833),y=n(5268),b=a.setImmediate,w=a.clearImmediate,_=a.process,E=a.Dispatch,T=a.Function,S=a.MessageChannel,C=a.String,A=0,I={},O="onreadystatechange";try{r=a.location}catch(R){}var x=function(t){if(h(I,t)){var e=I[t];delete I[t],e()}},k=function(t){return function(){x(t)}},D=function(t){x(t.data)},N=function(t){a.postMessage(C(t),r.protocol+"//"+r.host)};b&&w||(b=function(t){m(arguments.length,1);var e=l(t)?t:T(t),n=p(arguments,1);return I[++A]=function(){c(e,void 0,n)},i(A),A},w=function(t){delete I[t]},y?i=function(t){_.nextTick(k(t))}:E&&E.now?i=function(t){E.now(k(t))}:S&&!v?(o=new S,s=o.port2,o.port1.onmessage=D,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!f(N)?(i=N,a.addEventListener("message",D,!1)):i=O in g("script")?function(t){d.appendChild(g("script"))[O]=function(){d.removeChild(this),x(t)}}:function(t){setTimeout(k(t),0)}),t.exports={set:b,clear:w}},1400:function(t,e,n){var r=n(9303),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),o=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},4811:function(t,e,n){var r=n(7854),i=n(614),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o))},5112:function(t,e,n){var r=n(7854),i=n(2309),o=n(2597),s=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||s;t.exports=function(t){if(!o(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&o(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},7658:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(t){var e=i(this),n=o(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},541:function(t,e,n){"use strict";var r=n(2109),i=n(7908),o=n(6244),s=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(t){var e=i(this),n=o(e),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in e?e[l]=e[u]:a(e,l)}for(var h=0;h<r;h++)e[h]=arguments[h]}return s(e,n+r)}})},4590:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLastIndex,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLastIndex",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},3408:function(t,e,n){"use strict";var r=n(260),i=n(9671).findLast,o=r.aTypedArray,s=r.exportTypedArrayMethod;s("findLast",(function(t){return i(o(this),t,arguments.length>1?arguments[1]:void 0)}))},1091:function(t,e,n){var r=n(2109),i=n(7854),o=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:i.clearImmediate!==o},{clearImmediate:o})},2801:function(t,e,n){"use strict";var r=n(2109),i=n(7854),o=n(5005),s=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),g=n(1913),m="DOMException",v=o("Error"),y=o(m),b=function(){u(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=v(e);return i.name=m,a(r,"stack",s(1,d(i.stack,1))),l(r,this,b),r},w=b.prototype=y.prototype,_="stack"in v(m),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!T&&!(T.writable&&T.configurable),C=_&&!S&&!E;r({global:!0,constructor:!0,forced:g||C},{DOMException:C?b:y});var A=o(m),I=A.prototype;if(I.constructor!==A)for(var O in g||a(I,"constructor",s(1,A)),f)if(c(f,O)){var x=f[O],k=x.s;c(A,k)||a(A,k,s(6,x.c))}},4633:function(t,e,n){n(1091),n(2986)},2986:function(t,e,n){var r=n(2109),i=n(7854),o=n(261).set;r({global:!0,bind:!0,enumerable:!0,forced:i.setImmediate!==o},{setImmediate:o})},223:function(t,e,n){"use strict";n.d(e,{BH:function(){return b},L:function(){return a},LL:function(){return T},P0:function(){return v},Sg:function(){return w},ZR:function(){return E},aH:function(){return y},eu:function(){return l},hl:function(){return u},m9:function(){return O},vZ:function(){return A}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],o=i+1<t.length,s=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let h=(15&s)<<2|c>>6,f=63&c;a||(f=64,o||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],o=i<t.length,s=o?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==s||null==c||null==l)throw Error();const h=e<<2|s>>4;if(r.push(h),64!==c){const t=s<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){const e=r(t);return o.encodeByteArray(e,!0)},a=function(t){return s(t).replace(/\./g,"")},c=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"object"===typeof indexedDB}function l(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:""}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&c(t[1]);return e&&JSON.parse(e)},g=()=>{try{return f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=g())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},v=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=g())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="FirebaseError";class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=_,Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?S(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new E(r,s,n);return a}}function S(t,e){return t.replace(C,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const C=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],o=e[i];if(I(n)&&I(o)){if(!A(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function I(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){return t&&t._delegate?t._delegate:t}},4275:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(1804),i="firebase",o="9.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,o,"app")},6035:function(t,e,n){"use strict";n.d(e,{ET:function(){return Eu},hJ:function(){return Bc},ad:function(){return Jc}});n(3408),n(4590),n(7658),n(2801);var r,i=n(1804),o=n(7142),s=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function E(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var S=0;T.prototype.s=!1,T.prototype.na=function(){this.s||(this.s=!0,this.M(),0==S)||g(this)},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const C=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(d(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function O(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function k(t){return/^[\s\xa0]*$/.test(t)}var D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return t<e?-1:t>e?1:0}function R(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function L(t){return-1!=R().indexOf(t)}function M(t){return M[" "](t),t}function P(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}M[" "]=f;var j,$=L("Opera"),F=L("Trident")||L("MSIE"),V=L("Edge"),U=V||F,B=L("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),H=-1!=R().toLowerCase().indexOf("webkit")&&!L("Edge");function G(){var t=h.document;return t?t.documentMode:void 0}t:{var q="",K=function(){var t=R();return B?/rv:([^\);]+)(\)|;)/.exec(t):V?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):$?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(K&&(q=K?K[1]:""),F){var z=G();if(null!=z&&z>parseFloat(q)){j=String(z);break t}}j=q}var W,Q={};function X(){return P((function(){let t=0;const e=D(String(j)).split("."),n=D("9").split("."),r=Math.max(e.length,n.length);for(let s=0;0==t&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==i[0].length&&0==o[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==o[1].length?0:parseInt(o[1],10))||N(0==i[2].length,0==o[2].length)||N(i[2],o[2]),i=i[3],o=o[3]}while(0==t)}return 0<=t}))}if(h.document&&F){var Y=G();W=Y||(parseInt(j,10)||void 0)}else W=void 0;var J=W;function Z(t,e){if(O.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(B){t:{try{M(e.nodeName);var i=!0;break t}catch(o){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:tt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Z.X.h.call(this)}}E(Z,O);var tt={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nt=0;function rt(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++nt,this.ba=this.ea=!1}function it(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ot(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function st(t){const e={};for(const n in t)e[n]=t[n];return e}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ct(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<at.length;e++)n=at[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ut(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],o=C(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(it(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ht(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}ut.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=ht(t,e,r,i);return-1<s?(e=t[s],n||(e.ea=!1)):(e=new rt(e,this.src,o,!!r,i),e.ea=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),dt={};function pt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)pt(t,e[o],n,r,i);return null}return n=St(n),t&&t[et]?t.N(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=p(i)?!!i.capture:!!i,a=Et(t);if(a||(t[ft]=a=new ut(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=mt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)x||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(wt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function mt(){function t(n){return e.call(t.src,t.listener,n)}const e=_t;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)vt(t,e[o],n,r,i);return null}return n=St(n),t&&t[et]?t.O(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function yt(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i);else r=p(r)?!!r.capture:!!r,n=St(n),t&&t[et]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ht(o,n,r,i),-1<n&&(it(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ht(e,n,r,i)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[et])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Et(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):it(t)}}}function wt(t){return t in dt?dt[t]:dt[t]="on"+t}function _t(t,e){if(t.ba)t=!0;else{e=new Z(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&bt(t),t=n.call(r,e)}return t}function Et(t){return t=t[ft],t instanceof ut?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function Ct(){T.call(this),this.i=new ut(this),this.P=this,this.I=null}function At(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new O(e,t);else if(e instanceof O)e.target=e.target||t;else{var i=e;e=new O(r,t),ct(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=It(s,r,!0,e)&&i}if(s=e.g=t,i=It(s,r,!0,e)&&i,i=It(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=It(s,r,!1,e)&&i}function It(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,c=s.ha||s.src;s.ea&&lt(t.i,s),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Ct,T),Ct.prototype[et]=!0,Ct.prototype.removeEventListener=function(t,e,n,r){yt(this,t,e,n,r)},Ct.prototype.M=function(){if(Ct.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)it(n[r]);delete e.g[t],e.h--}}this.I=null},Ct.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ot=h.JSON.stringify;function xt(){var t=$t;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kt{constructor(){this.h=this.g=null}add(t,e){const n=Nt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,Nt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Rt),(t=>t.reset()));class Rt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){h.setTimeout((()=>{throw t}),0)}function Mt(t,e){Dt||Pt(),jt||(Dt(),jt=!0),$t.add(t,e)}function Pt(){var t=h.Promise.resolve(void 0);Dt=function(){t.then(Ft)}}var jt=!1,$t=new kt;function Ft(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Nt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function Vt(t,e){Ct.call(this),this.h=t||1,this.g=e||h,this.j=w(this.lb,this),this.l=Date.now()}function Ut(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Bt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Ht(t){t.g=Bt((()=>{t.g=null,t.i&&(t.i=!1,Ht(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}E(Vt,Ct),r=Vt.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),At(this,"tick"),this.ca&&(Ut(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Vt.X.M.call(this),Ut(this),delete this.g};class Gt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ht(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qt(t){T.call(this),this.h=t,this.g={}}E(qt,T);var Kt=[];function zt(t,e,n,r){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var i=0;i<n.length;i++){var o=pt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function Wt(t){ot(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Qt(){this.g=!0}function Xt(t,e,n,r,i,o){t.info((function(){if(t.g)if(o)for(var s="",a=o.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");s=2<=h.length&&"type"==h[1]?s+(l+"=")+u+"&":s+(l+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}function Yt(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}function Jt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+te(t,n)+(r?" "+r:"")}))}function Zt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function te(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return Ot(n)}catch(a){return e}}qt.prototype.M=function(){qt.X.M.call(this),Wt(this)},qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Aa=function(){this.g=!1},Qt.prototype.info=function(){};var ee={},ne=null;function re(){return ne=ne||new Ct}function ie(t){O.call(this,ee.Pa,t)}function oe(t){const e=re();At(e,new ie(e))}function se(t,e){O.call(this,ee.STAT_EVENT,t),this.stat=e}function ae(t){const e=re();At(e,new se(e,t))}function ce(t,e){O.call(this,ee.Qa,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}ee.Pa="serverreachability",E(ie,O),ee.STAT_EVENT="statevent",E(se,O),ee.Qa="timingevent",E(ce,O);var le={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},he={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function fe(){}function de(t){return t.h||(t.h=t.i())}function pe(){}fe.prototype.h=null;var ge,me={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ve(){O.call(this,"d")}function ye(){O.call(this,"c")}function be(){}function we(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new qt(this),this.O=Ee,t=U?125:void 0,this.T=new Vt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}E(ve,O),E(ye,O),E(be,fe),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},ge=new be;var Ee=45e3,Te={},Se={};function Ce(t,e,n){t.K=1,t.v=ze(Be(e)),t.s=n,t.P=!0,Ae(t,null)}function Ae(t,e){t.F=Date.now(),ke(t),t.A=Be(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),t.C=0,n=t.l.H,t.h=new _e,t.g=hr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Gt(w(t.La,t,t.g),t.N)),zt(t.S,t.g,"readystatechange",t.ib),e=t.H?st(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),oe(),Xt(t.j,t.u,t.A,t.m,t.U,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Oe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==Se){4==e&&(t.o=4,ae(14),i=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Te){t.o=4,ae(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Jt(t.j,t.m,r,null),Me(t,r)}Ie(t)&&r!=Se&&r!=Te&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ae(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(e),e.K=!0,ae(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),Re(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Te:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function ke(t){t.V=Date.now()+t.O,De(t,t.O)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(w(t.gb,t),e)}function Ne(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Re(t){0==t.l.G||t.I||sr(t.l,t)}function Le(t){Ne(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ut(t.T),Wt(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||gn(n.h,t)))if(!t.J&&gn(n.h,t)&&3==n.G){try{var r=n.Fa.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;or(n),Wn(n)}nr(n),ae(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ue(w(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else cr(n,11)}else if((t.J||n.g==t)&&or(n),!k(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var o=r.h;o.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(o.j=o.l,o.g=new Set,o.h&&(mn(o,o.h),o.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.za=t,Ke(r.F,r.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=t;if(r.sa=lr(r,r.H?r.ka:null,r.V),s.J){vn(r.h,s);var a=s,c=r.J;c&&a.setTimeout(c),a.B&&(Ne(a),ke(a)),r.g=s}else er(r);0<n.i.length&&Xn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):zn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}oe(4)}catch(u){}}function Pe(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function je(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(d(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=je(t),r=Pe(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}r=we.prototype,r.setTimeout=function(t){this.O=t},r.ib=function(t){t=t.target;const e=this.L;e&&3==Un(t)?e.l():this.La(t)},r.La=function(t){try{if(t==this.g)t:{const l=Un(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>l)&&(3!=l||U||this.g&&(this.h.h||this.g.fa()||Bn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=f?3:2),Ne(this);var n=this.g.aa();this.Y=n;e:if(Ie(this)){var r=Bn(this.g);t="";var i=r.length,o=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),Re(this);var s="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=200==n,Yt(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ae(12),Le(this),Re(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.P?(Oe(this,l,s),U&&this.i&&3==l&&(zt(this.S,this.T,"tick",this.hb),this.T.start())):(Jt(this.j,this.m,s,null),Me(this,s)),4==l&&Le(this),this.i&&!this.I&&(4==l?sr(this.l,this):(this.i=!1,ke(this)))}else 400==n&&0<s.indexOf("Unknown SID")?(this.o=3,ae(12)):(this.o=0,ae(13)),Le(this),Re(this)}}}catch(l){}},r.hb=function(){if(this.g){var t=Un(this.g),e=this.g.fa();this.C<e.length&&(Ne(this),Oe(this,t,e),this.i&&4!=t&&ke(this))}},r.cancel=function(){this.I=!0,Le(this)},r.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Zt(this.j,this.A),2!=this.K&&(oe(),ae(17)),Le(this),this.o=2,Re(this)):De(this,this.V-t)};var Fe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ve(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ue(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ue){this.h=void 0!==e?e:t.h,He(this,t.j),this.s=t.s,this.g=t.g,Ge(this,t.m),this.l=t.l,e=t.i;var n=new nn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qe(this,n),this.o=t.o}else t&&(n=String(t).match(Fe))?(this.h=!!e,He(this,n[1]||"",!0),this.s=We(n[2]||""),this.g=We(n[3]||"",!0),Ge(this,n[4]),this.l=We(n[5]||"",!0),qe(this,n[6]||"",!0),this.o=We(n[7]||"")):(this.h=!!e,this.i=new nn(null,this.h))}function Be(t){return new Ue(t)}function He(t,e,n){t.j=n?We(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qe(t,e,n){e instanceof nn?(t.i=e,un(t.i,t.h)):(n||(e=Qe(e,tn)),t.i=new nn(e,t.h))}function Ke(t,e,n){t.i.set(e,n)}function ze(t){return Ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function We(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qe(e,Ye,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Qe(e,Ye,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Qe(n,"/"==n.charAt(0)?Ze:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qe(n,en)),t.join("")};var Ye=/[#\/\?@]/g,Je=/[#\?:]/g,Ze=/[#\?]/g,tn=/[#\?@]/g,en=/#/g;function nn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rn(t){t.g||(t.g=new Map,t.h=0,t.i&&Ve(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function on(t,e){rn(t),e=cn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sn(t,e){return rn(t),e=cn(t,e),t.g.has(e)}function an(t,e,n){on(t,e),0<n.length&&(t.i=null,t.g.set(cn(t,e),A(n)),t.h+=n.length)}function cn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function un(t,e){e&&!t.j&&(rn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(on(this,e),an(this,n,t))}),t)),t.j=e}r=nn.prototype,r.add=function(t,e){rn(this),this.i=null,t=cn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.W=function(t){rn(this);let e=[];if("string"===typeof t)sn(this,t)&&(e=e.concat(this.g.get(cn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return rn(this),this.i=null,t=cn(this,t),sn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;""!==s[r]&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};var ln=class{constructor(t,e){this.h=t,this.g=e}};function hn(t){this.l=t||fn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function dn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function pn(t){return t.h?1:t.g?t.g.size:0}function gn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function mn(t,e){t.g?t.g.add(e):t.h=e}function vn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function yn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function bn(){}function wn(){this.g=new bn}function _n(t,e,n){const r=n||"";try{$e(t,(function(t,n){let i=t;p(t)&&(i=Ot(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(t,e){const n=new Qt;if(h.Image){const r=new Image;r.onload=_(Tn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_(Tn,n,r,"TestLoadImage: error",!1,e),r.onabort=_(Tn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_(Tn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Tn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(o){}}function Sn(t){this.l=t.ac||null,this.j=t.jb||!1}function Cn(t,e){Ct.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=An,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},bn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},bn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},E(Sn,fe),Sn.prototype.g=function(){return new Cn(this.l,this.j)},Sn.prototype.i=function(t){return function(){return t}}({}),E(Cn,Ct);var An=0;function In(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function On(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xn(t)}function xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Cn.prototype,r.open=function(t,e){if(this.readyState!=An)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,On(this)),this.readyState=An},r.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?On(this):xn(this),3==this.readyState&&In(this)}},r.Va=function(t){this.g&&(this.response=this.responseText=t,On(this))},r.Ua=function(t){this.g&&(this.response=t,On(this))},r.ga=function(){this.g&&On(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Cn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var kn=h.JSON.parse;function Dn(t){Ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nn,this.K=this.L=!1}E(Dn,Ct);var Nn="",Rn=/^https?$/i,Ln=["POST","PUT"];function Mn(t){return F&&X()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Pn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jn(t),Fn(t)}function jn(t){t.D||(t.D=!0,At(t,"complete"),At(t,"error"))}function $n(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Un(t)||2!=t.aa()))if(t.v&&4==Un(t))Bt(t.Ha,0,t);else if(At(t,"readystatechange"),4==Un(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Fe)[1]||null;if(!i&&h.self&&h.self.location){var o=h.self.location.protocol;i=o.substr(0,o.length-1)}r=!Rn.test(i?i.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var s=2<Un(t)?t.g.statusText:""}catch(a){s=""}t.j=s+" ["+t.aa()+"]",jn(t)}}finally{Fn(t)}}}function Fn(t,e){if(t.g){Vn(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||At(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}function Bn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Ir){return null}}function Hn(t){let e="";return ot(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Gn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Hn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ke(t,e,n))}function qn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Kn(t){this.Ca=0,this.i=[],this.j=new Qt,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qn("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qn("baseRetryDelayMs",5e3,t),this.bb=qn("retryDelaySeedMs",1e4,t),this.$a=qn("forwardChannelMaxRetries",2,t),this.ta=qn("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(t&&t.concurrentRequestLimit),this.Fa=new wn,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function zn(t){if(Qn(t),3==t.G){var e=t.U++,n=Be(t.F);Ke(n,"SID",t.I),Ke(n,"RID",e),Ke(n,"TYPE","terminate"),Zn(t,n),e=new we(t,t.j,e,void 0),e.K=2,e.v=ze(Be(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=hr(e.l,null),e.g.da(e.v)),e.F=Date.now(),ke(e)}ur(t)}function Wn(t){t.g&&(rr(t),t.g.cancel(),t.g=null)}function Qn(t){Wn(t),t.u&&(h.clearTimeout(t.u),t.u=null),or(t),t.h.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Xn(t){dn(t.h)||t.m||(t.m=!0,Mt(t.Ja,t),t.C=0)}function Yn(t,e){return!(pn(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=ue(w(t.Ja,t,e),ar(t,t.C)),t.C++,!0))}function Jn(t,e){var n;n=e?e.m:t.U++;const r=Be(t.F);Ke(r,"SID",t.I),Ke(r,"RID",n),Ke(r,"AID",t.T),Zn(t,r),t.o&&t.s&&Gn(r,t.o,t.s),n=new we(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=tr(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),mn(t.h,n),Ce(n,r,e)}function Zn(t,e){t.ia&&ot(t.ia,(function(t,n){Ke(e,n,t)})),t.l&&$e({},(function(t,n){Ke(e,n,t)}))}function tr(t,e,n){n=Math.min(t.i.length,n);var r=t.l?w(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),s=!1;else try{_n(c,t,"req"+n+"_")}catch(o){r&&r(c)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function er(t){t.g||t.u||(t.Z=1,Mt(t.Ia,t),t.A=0)}function nr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=ue(w(t.Ia,t),ar(t,t.A)),t.A++,!0)}function rr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function ir(t){t.g=new we(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Be(t.sa);Ke(e,"RID","rpc"),Ke(e,"SID",t.I),Ke(e,"CI",t.L?"0":"1"),Ke(e,"AID",t.T),Ke(e,"TYPE","xmlhttp"),Zn(t,e),t.o&&t.s&&Gn(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ze(Be(e)),n.s=null,n.P=!0,Ae(n,t)}function or(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function sr(t,e){var n=null;if(t.g==e){or(t),rr(t),t.g=null;var r=2}else{if(!gn(t.h,e))return;n=e.D,vn(t.h,e),r=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=re(),At(r,new ce(r,n)),Xn(t)}else er(t);else if(i=e.o,3==i||0==i&&0<t.pa||!(1==r&&Yn(t,e)||2==r&&nr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cr(t,5);break;case 4:cr(t,10);break;case 3:cr(t,6);break;default:cr(t,2)}}function ar(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function cr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var r=w(t.kb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||He(n,"https"),ze(n)),En(n.toString(),r)}else ae(2);t.G=0,t.l&&t.l.va(e),ur(t),Qn(t)}function ur(t){if(t.G=0,t.la=[],t.l){const e=yn(t.h);0==e.length&&0==t.i.length||(I(t.la,e),I(t.la,t.i),t.h.i.length=0,A(t.i),t.i.length=0),t.l.ua()}}function lr(t,e,n){var r=n instanceof Ue?Be(n):new Ue(n,void 0);if(""!=r.g)e&&(r.g=e+"."+r.g),Ge(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new Ue(null,void 0);r&&He(o,r),e&&(o.g=e),i&&Ge(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.za,n&&e&&Ke(r,n,e),Ke(r,"VER",t.ma),Zn(t,r),r}function hr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Dn(new Sn({jb:!0})):new Dn(t.ra),e.Ka(t.H),e}function fr(){}function dr(){if(F&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function pr(t,e){Ct.call(this),this.g=new Kn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!k(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vr(this)}function gr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mr(){ye.call(this),this.status=1}function vr(t){this.g=t}r=Dn.prototype,r.Ka=function(t){this.L=t},r.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?de(this.u):de(ge),this.g.onreadystatechange=w(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){return void Pn(this,o)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=C(Ln,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Mn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.qa,this)):this.A=Bt(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Pn(this,o)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Fn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fn(this,!0)),Dn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?$n(this):this.fb())},r.fb=function(){$n(this)},r.aa=function(){try{return 2<Un(this)?this.g.status:-1}catch(t){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),kn(e)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Kn.prototype,r.ma=8,r.G=1,r.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new we(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=st(o),ct(o,this.S)):o=this.S),null!==this.o||this.N||(i.H=o,o=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tr(this,i,e),n=Be(this.F),Ke(n,"RID",t),Ke(n,"CVER",22),this.D&&Ke(n,"X-HTTP-Session-Id",this.D),Zn(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(Hn(o)))+"&"+e:this.o&&Gn(n,this.o,o)),mn(this.h,i),this.Ya&&Ke(n,"TYPE","init"),this.O?(Ke(n,"$req",e),Ke(n,"SID","null"),i.Z=!0,Ce(i,n,null)):Ce(i,n,e),this.G=2}}else 3==this.G&&(t?Jn(this,t):0==this.i.length||dn(this.h)||Jn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ue(w(this.eb,this),t)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ae(10),Wn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Wn(this),nr(this),ae(19))},r.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},dr.prototype.g=function(t,e){return new pr(t,e)},E(pr,Ct),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ae(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=lr(t,null,t.V),Xn(t)},pr.prototype.close=function(){zn(this.g)},pr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ot(t),t=n);e.i.push(new ln(e.ab++,t)),3==e.G&&Xn(e)},pr.prototype.M=function(){this.g.l=null,delete this.j,zn(this.g),delete this.g,pr.X.M.call(this)},E(gr,ve),E(mr,ye),E(vr,fr),vr.prototype.xa=function(){At(this.g,"a")},vr.prototype.wa=function(t){At(this.g,new gr(t))},vr.prototype.va=function(t){At(this.g,new mr)},vr.prototype.ua=function(){At(this.g,"b")},dr.prototype.createWebChannel=dr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,he.COMPLETE="complete",pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",Ct.prototype.listen=Ct.prototype.N,Dn.prototype.listenOnce=Dn.prototype.O,Dn.prototype.getLastError=Dn.prototype.Oa,Dn.prototype.getLastErrorCode=Dn.prototype.Ea,Dn.prototype.getStatus=Dn.prototype.aa,Dn.prototype.getResponseJson=Dn.prototype.Sa,Dn.prototype.getResponseText=Dn.prototype.fa,Dn.prototype.send=Dn.prototype.da,Dn.prototype.setWithCredentials=Dn.prototype.Ka;var yr=u.createWebChannelTransport=function(){return new dr},br=u.getStatEventTarget=function(){return re()},wr=u.ErrorCode=le,_r=u.EventType=he,Er=u.Event=ee,Tr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sr=u.FetchXmlHttpFactory=Sn,Cr=u.WebChannel=pe,Ar=u.XhrIo=Dn;const Ir="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Or.UNAUTHENTICATED=new Or(null),Or.GOOGLE_CREDENTIALS=new Or("google-credentials-uid"),Or.FIRST_PARTY=new Or("first-party-uid"),Or.MOCK_USER=new Or("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let xr="9.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new s.Yd("@firebase/firestore");function Dr(){return kr.logLevel}function Nr(t,...e){if(kr.logLevel<=s["in"].DEBUG){const n=e.map(Mr);kr.debug(`Firestore (${xr}): ${t}`,...n)}}function Rr(t,...e){if(kr.logLevel<=s["in"].ERROR){const n=e.map(Mr);kr.error(`Firestore (${xr}): ${t}`,...n)}}function Lr(t,...e){if(kr.logLevel<=s["in"].WARN){const n=e.map(Mr);kr.warn(`Firestore (${xr}): ${t}`,...n)}}function Mr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t="Unexpected state"){const e=`FIRESTORE (${xr}) INTERNAL ASSERTION FAILED: `+t;throw Rr(e),new Error(e)}function jr(t,e){t||Pr()}function $r(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Hr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Or.UNAUTHENTICATED)))}shutdown(){}}class Gr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class qr{constructor(t){this.t=t,this.currentUser=Or.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ur,t.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},s=t=>{Nr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Nr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ur)}}),0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Nr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(jr("string"==typeof e.accessToken),new Br(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return jr(null===t||"string"==typeof t),new Or(t)}}class Kr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r,this.type="FirstParty",this.user=Or.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(jr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class zr{constructor(t,e,n,r){this.h=t,this.l=e,this.m=n,this.g=r}getToken(){return Promise.resolve(new Kr(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Or.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Nr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Nr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Nr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?r(t):Nr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(jr("string"==typeof t.token),this.A=t.token,new Wr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Xr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function Jr(t,e){return t<e?-1:t>e?1:0}function Zr(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Vr(Fr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ti.fromMillis(Date.now())}static fromDate(t){return ti.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ti(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Jr(this.nanoseconds,t.nanoseconds):Jr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ei(t)}static min(){return new ei(new ti(0,0))}static max(){return new ei(new ti(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,n){void 0===e?e=0:e>t.length&&Pr(),void 0===n?n=t.length-e:n>t.length-e&&Pr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ni.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ni?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ri extends ni{construct(t,e,n){return new ri(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ri(e)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class oi extends ni{construct(t,e,n){return new oi(t,e,n)}static isValidIdentifier(t){return ii.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),oi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new oi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Vr(Fr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Vr(Fr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Vr(Fr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(o=!o,r++):"."!==e||o?(n+=e,r++):(i(),r++)}if(i(),o)throw new Vr(Fr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new oi(e)}static emptyPath(){return new oi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t){this.path=t}static fromPath(t){return new si(ri.fromString(t))}static fromName(t){return new si(ri.fromString(t).popFirst(5))}static empty(){return new si(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ri.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ri.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new si(new ri(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function ci(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ei.fromTimestamp(1e9===r?new ti(n+1,0):new ti(n,r));return new li(i,si.empty(),e)}function ui(t){return new li(t.readTime,t.key,-1)}class li{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new li(ei.min(),si.empty(),-1)}static max(){return new li(ei.max(),si.empty(),-1)}}function hi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=si.comparator(t.documentKey,e.documentKey),0!==n?n:Jr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class di{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==Fr.FAILED_PRECONDITION||t.message!==fi)throw t;Nr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Pr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new gi(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof gi?e:gi.resolve(e)}catch(t){return gi.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):gi.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):gi.reject(e)}static resolve(t){return new gi(((e,n)=>{e(t)}))}static reject(t){return new gi(((e,n)=>{n(t)}))}static waitFor(t){return new gi(((e,n)=>{let r=0,i=0,o=!1;t.forEach((t=>{++r,t.next((()=>{++i,o&&i===r&&e()}),(t=>n(t)))})),o=!0,i===r&&e()}))}static or(t){let e=gi.resolve(!1);for(const n of t)e=e.next((t=>t?gi.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new gi(((n,r)=>{const i=t.length,o=new Array(i);let s=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{o[c]=t,++s,s===i&&n(o)}),(t=>r(t)))}}))}static doWhile(t,e){return new gi(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vi.at=-1;class _i{constructor(t,e){this.comparator=t,this.root=e||Ti.EMPTY}insert(t,e){return new _i(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ti.BLACK,null,null))}remove(t){return new _i(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ti.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ei(this.root,t,this.comparator,!0)}}class Ei{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ti{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ti.RED,this.left=null!=r?r:Ti.EMPTY,this.right=null!=i?i:Ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ti(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ti.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ti.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Pr();if(this.right.isRed())throw Pr();const t=this.left.check();if(t!==this.right.check())throw Pr();return t+(this.isRed()?0:1)}}Ti.EMPTY=null,Ti.RED=!0,Ti.BLACK=!1,Ti.EMPTY=new class{constructor(){this.size=0}get key(){throw Pr()}get value(){throw Pr()}get color(){throw Pr()}get left(){throw Pr()}get right(){throw Pr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ti(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(t){this.comparator=t,this.data=new _i(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ci(this.data.getIterator())}getIteratorFrom(t){return new Ci(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Si))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Si(this.comparator);return e.data=t,e}}class Ci{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t){this.fields=t,t.sort(oi.comparator)}static empty(){return new Ai([])}unionWith(t){let e=new Si(oi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ai(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ii(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ii(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Jr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ii.EMPTY_BYTE_STRING=new Ii("");const Oi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(jr(!!t),"string"==typeof t){let e=0;const n=Oi.exec(t);if(jr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ki(t.seconds),nanos:ki(t.nanos)}}function ki(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Di(t){return"string"==typeof t?Ii.fromBase64String(t):Ii.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ri(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new ti(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,e,n,r,i,o,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class Mi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Mi&&t.projectId===this.projectId&&t.database===this.database}}function Pi(t){return null==t}function ji(t){return 0===t&&1/t==-1/0}function $i(t){return"number"==typeof t&&Number.isInteger(t)&&!ji(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ni(t)?4:Yi(t)?9007199254740991:10:Pr()}function Ui(t,e){if(t===e)return!0;const n=Vi(t);if(n!==Vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=xi(t.timestampValue),r=xi(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Di(t.bytesValue).isEqual(Di(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ki(t.geoPointValue.latitude)===ki(e.geoPointValue.latitude)&&ki(t.geoPointValue.longitude)===ki(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ki(t.integerValue)===ki(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ki(t.doubleValue),r=ki(e.doubleValue);return n===r?ji(n)===ji(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],Ui);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(yi(n)!==yi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ui(n[i],r[i])))return!1;return!0}(t,e);default:return Pr()}}function Bi(t,e){return void 0!==(t.values||[]).find((t=>Ui(t,e)))}function Hi(t,e){if(t===e)return 0;const n=Vi(t),r=Vi(e);if(n!==r)return Jr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Jr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ki(t.integerValue||t.doubleValue),r=ki(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Gi(t.timestampValue,e.timestampValue);case 4:return Gi(Ri(t),Ri(e));case 5:return Jr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Di(t),r=Di(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=Jr(n[i],r[i]);if(0!==t)return t}return Jr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Jr(ki(t.latitude),ki(e.latitude));return 0!==n?n:Jr(ki(t.longitude),ki(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Hi(n[i],r[i]);if(t)return t}return Jr(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Fi.mapValue&&e===Fi.mapValue)return 0;if(t===Fi.mapValue)return 1;if(e===Fi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i);r.sort(),o.sort();for(let s=0;s<r.length&&s<o.length;++s){const t=Jr(r[s],o[s]);if(0!==t)return t;const e=Hi(n[r[s]],i[o[s]]);if(0!==e)return e}return Jr(r.length,o.length)}(t.mapValue,e.mapValue);default:throw Pr()}}function Gi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Jr(t,e);const n=xi(t),r=xi(e),i=Jr(n.seconds,r.seconds);return 0!==i?i:Jr(n.nanos,r.nanos)}function qi(t){return Ki(t)}function Ki(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=xi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Di(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,si.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ki(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ki(t.fields[i])}`;return n+"}"}(t.mapValue):Pr();var e,n}function zi(t){return!!t&&"integerValue"in t}function Wi(t){return!!t&&"arrayValue"in t}function Qi(t){return!!t&&"mapValue"in t}function Xi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Xi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Yi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ji{constructor(t){this.value=t}static empty(){return new Ji({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Qi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xi(e)}setAll(t){let e=oi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Xi(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Qi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ui(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Qi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){bi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ji(Xi(this.value))}}function Zi(t){const e=[];return bi(t.fields,((t,n)=>{const r=new oi([t]);if(Qi(n)){const t=Zi(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ai(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class to{constructor(t,e,n,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new to(t,0,ei.min(),ei.min(),Ji.empty(),0)}static newFoundDocument(t,e,n){return new to(t,1,e,ei.min(),n,0)}static newNoDocument(t,e){return new to(t,2,e,ei.min(),Ji.empty(),0)}static newUnknownDocument(t,e){return new to(t,3,e,ei.min(),Ji.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ji.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ji.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof to&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new to(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t,e=null,n=[],r=[],i=null,o=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.ht=null}}function no(t,e=null,n=[],r=[],i=null,o=null,s=null){return new eo(t,e,n,r,i,o,s)}function ro(t){const e=$r(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+qi(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>qi(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>qi(t))).join(",")),e.ht=t}return e.ht}function io(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${qi(e.value)}`;var e})).join(", ")}]`),Pi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>qi(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>qi(t))).join(",")),`Target(${e})`}function oo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!yo(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ui(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wo(t.startAt,e.startAt)&&wo(t.endAt,e.endAt)}class so extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new ao(t,e,n):"array-contains"===e?new ho(t,n):"in"===e?new fo(t,n):"not-in"===e?new po(t,n):"array-contains-any"===e?new go(t,n):new so(t,e,n)}static lt(t,e,n){return"in"===e?new co(t,n):new uo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Hi(e,this.value)):null!==e&&Vi(this.value)===Vi(e)&&this.ft(Hi(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Pr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ao extends so{constructor(t,e,n){super(t,e,n),this.key=si.fromName(n.referenceValue)}matches(t){const e=si.comparator(t.key,this.key);return this.ft(e)}}class co extends so{constructor(t,e){super(t,"in",e),this.keys=lo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class uo extends so{constructor(t,e){super(t,"not-in",e),this.keys=lo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function lo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>si.fromName(t.referenceValue)))}class ho extends so{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Wi(e)&&Bi(e.arrayValue,this.value)}}class fo extends so{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Bi(this.value.arrayValue,e)}}class po extends so{constructor(t,e){super(t,"not-in",e)}matches(t){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Bi(this.value.arrayValue,e)}}class go extends so{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Wi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Bi(this.value.arrayValue,t)))}}class mo{constructor(t,e){this.position=t,this.inclusive=e}}class vo{constructor(t,e="asc"){this.field=t,this.dir=e}}function yo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function bo(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(r=o.field.isKeyField()?si.comparator(si.fromName(s.referenceValue),n.key):Hi(s,n.data.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return r}function wo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ui(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,e=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function Eo(t,e,n,r,i,o,s,a){return new _o(t,e,n,r,i,o,s,a)}function To(t){return new _o(t)}function So(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Co(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ao(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Io(t){return null!==t.collectionGroup}function Oo(t){const e=$r(t);if(null===e._t){e._t=[];const t=Ao(e),n=Co(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new vo(t)),e._t.push(new vo(oi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new vo(oi.keyField(),t))}}}return e._t}function xo(t){const e=$r(t);if(!e.wt)if("F"===e.limitType)e.wt=no(e.path,e.collectionGroup,Oo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Oo(e)){const e="desc"===i.dir?"asc":"desc";t.push(new vo(i.field,e))}const n=e.endAt?new mo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new mo(e.startAt.position,e.startAt.inclusive):null;e.wt=no(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.wt}function ko(t,e,n){return new _o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Do(t,e){return oo(xo(t),xo(e))&&t.limitType===e.limitType}function No(t){return`${ro(xo(t))}|lt:${t.limitType}`}function Ro(t){return`Query(target=${io(xo(t))}; limitType=${t.limitType})`}function Lo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):si.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=bo(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Oo(t),e))&&!(t.endAt&&!function(t,e,n){const r=bo(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Oo(t),e))}(t,e)}function Mo(t){return(e,n)=>{let r=!1;for(const i of Oo(t)){const t=Po(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Po(t,e,n){const r=t.field.isKeyField()?si.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Hi(r,i):Pr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Pr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(e)?"-0":e}}function $o(t){return{integerValue:""+t}}function Fo(t,e){return $i(e)?$o(e):jo(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this._=void 0}}function Uo(t,e,n){return t instanceof Go?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof qo?Ko(t,e):t instanceof zo?Wo(t,e):function(t,e){const n=Ho(t,e),r=Xo(n)+Xo(t.yt);return zi(n)&&zi(t.yt)?$o(r):jo(t.It,r)}(t,e)}function Bo(t,e,n){return t instanceof qo?Ko(t,e):t instanceof zo?Wo(t,e):n}function Ho(t,e){return t instanceof Qo?zi(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Go extends Vo{}class qo extends Vo{constructor(t){super(),this.elements=t}}function Ko(t,e){const n=Yo(e);for(const r of t.elements)n.some((t=>Ui(t,r)))||n.push(r);return{arrayValue:{values:n}}}class zo extends Vo{constructor(t){super(),this.elements=t}}function Wo(t,e){let n=Yo(e);for(const r of t.elements)n=n.filter((t=>!Ui(t,r)));return{arrayValue:{values:n}}}class Qo extends Vo{constructor(t,e){super(),this.It=t,this.yt=e}}function Xo(t){return ki(t.integerValue||t.doubleValue)}function Yo(t){return Wi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof qo&&e instanceof qo||t instanceof zo&&e instanceof zo?Zr(t.elements,e.elements,Ui):t instanceof Qo&&e instanceof Qo?Ui(t.yt,e.yt):t instanceof Go&&e instanceof Go}(t.transform,e.transform)}class Zo{constructor(t,e){this.version=t,this.transformResults=e}}class ts{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ts}static exists(t){return new ts(void 0,t)}static updateTime(t){return new ts(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function es(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ns{}function rs(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ds(t.key,ts.none()):new cs(t.key,t.data,ts.none());{const n=t.data,r=Ji.empty();let i=new Si(oi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new us(t.key,r,new Ai(i.toArray()),ts.none())}}function is(t,e,n){t instanceof cs?function(t,e,n){const r=t.value.clone(),i=hs(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof us?function(t,e,n){if(!es(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=hs(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ls(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function os(t,e,n,r){return t instanceof cs?function(t,e,n,r){if(!es(t.precondition,e))return n;const i=t.value.clone(),o=fs(t.fieldTransforms,r,e);return i.setAll(o),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof us?function(t,e,n,r){if(!es(t.precondition,e))return n;const i=fs(t.fieldTransforms,r,e),o=e.data;return o.setAll(ls(t)),o.setAll(i),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return es(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ss(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ho(r.transform,t||null);null!=i&&(null===n&&(n=Ji.empty()),n.set(r.field,i))}return n||null}function as(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Zr(t,e,((t,e)=>Jo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cs extends ns{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class us extends ns{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ls(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function hs(t,e,n){const r=new Map;jr(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Bo(s,a,n[i]))}return r}function fs(t,e,n){const r=new Map;for(const i of t){const t=i.transform,o=n.data.field(i.field);r.set(i.field,Uo(t,o,e))}return r}class ds extends ns{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ps extends ns{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gs,ms;function vs(t){switch(t){default:return Pr();case Fr.CANCELLED:case Fr.UNKNOWN:case Fr.DEADLINE_EXCEEDED:case Fr.RESOURCE_EXHAUSTED:case Fr.INTERNAL:case Fr.UNAVAILABLE:case Fr.UNAUTHENTICATED:return!1;case Fr.INVALID_ARGUMENT:case Fr.NOT_FOUND:case Fr.ALREADY_EXISTS:case Fr.PERMISSION_DENIED:case Fr.FAILED_PRECONDITION:case Fr.ABORTED:case Fr.OUT_OF_RANGE:case Fr.UNIMPLEMENTED:case Fr.DATA_LOSS:return!0}}function ys(t){if(void 0===t)return Rr("GRPC error has no .code"),Fr.UNKNOWN;switch(t){case gs.OK:return Fr.OK;case gs.CANCELLED:return Fr.CANCELLED;case gs.UNKNOWN:return Fr.UNKNOWN;case gs.DEADLINE_EXCEEDED:return Fr.DEADLINE_EXCEEDED;case gs.RESOURCE_EXHAUSTED:return Fr.RESOURCE_EXHAUSTED;case gs.INTERNAL:return Fr.INTERNAL;case gs.UNAVAILABLE:return Fr.UNAVAILABLE;case gs.UNAUTHENTICATED:return Fr.UNAUTHENTICATED;case gs.INVALID_ARGUMENT:return Fr.INVALID_ARGUMENT;case gs.NOT_FOUND:return Fr.NOT_FOUND;case gs.ALREADY_EXISTS:return Fr.ALREADY_EXISTS;case gs.PERMISSION_DENIED:return Fr.PERMISSION_DENIED;case gs.FAILED_PRECONDITION:return Fr.FAILED_PRECONDITION;case gs.ABORTED:return Fr.ABORTED;case gs.OUT_OF_RANGE:return Fr.OUT_OF_RANGE;case gs.UNIMPLEMENTED:return Fr.UNIMPLEMENTED;case gs.DATA_LOSS:return Fr.DATA_LOSS;default:return Pr()}}(ms=gs||(gs={}))[ms.OK=0]="OK",ms[ms.CANCELLED=1]="CANCELLED",ms[ms.UNKNOWN=2]="UNKNOWN",ms[ms.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ms[ms.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ms[ms.NOT_FOUND=5]="NOT_FOUND",ms[ms.ALREADY_EXISTS=6]="ALREADY_EXISTS",ms[ms.PERMISSION_DENIED=7]="PERMISSION_DENIED",ms[ms.UNAUTHENTICATED=16]="UNAUTHENTICATED",ms[ms.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ms[ms.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ms[ms.ABORTED=10]="ABORTED",ms[ms.OUT_OF_RANGE=11]="OUT_OF_RANGE",ms[ms.UNIMPLEMENTED=12]="UNIMPLEMENTED",ms[ms.INTERNAL=13]="INTERNAL",ms[ms.UNAVAILABLE=14]="UNAVAILABLE",ms[ms.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){bi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return wi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new _i(si.comparator);function _s(){return ws}const Es=new _i(si.comparator);function Ts(...t){let e=Es;for(const n of t)e=e.insert(n.key,n);return e}function Ss(t){let e=Es;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Cs(){return Is()}function As(){return Is()}function Is(){return new bs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Os=new _i(si.comparator),xs=new Si(si.comparator);function ks(...t){let e=xs;for(const n of t)e=e.add(n);return e}const Ds=new Si(Jr);function Ns(){return Ds}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();class Rs{constructor(t,e){this.databaseId=t,this.gt=e}}function Ls(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ms(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Ps(t,e){return Ls(t,e.toTimestamp())}function js(t){return jr(!!t),ei.fromTimestamp(function(t){const e=xi(t);return new ti(e.seconds,e.nanos)}(t))}function $s(t,e){return function(t){return new ri(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Fs(t){const e=ri.fromString(t);return jr(Zs(e)),e}function Vs(t,e){return $s(t.databaseId,e.path)}function Us(t){const e=Fs(t);return 4===e.length?ri.emptyPath():Hs(e)}function Bs(t){return new ri(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hs(t){return jr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Gs(t,e,n){return{name:Vs(t,e),fields:n.value.mapValue.fields}}function qs(t,e){let n;if(e instanceof cs)n={update:Gs(t,e.key,e.value)};else if(e instanceof ds)n={delete:Vs(t,e.key)};else if(e instanceof us)n={update:Gs(t,e.key,e.data),updateMask:Js(e.fieldMask)};else{if(!(e instanceof ps))return Pr();n={verify:Vs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Go)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof qo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Qo)return{fieldPath:e.field.canonicalString(),increment:n.yt};throw Pr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ps(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Pr()}(t,e.precondition)),n}function Ks(t,e){return t&&t.length>0?(jr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?js(t.updateTime):js(e);return n.isEqual(ei.min())&&(n=js(e)),new Zo(n,t.transformResults||[])}(t,e)))):[]}function zs(t){let e=Us(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){jr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let o=[];n.where&&(o=Ws(n.where));let s=[];n.orderBy&&(s=n.orderBy.map((t=>function(t){return new vo(Qs(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Pi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new mo(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new mo(n,e)}(n.endAt)),Eo(e,i,s,o,a,"F",c,u)}function Ws(t){return t?void 0!==t.unaryFilter?[Ys(t)]:void 0!==t.fieldFilter?[Xs(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ws(t))).reduce(((t,e)=>t.concat(e))):Pr():[]}function Qs(t){return oi.fromServerFormat(t.fieldPath)}function Xs(t){return so.create(Qs(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Pr()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ys(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qs(t.unaryFilter.field);return so.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qs(t.unaryFilter.field);return so.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qs(t.unaryFilter.field);return so.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Qs(t.unaryFilter.field);return so.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Pr()}}function Js(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Zs(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ea=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],na=ea;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ra{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&is(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=os(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=os(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=As();return this.mutations.forEach((r=>{const i=t.get(r.key),o=i.overlayedDocument;let s=this.applyToLocalView(o,i.mutatedFields);s=e.has(r.key)?null:s;const a=rs(o,s);null!==a&&n.set(r.key,a),o.isValidDocument()||o.convertToNoDocument(ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ks())}isEqual(t){return this.batchId===t.batchId&&Zr(this.mutations,t.mutations,((t,e)=>as(t,e)))&&Zr(this.baseMutations,t.baseMutations,((t,e)=>as(t,e)))}}class ia{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){jr(t.mutations.length===n.length);let r=Os;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new ia(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this.re=t}}function aa(t){const e=zs({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ko(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(ki(t.integerValue));else if("doubleValue"in t){const n=ki(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),ji(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Di(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?Yi(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Pr()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const r of Object.keys(n))this._e(r,e),this.ae(n[r],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const r of n)this.ae(r,e)}ge(t,e){this.le(e,37),si.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}ca.Te=new ca;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ua{constructor(){this.Ye=new la}addToCollectionParentIndex(t,e){return this.Ye.add(e),gi.resolve()}getCollectionParents(t,e){return gi.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return gi.resolve()}deleteFieldIndex(t,e){return gi.resolve()}getDocumentsMatchingTarget(t,e){return gi.resolve(null)}getIndexType(t,e){return gi.resolve(0)}getFieldIndexes(t,e){return gi.resolve([])}getNextCollectionGroupToUpdate(t){return gi.resolve(null)}getMinOffset(t,e){return gi.resolve(li.min())}getMinOffsetFromCollectionGroup(t,e){return gi.resolve(li.min())}updateCollectionGroup(t,e,n){return gi.resolve()}updateIndexEntries(t,e){return gi.resolve()}}class la{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Si(ri.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Si(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class ha{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ha(t,ha.DEFAULT_COLLECTION_PERCENTILE,ha.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ha.DEFAULT_COLLECTION_PERCENTILE=10,ha.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ha.DEFAULT=new ha(41943040,ha.DEFAULT_COLLECTION_PERCENTILE,ha.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ha.DISABLED=new ha(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fa{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new fa(0)}static vn(){return new fa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(){this.changes=new bs((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,to.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?gi.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&os(n.mutation,t,Ai.empty(),ti.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ks()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ks()){const r=Cs();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ts();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Cs();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ks())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=_s();const o=Is(),s=Is();return e.forEach(((t,e)=>{const s=n.get(e.key);r.has(e.key)&&(void 0===s||s.mutation instanceof us)?i=i.insert(e.key,e):void 0!==s&&(o.set(e.key,s.mutation.getFieldMask()),os(s.mutation,e,s.mutation.getFieldMask(),ti.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>o.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new pa(e,null!==(n=o.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=Is();let r=new _i(((t,e)=>t-e)),i=ks();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const o=e.get(t);if(null===o)return;let s=n.get(t)||Ai.empty();s=i.applyToLocalView(o,s),n.set(t,s);const a=(r.get(i.batchId)||ks()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const o=[],s=r.getReverseIterator();for(;s.hasNext();){const r=s.getNext(),a=r.key,c=r.value,u=As();c.forEach((t=>{if(!i.has(t)){const r=rs(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),o.push(this.documentOverlayCache.saveOverlays(t,a,u))}return gi.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return si.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Io(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):gi.resolve(Cs());let s=-1,a=i;return o.next((e=>gi.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),i.get(e)?gi.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ks()))).next((t=>({batchId:s,changes:Ss(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new si(e)).next((t=>{let e=Ts();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Ts();return this.indexManager.getCollectionParents(t,r).next((o=>gi.forEach(o,(o=>{const s=function(t,e){return new _o(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,s,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,to.newInvalidDocument(n)))}));let n=Ts();return r.forEach(((r,i)=>{const o=t.get(r);void 0!==o&&os(o.mutation,i,Ai.empty(),ti.now()),Lo(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):gi.resolve(to.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return gi.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:js(n.createTime)}),gi.resolve()}getNamedQuery(t,e){return gi.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:aa(t.bundledQuery),readTime:js(t.readTime)}}(e)),gi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.overlays=new _i(si.comparator),this.es=new Map}getOverlay(t,e){return gi.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Cs();return gi.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ue(t,e,r)})),gi.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),gi.resolve()}getOverlaysForCollection(t,e,n){const r=Cs(),i=e.length+1,o=new si(e.child("")),s=this.overlays.getIteratorFrom(o);for(;s.hasNext();){const t=s.getNext().value,o=t.getKey();if(!e.isPrefixOf(o.path))break;o.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return gi.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new _i(((t,e)=>t-e));const o=this.overlays.getIterator();for(;o.hasNext();){const t=o.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Cs(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=Cs(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=r)break;return gi.resolve(s)}ue(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new oa(e,n));let i=this.es.get(e);void 0===i&&(i=ks(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.ns=new Si(ba.ss),this.rs=new Si(ba.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new ba(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new ba(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new si(new ri([])),n=new ba(e,t),r=new ba(e,t+1),i=[];return this.rs.forEachInRange([n,r],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new si(new ri([])),n=new ba(e,t),r=new ba(e,t+1);let i=ks();return this.rs.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new ba(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ba{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return si.comparator(t.key,e.key)||Jr(t._s,e._s)}static os(t,e){return Jr(t._s,e._s)||si.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Si(ba.ss)}checkEmpty(t){return gi.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ra(i,e,n,r);this.mutationQueue.push(o);for(const s of r)this.gs=this.gs.add(new ba(s.key,i)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return gi.resolve(o)}lookupMutationBatch(t,e){return gi.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ps(n),i=r<0?0:r;return gi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return gi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return gi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ba(e,0),r=new ba(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(t=>{const e=this.ys(t._s);i.push(e)})),gi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Si(Jr);return e.forEach((t=>{const e=new ba(t,0),r=new ba(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,r],(t=>{n=n.add(t._s)}))})),gi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;si.isDocumentKey(i)||(i=i.child(""));const o=new ba(new si(i),0);let s=new Si(Jr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(s=s.add(t._s)),!0)}),o),gi.resolve(this.Is(s))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){jr(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return gi.forEach(e.mutations,(r=>{const i=new ba(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new ba(e,0),r=this.gs.firstAfterOrEqual(n);return gi.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,gi.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t){this.Es=t,this.docs=new _i(si.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,o=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return gi.resolve(n?n.document.mutableCopy():to.newInvalidDocument(e))}getEntries(t,e){let n=_s();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():to.newInvalidDocument(t))})),gi.resolve(n)}getAllFromCollection(t,e,n){let r=_s();const i=new si(e.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:t,value:{document:i}}=o.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||hi(ui(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return gi.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Pr()}As(t,e){return gi.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ea(this)}getSize(t){return gi.resolve(this.size)}}class Ea extends da{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(n)})),gi.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t){this.persistence=t,this.Rs=new bs((t=>ro(t)),oo),this.lastRemoteSnapshotVersion=ei.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ya,this.targetCount=0,this.vs=fa.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),gi.resolve()}getLastRemoteSnapshotVersion(t){return gi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return gi.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),gi.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),gi.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new fa(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,gi.resolve()}updateTargetData(t,e){return this.Dn(e),gi.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,gi.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Rs.forEach(((o,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,s.targetId)),r++)})),gi.waitFor(i).next((()=>r))}getTargetCount(t){return gi.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return gi.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),gi.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),gi.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),gi.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return gi.resolve(n)}containsKey(t,e){return gi.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new vi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Ta(this),this.indexManager=new ua,this.remoteDocumentCache=function(t){return new _a(t)}((t=>this.referenceDelegate.xs(t))),this.It=new sa(e),this.Ns=new ma(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new va,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new wa(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Nr("MemoryPersistence","Starting transaction:",t);const r=new Ca(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((t=>this.referenceDelegate.Os(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ms(t,e){return gi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Ca extends di{constructor(t){super(),this.currentSequenceNumber=t}}class Aa{constructor(t){this.persistence=t,this.Fs=new ya,this.$s=null}static Bs(t){return new Aa(t)}get Ls(){if(this.$s)return this.$s;throw Pr()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),gi.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),gi.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),gi.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gi.forEach(this.Ls,(n=>{const r=si.fromPath(n);return this.Us(t,r).next((t=>{t||e.removeEntry(r,ei.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return gi.or([()=>gi.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ia{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=r}static Ci(t,e){let n=ks(),r=ks();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ia(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.ki(t,e).next((i=>i||this.Oi(t,e,r,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(So(e))return gi.resolve(null);let n=xo(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=ko(e,null,"F"),n=xo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=ks(...r);return this.Ni.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const o=this.Fi(e,r);return this.$i(e,o,i,n.readTime)?this.ki(t,ko(e,null,"F")):this.Bi(t,o,e,n)}))))})))))}Oi(t,e,n,r){return So(e)||r.isEqual(ei.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((i=>{const o=this.Fi(e,i);return this.$i(e,o,n,r)?this.Mi(t,e):(Dr()<=s["in"].DEBUG&&Nr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ro(e)),this.Bi(t,o,e,ci(r,-1)))}))}Fi(t,e){let n=new Si(Mo(t));return e.forEach(((e,r)=>{Lo(t,r)&&(n=n.add(r))})),n}$i(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(t,e){return Dr()<=s["in"].DEBUG&&Nr("QueryEngine","Using full collection scan to execute query:",Ro(e)),this.Ni.getDocumentsMatchingQuery(t,e,li.min())}Bi(t,e,n,r){return this.Ni.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,e,n,r){this.persistence=t,this.Li=e,this.It=r,this.Ui=new _i(Jr),this.qi=new bs((t=>ro(t)),oo),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ga(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function ka(t,e,n,r){return new xa(t,e,n,r)}async function Da(t,e){const n=$r(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],o=[];let s=ks();for(const t of r){i.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:o})))}))}))}function Na(t,e){const n=$r(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,o=i.keys();let s=gi.resolve();return o.forEach((t=>{s=s.next((()=>r.getEntry(e,t))).next((e=>{const o=n.docVersions.get(t);jr(null!==o),e.version.compareTo(o)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ks();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ra(t){const e=$r(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function La(t,e){const n=$r(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Ma{constructor(){this.activeTargetIds=Ns()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Pa{constructor(){this.Lr=new Ma,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Ma,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Nr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Nr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,r,i){const o=this.ho(t,e);Nr("RestConnection","Sending: ",o,n);const s={};return this.lo(s,r,i),this.fo(t,o,s,n).then((t=>(Nr("RestConnection","Received: ",t),t)),(e=>{throw Lr("RestConnection",`${t} failed with error: `,e,"url: ",o,"request:",n),e}))}_o(t,e,n,r,i,o){return this.ao(t,e,n,r,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+xr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Fa[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,r){return new Promise(((i,o)=>{const s=new Ar;s.setWithCredentials(!0),s.listenOnce(_r.COMPLETE,(()=>{var e;try{switch(s.getLastErrorCode()){case wr.NO_ERROR:const n=s.getResponseJson();Nr("Connection","XHR received:",JSON.stringify(n)),i(n);break;case wr.TIMEOUT:Nr("Connection",'RPC "'+t+'" timed out'),o(new Vr(Fr.DEADLINE_EXCEEDED,"Request time out"));break;case wr.HTTP_ERROR:const r=s.getStatus();if(Nr("Connection",'RPC "'+t+'" failed with status:',r,"response text:",s.getResponseText()),r>0){let t=s.getResponseJson();Array.isArray(t)&&(t=t[0]);const n=null===(e=t)||void 0===e?void 0:e.error;if(n&&n.status&&n.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Fr).indexOf(e)>=0?e:Fr.UNKNOWN}(n.status);o(new Vr(t,n.message))}else o(new Vr(Fr.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new Vr(Fr.UNAVAILABLE,"Connection failed."));break;default:Pr()}}finally{Nr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);s.send(e,"POST",a,n,15)}))}wo(t,e,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=yr(),o=br(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Sr({})),this.lo(s.initMessageHeaders,e,n),s.encodeInitMessageHeaders=!0;const a=r.join("");Nr("Connection","Creating WebChannel: "+a,s);const c=i.createWebChannel(a,s);let u=!1,l=!1;const h=new Va({Hr:t=>{l?Nr("Connection","Not sending because WebChannel is closed:",t):(u||(Nr("Connection","Opening WebChannel transport."),c.open(),u=!0),Nr("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Cr.EventType.OPEN,(()=>{l||Nr("Connection","WebChannel transport opened.")})),f(c,Cr.EventType.CLOSE,(()=>{l||(l=!0,Nr("Connection","WebChannel transport closed"),h.io())})),f(c,Cr.EventType.ERROR,(t=>{l||(l=!0,Lr("Connection","WebChannel transport errored:",t),h.io(new Vr(Fr.UNAVAILABLE,"The operation could not be completed")))})),f(c,Cr.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];jr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Nr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=gs[t];if(void 0!==e)return ys(e)}(t),n=i.message;void 0===e&&(e=Fr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,h.io(new Vr(e,n)),c.close()}else Nr("Connection","WebChannel received:",n),h.ro(n)}})),f(o,Er.STAT_EVENT,(t=>{t.stat===Tr.PROXY?Nr("Connection","Detected buffering proxy"):t.stat===Tr.NOPROXY&&Nr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return new Rs(t,!0)}class Ga{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,e-n);r>0&&Nr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t,e,n,r,i,o,s,a){this.Hs=t,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ga(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Fr.RESOURCE_EXHAUSTED?(Rr(e.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===Fr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Vr(Fr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return Nr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Nr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ka extends qa{constructor(t,e,n,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(jr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=Ks(t.writeResults,t.commitTime),n=js(t.commitTime);return this.listener.Zo(n,e)}return jr(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Bs(this.It),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>qs(this.It,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new Vr(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vr(Fr.UNKNOWN,t.toString())}))}_o(t,e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection._o(t,e,n,i,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Fr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Vr(Fr.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class Wa{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Rr(e),this.ou=!1):Nr("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((t=>{n.enqueueAndForget((async()=>{Ja(this)&&(Nr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=$r(t);e._u.add(4),await Ya(e),e.gu.set("Unknown"),e._u.delete(4),await Xa(e)}(this))}))})),this.gu=new Wa(n,r)}}async function Xa(t){if(Ja(t))for(const e of t.wu)await e(!0)}async function Ya(t){for(const e of t.wu)await e(!1)}function Ja(t){return 0===$r(t)._u.size}async function Za(t,e,n){if(!mi(e))throw e;t._u.add(1),await Ya(t),t.gu.set("Offline"),n||(n=()=>Ra(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Nr("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Xa(t)}))}function tc(t,e){return e().catch((n=>Za(t,n,e)))}async function ec(t){const e=$r(t),n=fc(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;nc(e);)try{const t=await La(e.localStore,r);if(null===t){0===e.fu.length&&n.Fo();break}r=t.batchId,rc(e,t)}catch(t){await Za(e,t)}ic(e)&&oc(e)}function nc(t){return Ja(t)&&t.fu.length<10}function rc(t,e){t.fu.push(e);const n=fc(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function ic(t){return Ja(t)&&!fc(t).No()&&t.fu.length>0}function oc(t){fc(t).start()}async function sc(t){fc(t).eu()}async function ac(t){const e=fc(t);for(const n of t.fu)e.Xo(n.mutations)}async function cc(t,e,n){const r=t.fu.shift(),i=ia.from(r,e,n);await tc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await ec(t)}async function uc(t,e){e&&fc(t).Yo&&await async function(t,e){if(n=e.code,vs(n)&&n!==Fr.ABORTED){const n=t.fu.shift();fc(t).Mo(),await tc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await ec(t)}var n}(t,e),ic(t)&&oc(t)}async function lc(t,e){const n=$r(t);n.asyncQueue.verifyOperationInProgress(),Nr("RemoteStore","RemoteStore received new credentials");const r=Ja(n);n._u.add(3),await Ya(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Xa(n)}async function hc(t,e){const n=$r(t);e?(n._u.delete(2),await Xa(n)):e||(n._u.add(2),await Ya(n),n.gu.set("Unknown"))}function fc(t){return t.Iu||(t.Iu=function(t,e,n){const r=$r(t);return r.su(),new Ka(e,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)}(t.datastore,t.asyncQueue,{Yr:sc.bind(null,t),Zr:uc.bind(null,t),tu:ac.bind(null,t),Zo:cc.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await ec(t)):(await t.Iu.stop(),t.fu.length>0&&(Nr("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const o=Date.now()+n,s=new dc(t,e,o,r,i);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vr(Fr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pc(t,e){if(Rr("AsyncQueue",`${e}: ${t}`),mi(t))return new Vr(Fr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.queries=new bs((t=>No(t)),Do),this.onlineState="Unknown",this.Ru=new Set}}function mc(t){t.Ru.forEach((t=>{t.next()}))}class vc{constructor(t,e,n,r,i,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new bs((t=>No(t)),Do),this.rc=new Map,this.oc=new Set,this.uc=new _i(si.comparator),this.cc=new Map,this.ac=new ya,this.hc={},this.lc=new Map,this.fc=fa.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function yc(t,e,n){const r=Ac(t);try{const t=await function(t,e){const n=$r(t),r=ti.now(),i=e.reduce(((t,e)=>t.add(e.key)),ks());let o,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=_s(),c=ks();return n.Gi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{o=i;const s=[];for(const t of e){const e=ss(t,o.get(t.key).overlayedDocument);null!=e&&s.push(new us(t.key,e,Zi(e.value.mapValue),ts.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,s,e)})).next((e=>{s=e;const r=e.applyToLocalDocumentSet(o,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:s.batchId,changes:Ss(o)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.hc[t.currentUser.toKey()];r||(r=new _i(Jr)),r=r.insert(e,n),t.hc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Sc(r,t.changes),await ec(r.remoteStore)}catch(t){const e=pc(t,"Failed to persist write");n.reject(e)}}function bc(t,e,n){const r=$r(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=$r(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.bu(e)&&(r=!0)})),r&&mc(n)}(r.eventManager,e),t.length&&r.sc.Wo(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wc(t,e){const n=$r(t),r=e.batch.batchId;try{const t=await Na(n.localStore,e);Tc(n,r,null),Ec(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sc(n,t)}catch(t){await pi(t)}}async function _c(t,e,n){const r=$r(t);try{const t=await function(t,e){const n=$r(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(jr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Tc(r,e,n),Ec(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sc(r,t)}catch(n){await pi(n)}}function Ec(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Tc(t,e,n){const r=$r(t);let i=r.hc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}async function Sc(t,e,n){const r=$r(t),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach(((t,a)=>{s.push(r._c(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Ia.Ci(a.targetId,t);o.push(e)}})))})),await Promise.all(s),r.sc.Wo(i),await async function(t,e){const n=$r(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>gi.forEach(e,(e=>gi.forEach(e.Si,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>gi.forEach(e.Di,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!mi(t))throw t;Nr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ui.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(t,i)}}}(r.localStore,o))}async function Cc(t,e){const n=$r(t);if(!n.currentUser.isEqual(e)){Nr("SyncEngine","User change. New user:",e.toKey());const t=await Da(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new Vr(Fr.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Sc(n,t.ji)}}function Ac(t){const e=$r(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_c.bind(null,e),e}class Ic{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Ha(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return ka(this.persistence,new Oa,t.initialUser,this.It)}yc(t){return new Sa(Aa.Bs,this.It)}gc(t){return new Pa}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Oc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>bc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cc.bind(null,this.syncEngine),await hc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gc}createDatastore(t){const e=Ha(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ua(r));var r;return function(t,e,n,r){return new za(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>bc(this.syncEngine,t,0),o=$a.C()?new $a:new ja,new Qa(e,n,r,i,o);var e,n,r,i,o}createSyncEngine(t,e){return function(t,e,n,r,i,o,s){const a=new vc(t,e,n,r,i,o);return s&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=$r(t);Nr("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Ya(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e,n){if(!n)throw new Vr(Fr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kc(t,e,n,r){if(!0===e&&!0===r)throw new Vr(Fr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dc(t){if(!si.isDocumentKey(t))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nc(t){if(si.isDocumentKey(t))throw new Vr(Fr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Pr()}function Lc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Vr(Fr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rc(t);throw new Vr(Fr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mc=new Map;class Pc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Vr(Fr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Vr(Fr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,kc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vr(Fr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Vr(Fr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Hr;switch(t.type){case"gapi":const e=t.client;return new zr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Vr(Fr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Mc.get(t);e&&(Nr("ComponentProvider","Removing Datastore"),Mc.delete(t),e.terminate())}(this),Promise.resolve()}}function $c(t,e,n,r={}){var i;const o=(t=Lc(t,jc))._getSettings();if("firestore.googleapis.com"!==o.host&&o.host!==e&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Or.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Vr(Fr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Or(o)}t._authCredentials=new Gr(new Br(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Uc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fc(this.firestore,t,this._key)}}class Vc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Vc(this.firestore,t,this._query)}}class Uc extends Vc{constructor(t,e,n){super(t,e,To(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fc(this.firestore,null,new si(t))}withConverter(t){return new Uc(this.firestore,t,this._path)}}function Bc(t,e,...n){if(t=(0,a.m9)(t),xc("collection","path",e),t instanceof jc){const r=ri.fromString(e,...n);return Nc(r),new Uc(t,null,r)}{if(!(t instanceof Fc||t instanceof Uc))throw new Vr(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ri.fromString(e,...n));return Nc(r),new Uc(t.firestore,null,r)}}function Hc(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=Yr.R()),xc("doc","path",e),t instanceof jc){const r=ri.fromString(e,...n);return Dc(r),new Fc(t,null,new si(r))}{if(!(t instanceof Fc||t instanceof Uc))throw new Vr(Fr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ri.fromString(e,...n));return Dc(r),new Fc(t.firestore,t instanceof Uc?t.converter:null,new si(r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gc{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Or.UNAUTHENTICATED,this.clientId=Yr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Nr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Nr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vr(Fr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=pc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function qc(t,e){t.asyncQueue.verifyOperationInProgress(),Nr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Da(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zc(t);Nr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>lc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>lc(e.remoteStore,n))),t.onlineComponents=e}async function zc(t){return t.offlineComponents||(Nr("FirestoreClient","Using default OfflineComponentProvider"),await qc(t,new Ic)),t.offlineComponents}async function Wc(t){return t.onlineComponents||(Nr("FirestoreClient","Using default OnlineComponentProvider"),await Kc(t,new Oc)),t.onlineComponents}function Qc(t){return Wc(t).then((t=>t.syncEngine))}class Xc{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ga(this,"async_queue_retry"),this.Wc=()=>{const t=Ba();t&&Nr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Ba();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Ba();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new Ur;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!mi(E))throw E;Nr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Rr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const r=dc.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(r),r}zc(){this.Kc&&Pr()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class Yc extends jc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new Xc,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||tu(this),this._firestoreClient.terminate()}}function Jc(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",o=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const t=(0,a.P0)("firestore");t&&$c(o,...t)}return o}function Zc(t){return t._firestoreClient||tu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function tu(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Li(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gc(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new eu(Ii.fromBase64String(t))}catch(t){throw new Vr(Fr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new eu(Ii.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Vr(Fr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new oi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Vr(Fr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Vr(Fr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Jr(this._lat,t._lat)||Jr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=/^__.*__$/;class su{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new us(t,this.data,this.fieldMask,e,this.fieldTransforms):new cs(t,this.data,e,this.fieldTransforms)}}function au(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pr()}}class cu{constructor(t,e,n,r,i,o){this.settings=t,this.databaseId=e,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new cu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.ua(t),r}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ia({path:n,oa:!1});return r.na(),r}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return bu(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(au(this.sa)&&ou.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class uu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.It=n||Ha(t)}da(t,e,n,r=!1){return new cu({sa:t,methodName:e,fa:n,path:oi.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function lu(t){const e=t._freezeSettings(),n=Ha(t._databaseId);return new uu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hu(t,e,n,r,i,o={}){const s=t.da(o.merge||o.mergeFields?2:0,e,n,i);gu("Data must be an object, but it was:",s,r);const a=du(r,s);let c,u;if(o.merge)c=new Ai(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const t=[];for(const r of o.mergeFields){const i=mu(e,r,n);if(!s.contains(i))throw new Vr(Fr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);wu(t,i)||t.push(i)}c=new Ai(t),u=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=s.fieldTransforms;return new su(new Ji(a),c,u)}function fu(t,e){if(pu(t=(0,a.m9)(t)))return gu("Unsupported field value:",e,t),du(t,e);if(t instanceof ru)return function(t,e){if(!au(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=fu(i,e.aa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Fo(e.It,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ti.fromDate(t);return{timestampValue:Ls(e.It,n)}}if(t instanceof ti){const n=new ti(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ls(e.It,n)}}if(t instanceof iu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof eu)return{bytesValue:Ms(e.It,t._byteString)};if(t instanceof Fc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$s(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Rc(t)}`)}(t,e)}function du(t,e){const n={};return wi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bi(t,((t,r)=>{const i=fu(r,e.ra(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function pu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ti||t instanceof iu||t instanceof eu||t instanceof Fc||t instanceof ru)}function gu(t,e,n){if(!pu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Rc(n);throw"an object"===r?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function mu(t,e,n){if((e=(0,a.m9)(e))instanceof nu)return e._internalPath;if("string"==typeof e)return yu(t,e);throw bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const vu=new RegExp("[~\\*/\\[\\]]");function yu(t,e,n){if(e.search(vu)>=0)throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nu(...e.split("."))._internalPath}catch(r){throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bu(t,e,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=` in field ${r}`),s&&(c+=` in document ${i}`),c+=")"),new Vr(Fr.INVALID_ARGUMENT,a+t+c)}function wu(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _u(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function Eu(t,e){const n=Lc(t.firestore,Yc),r=Hc(t),i=_u(t.converter,e);return Tu(n,[hu(lu(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,ts.exists(!1))]).then((()=>r))}function Tu(t,e){return function(t,e){const n=new Ur;return t.asyncQueue.enqueueAndForget((async()=>yc(await Qc(t),e,n))),n.promise}(Zc(t),e)}!function(t,e=!0){!function(t){xr=t}(i.Jn),(0,i.Xd)(new o.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new Yc(new qr(t.getProvider("auth-internal")),new Qr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Vr(Fr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Ir,"3.7.3",t),(0,i.KN)(Ir,"3.7.3","esm2017")}()},5431:function(t,e,n){"use strict";n.d(e,{z:function(){return o}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function o(t,e){void 0===e&&(e={});var n=e.registrationOptions;void 0===n&&(n={}),delete e.registrationOptions;var o=function(t){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];e&&e[t]&&e[t].apply(e,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return s(o,t)}))):(a(t,o,n),navigator.serviceWorker.ready.then((function(t){o("ready",t)})).catch((function(t){return s(o,t)})))}))}function s(t,e){navigator.onLine||t("offline"),t("error",e)}function a(t,e,n){navigator.serviceWorker.register(t,n).then((function(t){e("registered",t),t.waiting?e("updated",t):t.onupdatefound=function(){e("updatefound",t);var n=t.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?e("updated",t):e("cached",t))}}})).catch((function(t){return s(e,t)}))}function c(t,e,n){fetch(t).then((function(r){404===r.status?(e("error",new Error("Service worker not found at "+t)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Expected "+t+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(t,e,n)})).catch((function(t){return s(e,t)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){return s(emit,t)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(t){return window.addEventListener("load",t)})):{then:function(t){return window.addEventListener("load",t)}})},8970:function(t,e,n){"use strict";n.d(e,{B:function(){return x},LV:function(){return k}});n(7658);var r=n(6369);function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,r){if("undefined"!==typeof document){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=t,o.defer=e.defer,e.preconnectOrigin){var s=document.createElement("link");s.href=e.preconnectOrigin,s.rel="preconnect",i.appendChild(s)}i.appendChild(o),o.onload=n,o.onerror=r}}))},u=function(t){return"function"===typeof t},l=function(t){return t&&"object"===i(t)&&!Array.isArray(t)},h=function t(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(!r.length)return e;var s=r.shift();if(l(e)&&l(s)){for(var a in s)l(s[a])?(e[a]||Object.assign(e,o({},a,{})),t(e[a],s[a])):Object.assign(e,o({},a,s[a]));return t.apply(void 0,[e].concat(r))}},f=function(){return"undefined"!==typeof window&&"undefined"!==typeof document},d=function(t){f()},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d('Missing "appName" property inside the plugin options.',null==t.app_name),d('Missing "name" property in the route.',null==t.screen_name),t};function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.split("/"),r=e.split("/");return""===n[0]&&"/"===e[e.length-1]&&n.shift(),r.join("/")+n.join("/")}var m,v=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},y={},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=v();y=h(e,t)},w=function(){return y},_=function(){var t,e=w(),n=e.globalObjectName;f()&&"undefined"!==typeof window[n]&&(t=window)[n].apply(t,arguments)},E=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=w(),i=r.config,o=r.includes;_.apply(void 0,["config",i.id].concat(e)),Array.isArray(o)&&o.forEach((function(t){_.apply(void 0,["config",t.id].concat(e))}))},T=function(t,e){f()&&(window["ga-disable-".concat(t)]=e)},S=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=w(),n=e.config,r=e.includes;T(n.id,t),Array.isArray(r)&&r.forEach((function(e){return T(e.id,t)}))},C=function(){S(!0)},A=function(){S(!1)},I=function(t){m=t},O=function(){return m},x=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=w(),r=n.includes,i=n.defaultGroupName;null==e.send_to&&Array.isArray(r)&&r.length&&(e.send_to=r.map((function(t){return t.id})).concat(i)),_("event",t,e)},k=function(t){if(f()){var e;if("string"===typeof t)e={page_path:t};else if(t.path||t.fullPath){var n=w(),r=n.pageTrackerUseFullPath,i=n.pageTrackerPrependBase,o=O(),s=o&&o.options.base,c=r?t.fullPath:t.path;e=a(a({},t.name&&{page_title:t.name}),{},{page_path:i?g(c,s):c})}else e=t;null==e.page_location&&(e.page_location=window.location.href),null==e.send_page_view&&(e.send_page_view=!0),x("page_view",e)}},D=function(t){var e,n=w(),r=n.appName;t&&(e="string"===typeof t?{screen_name:t}:t,e.app_name=e.app_name||r,x("screen_view",e))},N=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];x.apply(void 0,["exception"].concat(e))},R=function(t){E("linker",t)},L=function(t){x("timing_complete",t)},M=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];_.apply(void 0,["set"].concat(e))},P=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];x.apply(void 0,["refund"].concat(e))},j=function(t){x("purchase",t)},$=function(t){E({custom_map:t})},F=Object.freeze({__proto__:null,query:_,config:E,optOut:C,optIn:A,pageview:k,screenview:D,exception:N,linker:R,time:L,set:M,refund:P,purchase:j,customMap:$,event:x}),V=function(t){return t.$gtag=t.prototype.$gtag=F},U=function(){if(f()){var t=w(),e=t.enabled,n=t.globalObjectName,r=t.globalDataLayerName;return null==window[n]&&(window[r]=window[r]||[],window[n]=function(){window[r].push(arguments)}),window[n]("js",new Date),e||C(),window[n]}},B=function(t){return a({send_page_view:!1},t)},H=function(){var t=w(),e=t.config,n=t.includes;_("config",e.id,B(e.params)),Array.isArray(n)&&n.forEach((function(t){_("config",t.id,B(t.params))}))},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=w(),r=n.appName,i=n.pageTrackerTemplate,o=n.pageTrackerScreenviewEnabled,s=n.pageTrackerSkipSamePath;if(!s||t.path!==e.path){var a=t;u(i)?a=i(t,e):o&&(a=p({app_name:r,screen_name:t.name})),o?D(a):k(a)}},q=function(t){var e=w(),n=e.pageTrackerExcludedRoutes;return n.includes(t.path)||n.includes(t.name)},K=function(){var t=w(),e=t.onBeforeTrack,n=t.onAfterTrack,i=O();i.onReady((function(){r.ZP.nextTick().then((function(){var t=i.currentRoute;H(),q(t)||G(t)})),i.afterEach((function(t,i){r.ZP.nextTick().then((function(){q(t)||(u(e)&&e(t,i),G(t,i),u(n)&&n(t,i))}))}))}))},z=function(){var t=w(),e=t.onReady,n=t.onError,r=t.globalObjectName,i=t.globalDataLayerName,o=t.config,s=t.customResourceURL,a=t.customPreconnectOrigin,u=t.deferScriptLoad,l=t.pageTrackerEnabled,h=t.disableScriptLoad,f=Boolean(l&&O());if(U(),f?K():H(),!h)return c("".concat(s,"?id=").concat(o.id,"&l=").concat(i),{preconnectOrigin:a,defer:u}).then((function(){e&&e(window[r])})).catch((function(t){return n&&n(t),t}))},W=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;V(t),b(e),I(n),w().bootstrap&&z()};e["ZP"]=W},9203:function(t,e,n){"use strict";n.d(e,{wA:function(){return T},fI:function(){return A},w3:function(){return r.ZP},RL:function(){return I}});var r=n(6369);n(7658);
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */
function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){return a(t)||c(t)||u()}function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(){return"undefined"!==typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function h(t,e){f(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(n){f(t.prototype,e.prototype,n)})),Object.getOwnPropertyNames(e).forEach((function(n){f(t,e,n)}))}function f(t,e,n){var r=n?Reflect.getOwnMetadataKeys(e,n):Reflect.getOwnMetadataKeys(e);r.forEach((function(r){var i=n?Reflect.getOwnMetadata(r,e,n):Reflect.getOwnMetadata(r,e);n?Reflect.defineMetadata(r,i,t,n):Reflect.defineMetadata(r,i,t)}))}var d={__proto__:[]},p=d instanceof Array;function g(t){return function(e,n,r){var i="function"===typeof e?e:e.constructor;i.__decorators__||(i.__decorators__=[]),"number"!==typeof r&&(r=void 0),i.__decorators__.push((function(e){return t(e,n,r)}))}}function m(t){var e=i(t);return null==t||"object"!==e&&"function"!==e}function v(t,e){var n=e.prototype._init;e.prototype._init=function(){var e=this,n=Object.getOwnPropertyNames(t);if(t.$options.props)for(var r in t.$options.props)t.hasOwnProperty(r)||n.push(r);n.forEach((function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},configurable:!0})}))};var r=new e;e.prototype._init=n;var i={};return Object.keys(r).forEach((function(t){void 0!==r[t]&&(i[t]=r[t])})),i}var y=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var n=t.prototype;Object.getOwnPropertyNames(n).forEach((function(t){if("constructor"!==t)if(y.indexOf(t)>-1)e[t]=n[t];else{var r=Object.getOwnPropertyDescriptor(n,t);void 0!==r.value?"function"===typeof r.value?(e.methods||(e.methods={}))[t]=r.value:(e.mixins||(e.mixins=[])).push({data:function(){return o({},t,r.value)}}):(r.get||r.set)&&((e.computed||(e.computed={}))[t]={get:r.get,set:r.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return v(this,t)}});var i=t.__decorators__;i&&(i.forEach((function(t){return t(e)})),delete t.__decorators__);var s=Object.getPrototypeOf(t.prototype),a=s instanceof r.ZP?s.constructor:r.ZP,c=a.extend(e);return _(c,t,a),l()&&h(c,t),c}var w={prototype:!0,arguments:!0,callee:!0,caller:!0};function _(t,e,n){Object.getOwnPropertyNames(e).forEach((function(r){if(!w[r]){var i=Object.getOwnPropertyDescriptor(t,r);if(!i||i.configurable){var o=Object.getOwnPropertyDescriptor(e,r);if(!p){if("cid"===r)return;var s=Object.getOwnPropertyDescriptor(n,r);if(!m(o.value)&&s&&s.value===o.value)return}0,Object.defineProperty(t,r,o)}}}))}function E(t){return"function"===typeof t?b(t):function(e){return b(e,t)}}E.registerHooks=function(t){y.push.apply(y,s(t))};var T=E;n(541);var S="undefined"!==typeof Reflect&&"undefined"!==typeof Reflect.getMetadata;function C(t,e,n){if(S&&!Array.isArray(t)&&"function"!==typeof t&&!t.hasOwnProperty("type")&&"undefined"===typeof t.type){var r=Reflect.getMetadata("design:type",e,n);r!==Object&&(t.type=r)}}function A(t){return void 0===t&&(t={}),function(e,n){C(t,e,n),g((function(e,n){(e.props||(e.props={}))[n]=t}))(e,n)}}function I(t,e){void 0===e&&(e={});var n=e.deep,r=void 0!==n&&n,i=e.immediate,o=void 0!==i&&i;return g((function(e,n){"object"!==typeof e.watch&&(e.watch=Object.create(null));var i=e.watch;"object"!==typeof i[t]||Array.isArray(i[t])?"undefined"===typeof i[t]&&(i[t]=[]):i[t]=[i[t]],i[t].push({handler:n,deep:r,immediate:o})}))}},6369:function(t,e,n){"use strict";n.d(e,{ZP:function(){return Xr}});n(7658),n(4633),n(541);var r=Object.freeze({}),i=Array.isArray;function o(t){return void 0===t||null===t}function s(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function d(t){return"[object Object]"===f.call(t)}function p(t){return"[object RegExp]"===f.call(t)}function g(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function m(t){return s(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||d(t)&&t.toString===f?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function b(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}b("slot,component",!0);var w=b("key,ref,slot,slot-scope,is");function _(t,e){var n=t.length;if(n){if(e===t[n-1])return void(t.length=n-1);var r=t.indexOf(e);if(r>-1)return t.splice(r,1)}}var E=Object.prototype.hasOwnProperty;function T(t,e){return E.call(t,e)}function S(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var C=/-(\w)/g,A=S((function(t){return t.replace(C,(function(t,e){return e?e.toUpperCase():""}))})),I=S((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),O=/\B([A-Z])/g,x=S((function(t){return t.replace(O,"-$1").toLowerCase()}));function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function D(t,e){return t.bind(e)}var N=Function.prototype.bind?D:k;function R(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function L(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&L(e,t[n]);return e}function P(t,e,n){}var j=function(t,e,n){return!1},$=function(t){return t};function F(t,e){if(t===e)return!0;var n=h(t),r=h(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),o=Array.isArray(e);if(i&&o)return t.length===e.length&&t.every((function(t,n){return F(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||o)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every((function(n){return F(t[n],e[n])}))}catch(c){return!1}}function V(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function B(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var H="data-server-rendered",G=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],K={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:j,isReservedAttr:j,isUnknownElement:j,getTagNamespace:P,parsePlatformTagName:$,mustUseProp:j,async:!0,_lifecycleHooks:q},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function W(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function Q(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(z.source,".$_\\d]"));function Y(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J="__proto__"in{},Z="undefined"!==typeof window,tt=Z&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,rt=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var it=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var ot,st=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,ct=!1;if(Z)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){ct=!0}}),window.addEventListener("test-passive",null,ut)}catch(Ys){}var lt=function(){return void 0===ot&&(ot=!Z&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),ot},ht=Z&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ft(t){return"function"===typeof t&&/native code/.test(t.toString())}var dt,pt="undefined"!==typeof Symbol&&ft(Symbol)&&"undefined"!==typeof Reflect&&ft(Reflect.ownKeys);dt="undefined"!==typeof Set&&ft(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var gt=null;function mt(t){void 0===t&&(t=null),t||gt&&gt._scope.off(),gt=t,t&&t._scope.on()}var vt=function(){function t(t,e,n,r,i,o,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function bt(t){return new vt(void 0,void 0,void 0,String(t))}function wt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=0,Et=[],Tt=function(){for(var t=0;t<Et.length;t++){var e=Et[t];e.subs=e.subs.filter((function(t){return t})),e._pending=!1}Et.length=0},St=function(){function t(){this._pending=!1,this.id=_t++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Et.push(this))},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.filter((function(t){return t}));for(var n=0,r=e.length;n<r;n++){var i=e[n];0,i.update()}},t}();St.target=null;var Ct=[];function At(t){Ct.push(t),St.target=t}function It(){Ct.pop(),St.target=Ct[Ct.length-1]}var Ot=Array.prototype,xt=Object.create(Ot),kt=["push","pop","shift","unshift","splice","sort","reverse"];kt.forEach((function(t){var e=Ot[t];Q(xt,t,(function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i,o=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&s.observeArray(i),s.dep.notify(),o}))}));var Dt=Object.getOwnPropertyNames(xt),Nt={},Rt=!0;function Lt(t){Rt=t}var Mt={notify:P,depend:P,addSub:P,removeSub:P},Pt=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Mt:new St,this.vmCount=0,Q(t,"__ob__",this),i(t)){if(!n)if(J)t.__proto__=xt;else for(var r=0,o=Dt.length;r<o;r++){var s=Dt[r];Q(t,s,xt[s])}e||this.observeArray(t)}else{var a=Object.keys(t);for(r=0;r<a.length;r++){s=a[r];$t(t,s,Nt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)jt(t[e],!1,this.mock)},t}();function jt(t,e,n){return t&&T(t,"__ob__")&&t.__ob__ instanceof Pt?t.__ob__:!Rt||!n&&lt()||!i(t)&&!d(t)||!Object.isExtensible(t)||t.__v_skip||qt(t)||t instanceof vt?void 0:new Pt(t,e,n)}function $t(t,e,n,r,o,s){var a=new St,c=Object.getOwnPropertyDescriptor(t,e);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==Nt&&2!==arguments.length||(n=t[e]);var h=!o&&jt(n,!1,s);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return St.target&&(a.depend(),h&&(h.dep.depend(),i(e)&&Ut(e))),qt(e)&&!o?e.value:e},set:function(e){var r=u?u.call(t):n;if(B(r,e)){if(l)l.call(t,e);else{if(u)return;if(!o&&qt(r)&&!qt(e))return void(r.value=e);n=e}h=!o&&jt(e,!1,s),a.notify()}}}),a}}function Ft(t,e,n){if(!Gt(t)){var r=t.__ob__;return i(t)&&g(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),r&&!r.shallow&&r.mock&&jt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n,void 0,r.shallow,r.mock),r.dep.notify(),n):(t[e]=n,n)}}function Vt(t,e){if(i(t)&&g(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||Gt(t)||T(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ut(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),i(e)&&Ut(e)}function Bt(t){return Ht(t,!0),Q(t,"__v_isShallow",!0),t}function Ht(t,e){if(!Gt(t)){jt(t,e,lt());0}}function Gt(t){return!(!t||!t.__v_isReadonly)}function qt(t){return!(!t||!0!==t.__v_isRef)}function Kt(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(qt(t))return t.value;var r=t&&t.__ob__;return r&&r.dep.depend(),t},set:function(t){var r=e[n];qt(r)&&!qt(t)?r.value=t:e[n]=t}})}var zt="watcher";"".concat(zt," callback"),"".concat(zt," getter"),"".concat(zt," cleanup");var Wt;var Qt=function(){function t(t){void 0===t&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!t&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Wt;try{return Wt=this,t()}finally{Wt=e}}else 0},t.prototype.on=function(){Wt=this},t.prototype.off=function(){Wt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){var r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}},t}();function Xt(t,e){void 0===e&&(e=Wt),e&&e.active&&e.effects.push(t)}function Yt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Jt=S((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function Zt(t,e){function n(){var t=n.fns;if(!i(t))return Qe(t,null,arguments,e,"v-on handler");for(var r=t.slice(),o=0;o<r.length;o++)Qe(r[o],null,arguments,e,"v-on handler")}return n.fns=t,n}function te(t,e,n,r,i,s){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=Jt(c),o(u)||(o(l)?(o(u.fns)&&(u=t[c]=Zt(u,s)),a(h.once)&&(u=t[c]=i(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)o(t[c])&&(h=Jt(c),r(h.name,e[c],h.capture))}function ee(t,e,n){var r;t instanceof vt&&(t=t.data.hook||(t.data.hook={}));var i=t[e];function c(){n.apply(this,arguments),_(r.fns,c)}o(i)?r=Zt([c]):s(i.fns)&&a(i.merged)?(r=i,r.fns.push(c)):r=Zt([i,c]),r.merged=!0,t[e]=r}function ne(t,e,n){var r=e.options.props;if(!o(r)){var i={},a=t.attrs,c=t.props;if(s(a)||s(c))for(var u in r){var l=x(u);re(i,c,u,l,!0)||re(i,a,u,l,!1)}return i}}function re(t,e,n,r,i){if(s(e)){if(T(e,n))return t[n]=e[n],i||delete e[n],!0;if(T(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function ie(t){for(var e=0;e<t.length;e++)if(i(t[e]))return Array.prototype.concat.apply([],t);return t}function oe(t){return u(t)?[bt(t)]:i(t)?ae(t):void 0}function se(t){return s(t)&&s(t.text)&&c(t.isComment)}function ae(t,e){var n,r,c,l,h=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(c=h.length-1,l=h[c],i(r)?r.length>0&&(r=ae(r,"".concat(e||"","_").concat(n)),se(r[0])&&se(l)&&(h[c]=bt(l.text+r[0].text),r.shift()),h.push.apply(h,r)):u(r)?se(l)?h[c]=bt(l.text+r):""!==r&&h.push(bt(r)):se(r)&&se(l)?h[c]=bt(l.text+r.text):(a(t._isVList)&&s(r.tag)&&o(r.key)&&s(e)&&(r.key="__vlist".concat(e,"_").concat(n,"__")),h.push(r)));return h}function ce(t,e){var n,r,o,a,c=null;if(i(t)||"string"===typeof t)for(c=new Array(t.length),n=0,r=t.length;n<r;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(pt&&t[Symbol.iterator]){c=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)c.push(e(l.value,c.length)),l=u.next()}else for(o=Object.keys(t),c=new Array(o.length),n=0,r=o.length;n<r;n++)a=o[n],c[n]=e(t[a],a,n);return s(c)||(c=[]),c._isVList=!0,c}function ue(t,e,n,r){var i,o=this.$scopedSlots[t];o?(n=n||{},r&&(n=L(L({},r),n)),i=o(n)||(l(e)?e():e)):i=this.$slots[t]||(l(e)?e():e);var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function le(t){return Tr(this.$options,"filters",t,!0)||$}function he(t,e){return i(t)?-1===t.indexOf(e):t!==e}function fe(t,e,n,r,i){var o=K.keyCodes[e]||n;return i&&r&&!K.keyCodes[e]?he(i,r):o?he(o,t):r?x(r)!==e:void 0===t}function de(t,e,n,r,o){if(n)if(h(n)){i(n)&&(n=M(n));var s=void 0,a=function(i){if("class"===i||"style"===i||w(i))s=t;else{var a=t.attrs&&t.attrs.type;s=r||K.mustUseProp(e,a,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=A(i),u=x(i);if(!(c in s)&&!(u in s)&&(s[i]=n[i],o)){var l=t.on||(t.on={});l["update:".concat(i)]=function(t){n[i]=t}}};for(var c in n)a(c)}else;return t}function pe(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),me(r,"__static__".concat(t),!1)),r}function ge(t,e,n){return me(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function me(t,e,n){if(i(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&ve(t[r],"".concat(e,"_").concat(r),n);else ve(t,e,n)}function ve(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ye(t,e){if(e)if(d(e)){var n=t.on=t.on?L({},t.on):{};for(var r in e){var i=n[r],o=e[r];n[r]=i?[].concat(i,o):o}}else;return t}function be(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var s=t[o];i(s)?be(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function we(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function _e(t,e){return"string"===typeof t?e+t:t}function Ee(t){t._o=ge,t._n=y,t._s=v,t._l=ce,t._t=ue,t._q=F,t._i=V,t._m=pe,t._f=le,t._k=fe,t._b=de,t._v=bt,t._e=yt,t._u=be,t._g=ye,t._d=we,t._p=_e}function Te(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],s=o.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,o.context!==e&&o.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(o);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(Se)&&delete n[u];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ce(t){return t.isComment&&t.asyncFactory}function Ae(t,e,n,i){var o,s=Object.keys(n).length>0,a=e?!!e.$stable:!s,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&i&&i!==r&&c===i.$key&&!s&&!i.$hasNormal)return i;for(var u in o={},e)e[u]&&"$"!==u[0]&&(o[u]=Ie(t,n,u,e[u]))}else o={};for(var l in n)l in o||(o[l]=Oe(n,l));return e&&Object.isExtensible(e)&&(e._normalized=o),Q(o,"$stable",a),Q(o,"$key",c),Q(o,"$hasNormal",s),o}function Ie(t,e,n,r){var o=function(){var e=gt;mt(t);var n=arguments.length?r.apply(null,arguments):r({});n=n&&"object"===typeof n&&!i(n)?[n]:oe(n);var o=n&&n[0];return mt(e),n&&(!o||1===n.length&&o.isComment&&!Ce(o))?void 0:n};return r.proxy&&Object.defineProperty(e,n,{get:o,enumerable:!0,configurable:!0}),o}function Oe(t,e){return function(){return t[e]}}function xe(t){var e=t.$options,n=e.setup;if(n){var r=t._setupContext=ke(t);mt(t),At();var i=Qe(n,null,[t._props||Bt({}),r],t,"setup");if(It(),mt(),l(i))e.render=i;else if(h(i))if(t._setupState=i,i.__sfc){var o=t._setupProxy={};for(var s in i)"__sfc"!==s&&Kt(o,i,s)}else for(var s in i)W(s)||Kt(t,i,s);else 0}}function ke(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};Q(e,"_v_attr_proxy",!0),De(e,t.$attrs,r,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};De(e,t.$listeners,r,t,"$listeners")}return t._listenersProxy},get slots(){return Re(t)},emit:N(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Kt(t,e,n)}))}}}function De(t,e,n,r,i){var o=!1;for(var s in e)s in t?e[s]!==n[s]&&(o=!0):(o=!0,Ne(t,s,r,i));for(var s in t)s in e||(o=!0,delete t[s]);return o}function Ne(t,e,n,r){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[r][e]}})}function Re(t){return t._slotsProxy||Le(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Le(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function Me(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,i=n&&n.context;t.$slots=Te(e._renderChildren,i),t.$scopedSlots=n?Ae(t.$parent,n.data.scopedSlots,t.$slots):r,t._c=function(e,n,r,i){return Ge(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Ge(t,e,n,r,i,!0)};var o=n&&n.data;$t(t,"$attrs",o&&o.attrs||r,null,!0),$t(t,"$listeners",e._parentListeners||r,null,!0)}var Pe=null;function je(t){Ee(t.prototype),t.prototype.$nextTick=function(t){return cn(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&e._isMounted&&(e.$scopedSlots=Ae(e.$parent,o.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Le(e._slotsProxy,e.$scopedSlots)),e.$vnode=o;try{mt(e),Pe=e,t=r.call(e._renderProxy,e.$createElement)}catch(Ys){We(Ys,e,"render"),t=e._vnode}finally{Pe=null,mt()}return i(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=o,t}}function $e(t,e){return(t.__esModule||pt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Fe(t,e,n,r,i){var o=yt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}function Ve(t,e){if(a(t.error)&&s(t.errorComp))return t.errorComp;if(s(t.resolved))return t.resolved;var n=Pe;if(n&&s(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&s(t.loadingComp))return t.loadingComp;if(n&&!s(t.owners)){var r=t.owners=[n],i=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return _(r,n)}));var l=function(t){for(var e=0,n=r.length;e<n;e++)r[e].$forceUpdate();t&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},f=U((function(n){t.resolved=$e(n,e),i?r.length=0:l(!0)})),d=U((function(e){s(t.errorComp)&&(t.error=!0,l(!0))})),p=t(f,d);return h(p)&&(m(p)?o(t.resolved)&&p.then(f,d):m(p.component)&&(p.component.then(f,d),s(p.error)&&(t.errorComp=$e(p.error,e)),s(p.loading)&&(t.loadingComp=$e(p.loading,e),0===p.delay?t.loading=!0:c=setTimeout((function(){c=null,o(t.resolved)&&o(t.error)&&(t.loading=!0,l(!1))}),p.delay||200)),s(p.timeout)&&(u=setTimeout((function(){u=null,o(t.resolved)&&d(null)}),p.timeout)))),i=!1,t.loading?t.loadingComp:t.resolved}}function Ue(t){if(i(t))for(var e=0;e<t.length;e++){var n=t[e];if(s(n)&&(s(n.componentOptions)||Ce(n)))return n}}var Be=1,He=2;function Ge(t,e,n,r,o,s){return(i(n)||u(n))&&(o=r,r=n,n=void 0),a(s)&&(o=He),qe(t,e,n,r,o)}function qe(t,e,n,r,o){if(s(n)&&s(n.__ob__))return yt();if(s(n)&&s(n.is)&&(e=n.is),!e)return yt();var a,c;if(i(r)&&l(r[0])&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===He?r=oe(r):o===Be&&(r=ie(r)),"string"===typeof e){var u=void 0;c=t.$vnode&&t.$vnode.ns||K.getTagNamespace(e),a=K.isReservedTag(e)?new vt(K.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!s(u=Tr(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):sr(u,n,t,r,e)}else a=sr(e,n,t,r);return i(a)?a:s(a)?(s(c)&&Ke(a,c),s(n)&&ze(n),a):yt()}function Ke(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),s(t.children))for(var r=0,i=t.children.length;r<i;r++){var c=t.children[r];s(c.tag)&&(o(c.ns)||a(n)&&"svg"!==c.tag)&&Ke(c,e,n)}}function ze(t){h(t.style)&&dn(t.style),h(t.class)&&dn(t.class)}function We(t,e,n){At();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var s=!1===i[o].call(r,t,e,n);if(s)return}catch(Ys){Xe(Ys,r,"errorCaptured hook")}}}Xe(t,e,n)}finally{It()}}function Qe(t,e,n,r,i){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&m(o)&&!o._handled&&(o.catch((function(t){return We(t,r,i+" (Promise/async)")})),o._handled=!0)}catch(Ys){We(Ys,r,i)}return o}function Xe(t,e,n){if(K.errorHandler)try{return K.errorHandler.call(null,t,e,n)}catch(Ys){Ys!==t&&Ye(Ys,null,"config.errorHandler")}Ye(t,e,n)}function Ye(t,e,n){if(!Z||"undefined"===typeof console)throw t;console.error(t)}var Je,Ze=!1,tn=[],en=!1;function nn(){en=!1;var t=tn.slice(0);tn.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ft(Promise)){var rn=Promise.resolve();Je=function(){rn.then(nn),it&&setTimeout(P)},Ze=!0}else if(et||"undefined"===typeof MutationObserver||!ft(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Je="undefined"!==typeof setImmediate&&ft(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var on=1,sn=new MutationObserver(nn),an=document.createTextNode(String(on));sn.observe(an,{characterData:!0}),Je=function(){on=(on+1)%2,an.data=String(on)},Ze=!0}function cn(t,e){var n;if(tn.push((function(){if(t)try{t.call(e)}catch(Ys){We(Ys,e,"nextTick")}else n&&n(e)})),en||(en=!0,Je()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function un(t){return function(e,n){if(void 0===n&&(n=gt),n)return ln(n,t,e)}}function ln(t,e,n){var r=t.$options;r[e]=gr(r[e],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var hn="2.7.14";var fn=new dt;function dn(t){return pn(t,fn),fn.clear(),t}function pn(t,e){var n,r,o=i(t);if(!(!o&&!h(t)||t.__v_skip||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(o){n=t.length;while(n--)pn(t[n],e)}else if(qt(t))pn(t.value,e);else{r=Object.keys(t),n=r.length;while(n--)pn(t[r[n]],e)}}}var gn,mn=0,vn=function(){function t(t,e,n,r,i){Xt(this,Wt&&!Wt._vm?Wt:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++mn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new dt,this.newDepIds=new dt,this.expression="",l(e)?this.getter=e:(this.getter=Y(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;At(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Ys){if(!this.user)throw Ys;We(Ys,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&dn(t),It(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Qn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');Qe(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&En(t,e)}function bn(t,e){gn.$on(t,e)}function wn(t,e){gn.$off(t,e)}function _n(t,e){var n=gn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function En(t,e,n){gn=t,te(e,n||{},bn,wn,_n,t),gn=void 0}function Tn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(i(t))for(var o=0,s=t.length;o<s;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(i(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var s,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(s=a[c],s===e||s.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?R(n):n;for(var r=R(arguments,1),i='event handler for "'.concat(t,'"'),o=0,s=n.length;o<s;o++)Qe(n[o],e,r,e,i)}return e}}var Sn=null;function Cn(t){var e=Sn;return Sn=t,function(){Sn=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function In(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,o=Cn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),o(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n);var s=n;while(s&&s.$vnode&&s.$parent&&s.$vnode===s.$parent._vnode)s.$parent.$el=s.$el,s=s.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Rn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Rn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function On(t,e,n){var r;t.$el=e,t.$options.render||(t.$options.render=yt),Rn(t,"beforeMount"),r=function(){t._update(t._render(),n)};var i={before:function(){t._isMounted&&!t._isDestroyed&&Rn(t,"beforeUpdate")}};new vn(t,r,P,i,!0),n=!1;var o=t._preWatchers;if(o)for(var s=0;s<o.length;s++)o[s].run();return null==t.$vnode&&(t._isMounted=!0,Rn(t,"mounted")),t}function xn(t,e,n,i,o){var s=i.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==r&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key||!s&&t.$scopedSlots.$key),u=!!(o||t.$options._renderChildren||c),l=t.$vnode;t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o;var h=i.data.attrs||r;t._attrsProxy&&De(t._attrsProxy,h,l.data&&l.data.attrs||r,t,"$attrs")&&(u=!0),t.$attrs=h,n=n||r;var f=t.$options._parentListeners;if(t._listenersProxy&&De(t._listenersProxy,n,f||r,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,En(t,n,f),e&&t.$options.props){Lt(!1);for(var d=t._props,p=t.$options._propKeys||[],g=0;g<p.length;g++){var m=p[g],v=t.$options.props;d[m]=Sr(m,v,e,t)}Lt(!0),t.$options.propsData=e}u&&(t.$slots=Te(o,i.context),t.$forceUpdate())}function kn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,kn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Rn(t,"activated")}}function Nn(t,e){if((!e||(t._directInactive=!0,!kn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Nn(t.$children[n]);Rn(t,"deactivated")}}function Rn(t,e,n,r){void 0===r&&(r=!0),At();var i=gt;r&&mt(t);var o=t.$options[e],s="".concat(e," hook");if(o)for(var a=0,c=o.length;a<c;a++)Qe(o[a],t,n||null,t,s);t._hasHookEvent&&t.$emit("hook:"+e),r&&mt(i),It()}var Ln=[],Mn=[],Pn={},jn=!1,$n=!1,Fn=0;function Vn(){Fn=Ln.length=Mn.length=0,Pn={},jn=$n=!1}var Un=0,Bn=Date.now;if(Z&&!et){var Hn=window.performance;Hn&&"function"===typeof Hn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return Hn.now()})}var Gn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function qn(){var t,e;for(Un=Bn(),$n=!0,Ln.sort(Gn),Fn=0;Fn<Ln.length;Fn++)t=Ln[Fn],t.before&&t.before(),e=t.id,Pn[e]=null,t.run();var n=Mn.slice(),r=Ln.slice();Vn(),Wn(n),Kn(r),Tt(),ht&&K.devtools&&ht.emit("flush")}function Kn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r&&r._watcher===n&&r._isMounted&&!r._isDestroyed&&Rn(r,"updated")}}function zn(t){t._inactive=!1,Mn.push(t)}function Wn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function Qn(t){var e=t.id;if(null==Pn[e]&&(t!==St.target||!t.noRecurse)){if(Pn[e]=!0,$n){var n=Ln.length-1;while(n>Fn&&Ln[n].id>t.id)n--;Ln.splice(n+1,0,t)}else Ln.push(t);jn||(jn=!0,cn(qn))}}function Xn(t){var e=t.$options.provide;if(e){var n=l(e)?e.call(t):e;if(!h(n))return;for(var r=Yt(t),i=pt?Reflect.ownKeys(n):Object.keys(n),o=0;o<i.length;o++){var s=i[o];Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(n,s))}}}function Yn(t){var e=Jn(t.$options.inject,t);e&&(Lt(!1),Object.keys(e).forEach((function(n){$t(t,n,e[n])})),Lt(!0))}function Jn(t,e){if(t){for(var n=Object.create(null),r=pt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var s=t[o].from;if(s in e._provided)n[o]=e._provided[s];else if("default"in t[o]){var a=t[o].default;n[o]=l(a)?a.call(e):a}else 0}}return n}}function Zn(t,e,n,o,s){var c,u=this,l=s.options;T(o,"_uid")?(c=Object.create(o),c._original=o):(c=o,o=o._original);var h=a(l._compiled),f=!h;this.data=t,this.props=e,this.children=n,this.parent=o,this.listeners=t.on||r,this.injections=Jn(l.inject,o),this.slots=function(){return u.$slots||Ae(o,t.scopedSlots,u.$slots=Te(n,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ae(o,t.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=Ae(o,t.scopedSlots,this.$slots)),l._scopeId?this._c=function(t,e,n,r){var s=Ge(c,t,e,n,r,f);return s&&!i(s)&&(s.fnScopeId=l._scopeId,s.fnContext=o),s}:this._c=function(t,e,n,r){return Ge(c,t,e,n,r,f)}}function tr(t,e,n,o,a){var c=t.options,u={},l=c.props;if(s(l))for(var h in l)u[h]=Sr(h,l,e||r);else s(n.attrs)&&nr(u,n.attrs),s(n.props)&&nr(u,n.props);var f=new Zn(n,u,a,o,t),d=c.render.call(null,f._c,f);if(d instanceof vt)return er(d,n,f.parent,c,f);if(i(d)){for(var p=oe(d)||[],g=new Array(p.length),m=0;m<p.length;m++)g[m]=er(p[m],n,f.parent,c,f);return g}}function er(t,e,n,r,i){var o=wt(t);return o.fnContext=n,o.fnOptions=r,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function nr(t,e){for(var n in e)t[A(n)]=e[n]}function rr(t){return t.name||t.__name||t._componentTag}Ee(Zn.prototype);var ir={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;ir.prepatch(n,n)}else{var r=t.componentInstance=ar(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),t.data.keepAlive&&(e._isMounted?zn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Nn(e,!0):e.$destroy())}},or=Object.keys(ir);function sr(t,e,n,r,i){if(!o(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(o(t.cid)&&(u=t,t=Ve(u,c),void 0===t))return Fe(u,e,n,r,i);e=e||{},Wr(t),s(e.model)&&lr(t.options,e);var l=ne(e,t,i);if(a(t.options.functional))return tr(t,l,e,n,r);var f=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}cr(e);var p=rr(t.options)||i,g=new vt("vue-component-".concat(t.cid).concat(p?"-".concat(p):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:f,tag:i,children:r},u);return g}}}function ar(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cr(t){for(var e=t.hook||(t.hook={}),n=0;n<or.length;n++){var r=or[n],i=e[r],o=ir[r];i===o||i&&i._merged||(e[r]=i?ur(o,i):o)}}function ur(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function lr(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[r],c=e.model.callback;s(a)?(i(a)?-1===a.indexOf(c):a!==c)&&(o[r]=[c].concat(a)):o[r]=c}var hr=P,fr=K.optionMergeStrategies;function dr(t,e,n){if(void 0===n&&(n=!0),!e)return t;for(var r,i,o,s=pt?Reflect.ownKeys(e):Object.keys(e),a=0;a<s.length;a++)r=s[a],"__ob__"!==r&&(i=t[r],o=e[r],n&&T(t,r)?i!==o&&d(i)&&d(o)&&dr(i,o):Ft(t,r,o));return t}function pr(t,e,n){return n?function(){var r=l(e)?e.call(n,n):e,i=l(t)?t.call(n,n):t;return r?dr(r,i):i}:e?t?function(){return dr(l(e)?e.call(this,this):e,l(t)?t.call(this,this):t)}:e:t}function gr(t,e){var n=e?t?t.concat(e):i(e)?e:[e]:t;return n?mr(n):n}function mr(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function vr(t,e,n,r){var i=Object.create(t||null);return e?L(i,e):i}fr.data=function(t,e,n){return n?pr(t,e,n):e&&"function"!==typeof e?t:pr(t,e)},q.forEach((function(t){fr[t]=gr})),G.forEach((function(t){fr[t+"s"]=vr})),fr.watch=function(t,e,n,r){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var s in L(o,t),e){var a=o[s],c=e[s];a&&!i(a)&&(a=[a]),o[s]=a?a.concat(c):i(c)?c:[c]}return o},fr.props=fr.methods=fr.inject=fr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return L(i,t),e&&L(i,e),i},fr.provide=function(t,e){return t?function(){var n=Object.create(null);return dr(n,l(t)?t.call(this):t),e&&dr(n,l(e)?e.call(this):e,!1),n}:e};var yr=function(t,e){return void 0===e?t:e};function br(t,e){var n=t.props;if(n){var r,o,s,a={};if(i(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(s=A(o),a[s]={type:null})}else if(d(n))for(var c in n)o=n[c],s=A(c),a[s]=d(o)?o:{type:o};else 0;t.props=a}}function wr(t,e){var n=t.inject;if(n){var r=t.inject={};if(i(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(d(n))for(var s in n){var a=n[s];r[s]=d(a)?L({from:s},a):{from:a}}else 0}}function _r(t){var e=t.directives;if(e)for(var n in e){var r=e[n];l(r)&&(e[n]={bind:r,update:r})}}function Er(t,e,n){if(l(e)&&(e=e.options),br(e,n),wr(e,n),_r(e),!e._base&&(e.extends&&(t=Er(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Er(t,e.mixins[r],n);var o,s={};for(o in t)a(o);for(o in e)T(t,o)||a(o);function a(r){var i=fr[r]||yr;s[r]=i(t[r],e[r],n,r)}return s}function Tr(t,e,n,r){if("string"===typeof n){var i=t[e];if(T(i,n))return i[n];var o=A(n);if(T(i,o))return i[o];var s=I(o);if(T(i,s))return i[s];var a=i[n]||i[o]||i[s];return a}}function Sr(t,e,n,r){var i=e[t],o=!T(n,t),s=n[t],a=xr(Boolean,i.type);if(a>-1)if(o&&!T(i,"default"))s=!1;else if(""===s||s===x(t)){var c=xr(String,i.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Cr(r,i,t);var u=Rt;Lt(!0),jt(s),Lt(u)}return s}function Cr(t,e,n){if(T(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:l(r)&&"Function"!==Ir(e.type)?r.call(t):r}}var Ar=/^\s*function (\w+)/;function Ir(t){var e=t&&t.toString().match(Ar);return e?e[1]:""}function Or(t,e){return Ir(t)===Ir(e)}function xr(t,e){if(!i(e))return Or(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Or(e[n],t))return n;return-1}var kr={enumerable:!0,configurable:!0,get:P,set:P};function Dr(t,e,n){kr.get=function(){return this[e][n]},kr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,kr)}function Nr(t){var e=t.$options;if(e.props&&Rr(t,e.props),xe(t),e.methods&&Ur(t,e.methods),e.data)Lr(t);else{var n=jt(t._data={});n&&n.vmCount++}e.computed&&jr(t,e.computed),e.watch&&e.watch!==at&&Br(t,e.watch)}function Rr(t,e){var n=t.$options.propsData||{},r=t._props=Bt({}),i=t.$options._propKeys=[],o=!t.$parent;o||Lt(!1);var s=function(o){i.push(o);var s=Sr(o,e,n,t);$t(r,o,s),o in t||Dr(t,"_props",o)};for(var a in e)s(a);Lt(!0)}function Lr(t){var e=t.$options.data;e=t._data=l(e)?Mr(e,t):e||{},d(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var o=n[i];0,r&&T(r,o)||W(o)||Dr(t,"_data",o)}var s=jt(e);s&&s.vmCount++}function Mr(t,e){At();try{return t.call(e,e)}catch(Ys){return We(Ys,e,"data()"),{}}finally{It()}}var Pr={lazy:!0};function jr(t,e){var n=t._computedWatchers=Object.create(null),r=lt();for(var i in e){var o=e[i],s=l(o)?o:o.get;0,r||(n[i]=new vn(t,s||P,P,Pr)),i in t||$r(t,i,o)}}function $r(t,e,n){var r=!lt();l(n)?(kr.get=r?Fr(e):Vr(n),kr.set=P):(kr.get=n.get?r&&!1!==n.cache?Fr(e):Vr(n.get):P,kr.set=n.set||P),Object.defineProperty(t,e,kr)}function Fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),St.target&&e.depend(),e.value}}function Vr(t){return function(){return t.call(this,this)}}function Ur(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:N(e[n],t)}function Br(t,e){for(var n in e){var r=e[n];if(i(r))for(var o=0;o<r.length;o++)Hr(t,n,r[o]);else Hr(t,n,r)}}function Hr(t,e,n,r){return d(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Gr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ft,t.prototype.$delete=Vt,t.prototype.$watch=function(t,e,n){var r=this;if(d(e))return Hr(r,t,e,n);n=n||{},n.user=!0;var i=new vn(r,t,e,n);if(n.immediate){var o='callback for immediate watcher "'.concat(i.expression,'"');At(),Qe(e,r,[i.value],r,o),It()}return function(){i.teardown()}}}var qr=0;function Kr(t){t.prototype._init=function(t){var e=this;e._uid=qr++,e._isVue=!0,e.__v_skip=!0,e._scope=new Qt(!0),e._scope._vm=!0,t&&t._isComponent?zr(e,t):e.$options=Er(Wr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),yn(e),Me(e),Rn(e,"beforeCreate",void 0,!1),Yn(e),Nr(e),Xn(e),Rn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function zr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Wr(t){var e=t.options;if(t.super){var n=Wr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Qr(t);i&&L(t.extendOptions,i),e=t.options=Er(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Qr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Xr(t){this._init(t)}function Yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=R(arguments,1);return n.unshift(this),l(t.install)?t.install.apply(t,n):l(t)&&t.apply(null,n),e.push(t),this}}function Jr(t){t.mixin=function(t){return this.options=Er(this.options,t),this}}function Zr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=rr(t)||rr(n.options);var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Er(n.options,t),s["super"]=n,s.options.props&&ti(s),s.options.computed&&ei(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,G.forEach((function(t){s[t]=n[t]})),o&&(s.options.components[o]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=L({},s.options),i[r]=s,s}}function ti(t){var e=t.options.props;for(var n in e)Dr(t.prototype,"_props",n)}function ei(t){var e=t.options.computed;for(var n in e)$r(t.prototype,n,e[n])}function ni(t){G.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&d(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&l(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ri(t){return t&&(rr(t.Ctor.options)||t.tag)}function ii(t,e){return i(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function oi(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var s=n[o];if(s){var a=s.name;a&&!e(a)&&si(n,o,r,i)}}}function si(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,_(n,e)}Kr(Xr),Gr(Xr),Tn(Xr),In(Xr),je(Xr);var ai=[String,RegExp,Array],ci={name:"keep-alive",abstract:!0,props:{include:ai,exclude:ai,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var o=r.tag,s=r.componentInstance,a=r.componentOptions;e[i]={name:ri(a),tag:o,componentInstance:s},n.push(i),this.max&&n.length>parseInt(this.max)&&si(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)si(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){oi(t,(function(t){return ii(e,t)}))})),this.$watch("exclude",(function(e){oi(t,(function(t){return!ii(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Ue(t),n=e&&e.componentOptions;if(n){var r=ri(n),i=this,o=i.include,s=i.exclude;if(o&&(!r||!ii(o,r))||s&&r&&ii(s,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},ui={KeepAlive:ci};function li(t){var e={get:function(){return K}};Object.defineProperty(t,"config",e),t.util={warn:hr,extend:L,mergeOptions:Er,defineReactive:$t},t.set=Ft,t.delete=Vt,t.nextTick=cn,t.observable=function(t){return jt(t),t},t.options=Object.create(null),G.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,L(t.options.components,ui),Yr(t),Jr(t),Zr(t),ni(t)}li(Xr),Object.defineProperty(Xr.prototype,"$isServer",{get:lt}),Object.defineProperty(Xr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Xr,"FunctionalRenderContext",{value:Zn}),Xr.version=hn;var hi=b("style,class"),fi=b("input,textarea,option,select,progress"),di=function(t,e,n){return"value"===n&&fi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},pi=b("contenteditable,draggable,spellcheck"),gi=b("events,caret,typing,plaintext-only"),mi=function(t,e){return _i(e)||"false"===e?"false":"contenteditable"===t&&gi(e)?e:"true"},vi=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),yi="http://www.w3.org/1999/xlink",bi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},wi=function(t){return bi(t)?t.slice(6,t.length):""},_i=function(t){return null==t||!1===t};function Ei(t){var e=t.data,n=t,r=t;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Ti(r.data,e));while(s(n=n.parent))n&&n.data&&(e=Ti(e,n.data));return Si(e.staticClass,e.class)}function Ti(t,e){return{staticClass:Ci(t.staticClass,e.staticClass),class:s(t.class)?[t.class,e.class]:e.class}}function Si(t,e){return s(t)||s(e)?Ci(t,Ai(e)):""}function Ci(t,e){return t?e?t+" "+e:t:e||""}function Ai(t){return Array.isArray(t)?Ii(t):h(t)?Oi(t):"string"===typeof t?t:""}function Ii(t){for(var e,n="",r=0,i=t.length;r<i;r++)s(e=Ai(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Oi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var xi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ki=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Di=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Ni=function(t){return ki(t)||Di(t)};function Ri(t){return Di(t)?"svg":"math"===t?"math":void 0}var Li=Object.create(null);function Mi(t){if(!Z)return!0;if(Ni(t))return!1;if(t=t.toLowerCase(),null!=Li[t])return Li[t];var e=document.createElement(t);return t.indexOf("-")>-1?Li[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Li[t]=/HTMLUnknownElement/.test(e.toString())}var Pi=b("text,number,password,search,email,tel,url");function ji(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function $i(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Fi(t,e){return document.createElementNS(xi[t],e)}function Vi(t){return document.createTextNode(t)}function Ui(t){return document.createComment(t)}function Bi(t,e,n){t.insertBefore(e,n)}function Hi(t,e){t.removeChild(e)}function Gi(t,e){t.appendChild(e)}function qi(t){return t.parentNode}function Ki(t){return t.nextSibling}function zi(t){return t.tagName}function Wi(t,e){t.textContent=e}function Qi(t,e){t.setAttribute(e,"")}var Xi=Object.freeze({__proto__:null,createElement:$i,createElementNS:Fi,createTextNode:Vi,createComment:Ui,insertBefore:Bi,removeChild:Hi,appendChild:Gi,parentNode:qi,nextSibling:Ki,tagName:zi,setTextContent:Wi,setStyleScope:Qi}),Yi={create:function(t,e){Ji(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ji(t,!0),Ji(e))},destroy:function(t){Ji(t,!0)}};function Ji(t,e){var n=t.data.ref;if(s(n)){var r=t.context,o=t.componentInstance||t.elm,a=e?null:o,c=e?void 0:o;if(l(n))Qe(n,r,[a],r,"template ref function");else{var u=t.data.refInFor,h="string"===typeof n||"number"===typeof n,f=qt(n),d=r.$refs;if(h||f)if(u){var p=h?d[n]:n.value;e?i(p)&&_(p,o):i(p)?p.includes(o)||p.push(o):h?(d[n]=[o],Zi(r,n,d[n])):n.value=[o]}else if(h){if(e&&d[n]!==o)return;d[n]=c,Zi(r,n,a)}else if(f){if(e&&n.value!==o)return;n.value=a}else 0}}}function Zi(t,e,n){var r=t._setupState;r&&T(r,e)&&(qt(r[e])?r[e].value=n:r[e]=n)}var to=new vt("",{},[]),eo=["create","activate","update","remove","destroy"];function no(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&s(t.data)===s(e.data)&&ro(t,e)||a(t.isAsyncPlaceholder)&&o(e.asyncFactory.error))}function ro(t,e){if("input"!==t.tag)return!0;var n,r=s(n=t.data)&&s(n=n.attrs)&&n.type,i=s(n=e.data)&&s(n=n.attrs)&&n.type;return r===i||Pi(r)&&Pi(i)}function io(t,e,n){var r,i,o={};for(r=e;r<=n;++r)i=t[r].key,s(i)&&(o[i]=r);return o}function oo(t){var e,n,r={},c=t.modules,l=t.nodeOps;for(e=0;e<eo.length;++e)for(r[eo[e]]=[],n=0;n<c.length;++n)s(c[n][eo[e]])&&r[eo[e]].push(c[n][eo[e]]);function h(t){return new vt(l.tagName(t).toLowerCase(),{},[],void 0,t)}function f(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=l.parentNode(t);s(e)&&l.removeChild(e,t)}function p(t,e,n,r,i,o,c){if(s(t.elm)&&s(o)&&(t=o[c]=wt(t)),t.isRootInsert=!i,!g(t,e,n,r)){var u=t.data,h=t.children,f=t.tag;s(f)?(t.elm=t.ns?l.createElementNS(t.ns,f):l.createElement(f,t),T(t),w(t,h,e),s(u)&&E(t,e),y(n,t.elm,r)):a(t.isComment)?(t.elm=l.createComment(t.text),y(n,t.elm,r)):(t.elm=l.createTextNode(t.text),y(n,t.elm,r))}}function g(t,e,n,r){var i=t.data;if(s(i)){var o=s(t.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(t,!1),s(t.componentInstance))return m(t,e),y(n,t.elm,r),a(o)&&v(t,e,n,r),!0}}function m(t,e){s(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(E(t,e),T(t)):(Ji(t),e.push(t))}function v(t,e,n,i){var o,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](to,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){s(t)&&(s(n)?l.parentNode(n)===t&&l.insertBefore(t,e,n):l.appendChild(t,e))}function w(t,e,n){if(i(e)){0;for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0,e,r)}else u(t.text)&&l.appendChild(t.elm,l.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return s(t.tag)}function E(t,n){for(var i=0;i<r.create.length;++i)r.create[i](to,t);e=t.data.hook,s(e)&&(s(e.create)&&e.create(to,t),s(e.insert)&&n.push(t))}function T(t){var e;if(s(e=t.fnScopeId))l.setStyleScope(t.elm,e);else{var n=t;while(n)s(e=n.context)&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e),n=n.parent}s(e=Sn)&&e!==t.context&&e!==t.fnContext&&s(e=e.$options._scopeId)&&l.setStyleScope(t.elm,e)}function S(t,e,n,r,i,o){for(;r<=i;++r)p(n[r],o,t,e,!1,n,r)}function C(t){var e,n,i=t.data;if(s(i))for(s(e=i.hook)&&s(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(s(e=t.children))for(n=0;n<t.children.length;++n)C(t.children[n])}function A(t,e,n){for(;e<=n;++e){var r=t[e];s(r)&&(s(r.tag)?(I(r),C(r)):d(r.elm))}}function I(t,e){if(s(e)||s(t.data)){var n,i=r.remove.length+1;for(s(e)?e.listeners+=i:e=f(t.elm,i),s(n=t.componentInstance)&&s(n=n._vnode)&&s(n.data)&&I(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);s(n=t.data.hook)&&s(n=n.remove)?n(t,e):e()}else d(t.elm)}function O(t,e,n,r,i){var a,c,u,h,f=0,d=0,g=e.length-1,m=e[0],v=e[g],y=n.length-1,b=n[0],w=n[y],_=!i;while(f<=g&&d<=y)o(m)?m=e[++f]:o(v)?v=e[--g]:no(m,b)?(k(m,b,r,n,d),m=e[++f],b=n[++d]):no(v,w)?(k(v,w,r,n,y),v=e[--g],w=n[--y]):no(m,w)?(k(m,w,r,n,y),_&&l.insertBefore(t,m.elm,l.nextSibling(v.elm)),m=e[++f],w=n[--y]):no(v,b)?(k(v,b,r,n,d),_&&l.insertBefore(t,v.elm,m.elm),v=e[--g],b=n[++d]):(o(a)&&(a=io(e,f,g)),c=s(b.key)?a[b.key]:x(b,e,f,g),o(c)?p(b,r,t,m.elm,!1,n,d):(u=e[c],no(u,b)?(k(u,b,r,n,d),e[c]=void 0,_&&l.insertBefore(t,u.elm,m.elm)):p(b,r,t,m.elm,!1,n,d)),b=n[++d]);f>g?(h=o(n[y+1])?null:n[y+1].elm,S(t,h,n,d,y,r)):d>y&&A(e,f,g)}function x(t,e,n,r){for(var i=n;i<r;i++){var o=e[i];if(s(o)&&no(t,o))return i}}function k(t,e,n,i,c,u){if(t!==e){s(e.elm)&&s(i)&&(e=i[c]=wt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))s(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,d=e.data;s(d)&&s(f=d.hook)&&s(f=f.prepatch)&&f(t,e);var p=t.children,g=e.children;if(s(d)&&_(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);s(f=d.hook)&&s(f=f.update)&&f(t,e)}o(e.text)?s(p)&&s(g)?p!==g&&O(h,p,g,n,u):s(g)?(s(t.text)&&l.setTextContent(h,""),S(h,null,g,0,g.length-1,n)):s(p)?A(p,0,p.length-1):s(t.text)&&l.setTextContent(h,""):t.text!==e.text&&l.setTextContent(h,e.text),s(d)&&s(f=d.hook)&&s(f=f.postpatch)&&f(t,e)}}}function D(t,e,n){if(a(n)&&s(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=b("attrs,class,staticClass,staticStyle,key");function R(t,e,n,r){var i,o=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,a(e.isComment)&&s(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(e,!0),s(i=e.componentInstance)))return m(e,n),!0;if(s(o)){if(s(u))if(t.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,f=0;f<u.length;f++){if(!h||!R(h,u[f],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(e,u,n);if(s(c)){var d=!1;for(var p in c)if(!N(p)){d=!0,E(e,n);break}!d&&c["class"]&&dn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,i){if(!o(e)){var c=!1,u=[];if(o(t))c=!0,p(e,u);else{var f=s(t.nodeType);if(!f&&no(t,e))k(t,e,u,null,null,i);else{if(f){if(1===t.nodeType&&t.hasAttribute(H)&&(t.removeAttribute(H),n=!0),a(n)&&R(t,e,u))return D(e,u,!0),t;t=h(t)}var d=t.elm,g=l.parentNode(d);if(p(e,u,d._leaveCb?null:g,l.nextSibling(d)),s(e.parent)){var m=e.parent,v=_(e);while(m){for(var y=0;y<r.destroy.length;++y)r.destroy[y](m);if(m.elm=e.elm,v){for(var b=0;b<r.create.length;++b)r.create[b](to,m);var w=m.data.hook.insert;if(w.merged)for(var E=1;E<w.fns.length;E++)w.fns[E]()}else Ji(m);m=m.parent}}s(g)?A([t],0,0):s(t.tag)&&C(t)}}return D(e,u,c),e.elm}s(t)&&C(t)}}var so={create:ao,update:ao,destroy:function(t){ao(t,to)}};function ao(t,e){(t.data.directives||e.data.directives)&&co(t,e)}function co(t,e){var n,r,i,o=t===to,s=e===to,a=lo(t.data.directives,t.context),c=lo(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,fo(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(fo(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)fo(u[n],"inserted",e,t)};o?ee(e,"insert",h):h()}if(l.length&&ee(e,"postpatch",(function(){for(var n=0;n<l.length;n++)fo(l[n],"componentUpdated",e,t)})),!o)for(n in a)c[n]||fo(a[n],"unbind",t,t,s)}var uo=Object.create(null);function lo(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++){if(r=t[n],r.modifiers||(r.modifiers=uo),i[ho(r)]=r,e._setupState&&e._setupState.__sfc){var o=r.def||Tr(e,"_setupState","v-"+r.name);r.def="function"===typeof o?{bind:o,update:o}:o}r.def=r.def||Tr(e.$options,"directives",r.name,!0)}return i}function ho(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function fo(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(Ys){We(Ys,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var po=[Yi,so];function go(t,e){var n=e.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!o(t.data.attrs)||!o(e.data.attrs))){var r,i,c,u=e.elm,l=t.data.attrs||{},h=e.data.attrs||{};for(r in(s(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=L({},h)),h)i=h[r],c=l[r],c!==i&&mo(u,r,i,e.data.pre);for(r in(et||rt)&&h.value!==l.value&&mo(u,"value",h.value),l)o(h[r])&&(bi(r)?u.removeAttributeNS(yi,wi(r)):pi(r)||u.removeAttribute(r))}}function mo(t,e,n,r){r||t.tagName.indexOf("-")>-1?vo(t,e,n):vi(e)?_i(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):pi(e)?t.setAttribute(e,mi(e,n)):bi(e)?_i(n)?t.removeAttributeNS(yi,wi(e)):t.setAttributeNS(yi,e,n):vo(t,e,n)}function vo(t,e,n){if(_i(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var yo={create:go,update:go};function bo(t,e){var n=e.elm,r=e.data,i=t.data;if(!(o(r.staticClass)&&o(r.class)&&(o(i)||o(i.staticClass)&&o(i.class)))){var a=Ei(e),c=n._transitionClasses;s(c)&&(a=Ci(a,Ai(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var wo,_o={create:bo,update:bo},Eo="__r",To="__c";function So(t){if(s(t[Eo])){var e=et?"change":"input";t[e]=[].concat(t[Eo],t[e]||[]),delete t[Eo]}s(t[To])&&(t.change=[].concat(t[To],t.change||[]),delete t[To])}function Co(t,e,n){var r=wo;return function i(){var o=e.apply(null,arguments);null!==o&&Oo(t,i,n,r)}}var Ao=Ze&&!(st&&Number(st[1])<=53);function Io(t,e,n,r){if(Ao){var i=Un,o=e;e=o._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return o.apply(this,arguments)}}wo.addEventListener(t,e,ct?{capture:n,passive:r}:n)}function Oo(t,e,n,r){(r||wo).removeEventListener(t,e._wrapper||e,n)}function xo(t,e){if(!o(t.data.on)||!o(e.data.on)){var n=e.data.on||{},r=t.data.on||{};wo=e.elm||t.elm,So(n),te(n,r,Io,Oo,Co,e.context),wo=void 0}}var ko,Do={create:xo,update:xo,destroy:function(t){return xo(t,to)}};function No(t,e){if(!o(t.data.domProps)||!o(e.data.domProps)){var n,r,i=e.elm,c=t.data.domProps||{},u=e.data.domProps||{};for(n in(s(u.__ob__)||a(u._v_attr_proxy))&&(u=e.data.domProps=L({},u)),c)n in u||(i[n]="");for(n in u){if(r=u[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),r===c[n])continue;1===i.childNodes.length&&i.removeChild(i.childNodes[0])}if("value"===n&&"PROGRESS"!==i.tagName){i._value=r;var l=o(r)?"":String(r);Ro(i,l)&&(i.value=l)}else if("innerHTML"===n&&Di(i.tagName)&&o(i.innerHTML)){ko=ko||document.createElement("div"),ko.innerHTML="<svg>".concat(r,"</svg>");var h=ko.firstChild;while(i.firstChild)i.removeChild(i.firstChild);while(h.firstChild)i.appendChild(h.firstChild)}else if(r!==c[n])try{i[n]=r}catch(Ys){}}}}function Ro(t,e){return!t.composing&&("OPTION"===t.tagName||Lo(t,e)||Mo(t,e))}function Lo(t,e){var n=!0;try{n=document.activeElement!==t}catch(Ys){}return n&&t.value!==e}function Mo(t,e){var n=t.value,r=t._vModifiers;if(s(r)){if(r.number)return y(n)!==y(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var Po={create:No,update:No},jo=S((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function $o(t){var e=Fo(t.style);return t.staticStyle?L(t.staticStyle,e):e}function Fo(t){return Array.isArray(t)?M(t):"string"===typeof t?jo(t):t}function Vo(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=$o(i.data))&&L(r,n)}(n=$o(t.data))&&L(r,n);var o=t;while(o=o.parent)o.data&&(n=$o(o.data))&&L(r,n);return r}var Uo,Bo=/^--/,Ho=/\s*!important$/,Go=function(t,e,n){if(Bo.test(e))t.style.setProperty(e,n);else if(Ho.test(n))t.style.setProperty(x(e),n.replace(Ho,""),"important");else{var r=Ko(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},qo=["Webkit","Moz","ms"],Ko=S((function(t){if(Uo=Uo||document.createElement("div").style,t=A(t),"filter"!==t&&t in Uo)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<qo.length;n++){var r=qo[n]+e;if(r in Uo)return r}}));function zo(t,e){var n=e.data,r=t.data;if(!(o(n.staticStyle)&&o(n.style)&&o(r.staticStyle)&&o(r.style))){var i,a,c=e.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,f=Fo(e.data.style)||{};e.data.normalizedStyle=s(f.__ob__)?L({},f):f;var d=Vo(e,!0);for(a in h)o(d[a])&&Go(c,a,"");for(a in d)i=d[a],i!==h[a]&&Go(c,a,null==i?"":i)}}var Wo={create:zo,update:zo},Qo=/\s+/;function Xo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Qo).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Yo(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Qo).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Jo(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&L(e,Zo(t.name||"v")),L(e,t),e}return"string"===typeof t?Zo(t):void 0}}var Zo=S((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),ts=Z&&!nt,es="transition",ns="animation",rs="transition",is="transitionend",os="animation",ss="animationend";ts&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(rs="WebkitTransition",is="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(os="WebkitAnimation",ss="webkitAnimationEnd"));var as=Z?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function cs(t){as((function(){as(t)}))}function us(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Xo(t,e))}function ls(t,e){t._transitionClasses&&_(t._transitionClasses,e),Yo(t,e)}function hs(t,e,n){var r=ds(t,e),i=r.type,o=r.timeout,s=r.propCount;if(!i)return n();var a=i===es?is:ss,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=s&&u()};setTimeout((function(){c<s&&u()}),o+1),t.addEventListener(a,l)}var fs=/\b(transform|all)(,|$)/;function ds(t,e){var n,r=window.getComputedStyle(t),i=(r[rs+"Delay"]||"").split(", "),o=(r[rs+"Duration"]||"").split(", "),s=ps(i,o),a=(r[os+"Delay"]||"").split(", "),c=(r[os+"Duration"]||"").split(", "),u=ps(a,c),l=0,h=0;e===es?s>0&&(n=es,l=s,h=o.length):e===ns?u>0&&(n=ns,l=u,h=c.length):(l=Math.max(s,u),n=l>0?s>u?es:ns:null,h=n?n===es?o.length:c.length:0);var f=n===es&&fs.test(r[rs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:f}}function ps(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return gs(e)+gs(t[n])})))}function gs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ms(t,e){var n=t.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=Jo(t.data.transition);if(!o(r)&&!s(n._enterCb)&&1===n.nodeType){var i=r.css,a=r.type,c=r.enterClass,u=r.enterToClass,f=r.enterActiveClass,d=r.appearClass,p=r.appearToClass,g=r.appearActiveClass,m=r.beforeEnter,v=r.enter,b=r.afterEnter,w=r.enterCancelled,_=r.beforeAppear,E=r.appear,T=r.afterAppear,S=r.appearCancelled,C=r.duration,A=Sn,I=Sn.$vnode;while(I&&I.parent)A=I.context,I=I.parent;var O=!A._isMounted||!t.isRootInsert;if(!O||E||""===E){var x=O&&d?d:c,k=O&&g?g:f,D=O&&p?p:u,N=O&&_||m,R=O&&l(E)?E:v,L=O&&T||b,M=O&&S||w,P=y(h(C)?C.enter:C);0;var j=!1!==i&&!nt,$=bs(R),F=n._enterCb=U((function(){j&&(ls(n,D),ls(n,k)),F.cancelled?(j&&ls(n,x),M&&M(n)):L&&L(n),n._enterCb=null}));t.data.show||ee(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),R&&R(n,F)})),N&&N(n),j&&(us(n,x),us(n,k),cs((function(){ls(n,x),F.cancelled||(us(n,D),$||(ys(P)?setTimeout(F,P):hs(n,a,F)))}))),t.data.show&&(e&&e(),R&&R(n,F)),j||$||F()}}}function vs(t,e){var n=t.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=Jo(t.data.transition);if(o(r)||1!==n.nodeType)return e();if(!s(n._leaveCb)){var i=r.css,a=r.type,c=r.leaveClass,u=r.leaveToClass,l=r.leaveActiveClass,f=r.beforeLeave,d=r.leave,p=r.afterLeave,g=r.leaveCancelled,m=r.delayLeave,v=r.duration,b=!1!==i&&!nt,w=bs(d),_=y(h(v)?v.leave:v);0;var E=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(ls(n,u),ls(n,l)),E.cancelled?(b&&ls(n,c),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));m?m(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),f&&f(n),b&&(us(n,c),us(n,l),cs((function(){ls(n,c),E.cancelled||(us(n,u),w||(ys(_)?setTimeout(E,_):hs(n,a,E)))}))),d&&d(n,E),b||w||E())}}function ys(t){return"number"===typeof t&&!isNaN(t)}function bs(t){if(o(t))return!1;var e=t.fns;return s(e)?bs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function ws(t,e){!0!==e.data.show&&ms(e)}var _s=Z?{create:ws,activate:ws,remove:function(t,e){!0!==t.data.show?vs(t,e):e()}}:{},Es=[yo,_o,Do,Po,Wo,_s],Ts=Es.concat(po),Ss=oo({nodeOps:Xi,modules:Ts});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Ns(t,"input")}));var Cs={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?ee(n,"postpatch",(function(){Cs.componentUpdated(t,e,n)})):As(t,e,n.context),t._vOptions=[].map.call(t.options,xs)):("textarea"===n.tag||Pi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",ks),t.addEventListener("compositionend",Ds),t.addEventListener("change",Ds),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){As(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,xs);if(i.some((function(t,e){return!F(t,r[e])}))){var o=t.multiple?e.value.some((function(t){return Os(t,i)})):e.value!==e.oldValue&&Os(e.value,i);o&&Ns(t,"change")}}}};function As(t,e,n){Is(t,e,n),(et||rt)&&setTimeout((function(){Is(t,e,n)}),0)}function Is(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,s,a=0,c=t.options.length;a<c;a++)if(s=t.options[a],i)o=V(r,xs(s))>-1,s.selected!==o&&(s.selected=o);else if(F(xs(s),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function Os(t,e){return e.every((function(e){return!F(e,t)}))}function xs(t){return"_value"in t?t._value:t.value}function ks(t){t.target.composing=!0}function Ds(t){t.target.composing&&(t.target.composing=!1,Ns(t.target,"input"))}function Ns(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Rs(t){return!t.componentInstance||t.data&&t.data.transition?t:Rs(t.componentInstance._vnode)}var Ls={bind:function(t,e,n){var r=e.value;n=Rs(n);var i=n.data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,ms(n,(function(){t.style.display=o}))):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=Rs(n);var o=n.data&&n.data.transition;o?(n.data.show=!0,r?ms(n,(function(){t.style.display=t.__vOriginalDisplay})):vs(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},Ms={model:Cs,show:Ls},Ps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function js(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?js(Ue(e.children)):t}function $s(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var r in i)e[A(r)]=i[r];return e}function Fs(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Vs(t){while(t=t.parent)if(t.data.transition)return!0}function Us(t,e){return e.key===t.key&&e.tag===t.tag}var Bs=function(t){return t.tag||Ce(t)},Hs=function(t){return"show"===t.name},Gs={name:"transition",props:Ps,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Bs),n.length)){0;var r=this.mode;0;var i=n[0];if(Vs(this.$vnode))return i;var o=js(i);if(!o)return i;if(this._leaving)return Fs(t,i);var s="__transition-".concat(this._uid,"-");o.key=null==o.key?o.isComment?s+"comment":s+o.tag:u(o.key)?0===String(o.key).indexOf(s)?o.key:s+o.key:o.key;var a=(o.data||(o.data={})).transition=$s(this),c=this._vnode,l=js(c);if(o.data.directives&&o.data.directives.some(Hs)&&(o.data.show=!0),l&&l.data&&!Us(o,l)&&!Ce(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===r)return this._leaving=!0,ee(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Fs(t,i);if("in-out"===r){if(Ce(o))return c;var f,d=function(){f()};ee(a,"afterEnter",d),ee(a,"enterCancelled",d),ee(h,"delayLeave",(function(t){f=t}))}}return i}}},qs=L({tag:String,moveClass:String},Ps);delete qs.mode;var Ks={props:qs,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Cn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],s=$s(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=s;else;}if(r){var u=[],l=[];for(a=0;a<r.length;a++){c=r[a];c.data.transition=s,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(zs),t.forEach(Ws),t.forEach(Qs),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;us(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(is,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(is,t),n._moveCb=null,ls(n,e))})}})))},methods:{hasMove:function(t,e){if(!ts)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Yo(n,t)})),Xo(n,e),n.style.display="none",this.$el.appendChild(n);var r=ds(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function zs(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Ws(t){t.data.newPos=t.elm.getBoundingClientRect()}function Qs(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate(".concat(r,"px,").concat(i,"px)"),o.transitionDuration="0s"}}var Xs={Transition:Gs,TransitionGroup:Ks};Xr.config.mustUseProp=di,Xr.config.isReservedTag=Ni,Xr.config.isReservedAttr=hi,Xr.config.getTagNamespace=Ri,Xr.config.isUnknownElement=Mi,L(Xr.options.directives,Ms),L(Xr.options.components,Xs),Xr.prototype.__patch__=Z?Ss:P,Xr.prototype.$mount=function(t,e){return t=t&&Z?ji(t):void 0,On(this,t,e)},Z&&setTimeout((function(){K.devtools&&ht&&ht.emit("init",Xr)}),0)},3365:function(t,e,n){"use strict";function r(t,e){for(let n of Object.keys(e||{}))Object.defineProperty(t,n,{get:()=>e[n]})}function i(t){if(!t._vmdModuleName)throw new Error("ERR_GET_MODULE_NAME : Could not get module accessor.\n      Make sure your module has name, we can't make accessors for unnamed modules\n      i.e. @Module({ name: 'something' })");return`vuexModuleDecorators/${t._vmdModuleName}`}n.d(e,{Yl:function(){return m},aU:function(){return b},g4:function(){return o},mm:function(){return w},rT:function(){return s}});class o{constructor(t){this.actions=t.actions,this.mutations=t.mutations,this.state=t.state,this.getters=t.getters,this.namespaced=t.namespaced,this.modules=t.modules}}function s(t,e){const n=i(t);if(e&&e.getters[n])return e.getters[n];if(t._statics)return t._statics;const r=t._genStatic;if(!r)throw new Error("ERR_GET_MODULE_NO_STATICS : Could not get module accessor.\n      Make sure your module has name, we can't make accessors for unnamed modules\n      i.e. @Module({ name: 'something' })");const o=r(e);return e?e.getters[n]=o:t._statics=o,o}const a=["actions","getters","mutations","modules","state","namespaced","commit"];function c(t){const e=new t.prototype.constructor({}),n={};return Object.keys(e).forEach((t=>{if(-1===a.indexOf(t))e.hasOwnProperty(t)&&"function"!==typeof e[t]&&(n[t]=e[t]);else if("undefined"!==typeof e[t])throw new Error("ERR_RESERVED_STATE_KEY_USED: You cannot use the following\n        ['actions', 'getters', 'mutations', 'modules', 'state', 'namespaced', 'commit']\n        as fields in your module. These are reserved as they have special purpose in Vuex")})),n}function u(t,e,n){const r=e.stateFactory?t.state():t.state;Object.keys(r).forEach((t=>{r.hasOwnProperty(t)&&-1===["undefined","function"].indexOf(typeof r[t])&&Object.defineProperty(n,t,{get(){const r=e.name.split("/");let i=n.store.state;for(let t of r)i=i[t];return i[t]}})}))}function l(t,e,n){Object.keys(t.getters).forEach((r=>{t.namespaced?Object.defineProperty(n,r,{get(){return n.store.getters[`${e.name}/${r}`]}}):Object.defineProperty(n,r,{get(){return n.store.getters[r]}})}))}function h(t,e,n){Object.keys(t.mutations).forEach((r=>{t.namespaced?n[r]=function(...t){n.store.commit(`${e.name}/${r}`,...t)}:n[r]=function(...t){n.store.commit(r,...t)}}))}function f(t,e,n){Object.keys(t.actions).forEach((r=>{t.namespaced?n[r]=async function(...t){return n.store.dispatch(`${e.name}/${r}`,...t)}:n[r]=async function(...t){return n.store.dispatch(r,...t)}}))}function d(t,e){if(!e.name)throw new Error("Name of module not provided in decorator options");if(!e.store)throw new Error("Store not provided in decorator options when using dynamic option");e.store.registerModule(e.name,t,{preserveState:e.preserveState||!1})}function p(t,e){Object.getOwnPropertyNames(e.prototype).forEach((n=>{const i=Object.getOwnPropertyDescriptor(e.prototype,n);i.get&&t.getters&&(t.getters[n]=function(t,e,n,o){const s={context:{state:t,getters:e,rootState:n,rootGetters:o}};r(s,t),r(s,e);const a=i.get.call(s);return a})}))}function g(t){return function(e){const n=e,r=()=>c(n);n.state||(n.state=t&&t.stateFactory?r:r()),n.getters||(n.getters={}),n.namespaced||(n.namespaced=t&&t.namespaced);let i=Object.getPrototypeOf(n);while("VuexModule"!==i.name&&""!==i.name)p(n,i),i=Object.getPrototypeOf(i);p(n,n);const o=t;return o.name&&(Object.defineProperty(e,"_genStatic",{value:t=>{let e={store:t||o.store};if(!e.store)throw new Error("ERR_STORE_NOT_PROVIDED: To use getModule(), either the module\n            should be decorated with store in decorator, i.e. @Module({store: store}) or\n            store should be passed when calling getModule(), i.e. getModule(MyModule, this.$store)");return u(n,o,e),n.getters&&l(n,o,e),n.mutations&&h(n,o,e),n.actions&&f(n,o,e),e}}),Object.defineProperty(e,"_vmdModuleName",{value:o.name})),o.dynamic&&d(n,o),e}}function m(t){if("function"!==typeof t)return g(t);g({})(t)}const v={};function y(t){const{commit:e,rawError:n=!!v.rawError,root:o=!1}=t||{};return function(t,a,c){const u=t.constructor;u.hasOwnProperty("actions")||(u.actions=Object.assign({},u.actions));const l=c.value,h=async function(t,o){try{let n=null;if(u._genStatic){const e=i(u),r=t.rootGetters[e]?t.rootGetters[e]:s(u);r.context=t,n=await l.call(r,o)}else{const e={context:t};r(e,t.state),r(e,t.getters),n=await l.call(e,o)}return e&&t.commit(e,n),n}catch(c){throw n?c:new Error('ERR_ACTION_ACCESS_UNDEFINED: Are you trying to access this.someMutation() or this.someGetter inside an @Action? \nThat works only in dynamic modules. \nIf not dynamic use this.context.commit("mutationName", payload) and this.context.getters["getterName"]\n'+new Error(`Could not perform action ${a.toString()}`).stack+"\n"+c.stack)}};u.actions[a]=o?{root:o,handler:h}:h}}function b(t,e,n){if(!e&&!n)return y(t);y()(t,e,n)}function w(t,e,n){const r=t.constructor;r.hasOwnProperty("mutations")||(r.mutations=Object.assign({},r.mutations));const i=n.value,o=function(t,e){i.call(t,e)};r.mutations[e]=o}},3822:function(t,e,n){"use strict";n(7658),n(541);
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function r(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}var i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{},o=i.__VUE_DEVTOOLS_GLOBAL_HOOK__;function s(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){o.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){o.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var r=Array.isArray(t)?[]:{};return e.push({original:t,copy:r}),Object.keys(t).forEach((function(n){r[n]=c(t[n],e)})),r}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function f(t,e){return function(){return t(e)}}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.hasChild=function(t){return t in this._children},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){u(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,p);var g=function(t){this.register([],t,!1)};function m(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;m(t.concat(r),e.getChild(r),n.modules[r])}}g.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},g.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},g.prototype.update=function(t){m([],this.root,t)},g.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new d(e,n);if(0===t.length)this.root=i;else{var o=this.get(t.slice(0,-1));o.addChild(t[t.length-1],i)}e.modules&&u(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},g.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},g.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&N(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new g(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var i=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;T(this,u,[],this._modules.root),E(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&s(this)},b={state:{configurable:!0}};function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;T(t,n,[],t._modules.root,!0),E(t,n,e)}function E(t,e,n){var r=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};u(i,(function(e,n){o[n]=f(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var s=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:o}),v.config.silent=s,t.strict&&x(t),r&&(n&&t._withCommit((function(){r._data.$$state=null})),v.nextTick((function(){return r.$destroy()})))}function T(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=k(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,r.state)}))}var u=r.context=S(t,s,n);r.forEachMutation((function(e,n){var r=s+n;A(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,i=e.handler||e;I(t,r,i,u)})),r.forEachGetter((function(e,n){var r=s+n;O(t,r,e,u)})),r.forEachChild((function(r,o){T(t,e,n.concat(o),r,i)}))}function S(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var o=D(n,r,i),s=o.payload,a=o.options,c=o.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,i){var o=D(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return C(t,e)}},state:{get:function(){return k(t.state,n)}}}),i}function C(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function A(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function I(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return h(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function x(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function k(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function N(t){v&&t===v||(v=t,r(v))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){0},y.prototype.commit=function(t,e,n){var r=this,i=D(t,e,n),o=i.type,s=i.payload,a=(i.options,{type:o,payload:s}),c=this._mutations[o];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},y.prototype.dispatch=function(t,e){var n=this,r=D(t,e),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(o)}))):a[0](o);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch((function(){return t(r.state,r.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),T(this,this.state,t,this._modules.get(t),n.preserveState),E(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=k(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,b);var R=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=U(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),L=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var o=U(this.$store,"mapMutations",t);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),M=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||U(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n})),P=V((function(t,e){var n={};return $(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var o=U(this.$store,"mapActions",t);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n})),j=function(t){return{mapState:R.bind(null,t),mapGetters:M.bind(null,t),mapMutations:L.bind(null,t),mapActions:P.bind(null,t)}};function $(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||l(t)}function V(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function U(t,e,n){var r=t._modulesNamespaceMap[n];return r}function B(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var r=t.transformer;void 0===r&&(r=function(t){return t});var i=t.mutationTransformer;void 0===i&&(i=function(t){return t});var o=t.actionFilter;void 0===o&&(o=function(t,e){return!0});var s=t.actionTransformer;void 0===s&&(s=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,o){var s=c(o);if(n(t,h,s)){var a=q(),u=i(t),f="mutation "+t.type+a;H(l,f,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",r(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",r(s)),G(l)}h=s})),u&&t.subscribeAction((function(t,n){if(o(t,n)){var r=q(),i=s(t),a="action "+t.type+r;H(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",i),G(l)}})))}}function H(t,e,n){var r=n?t.groupCollapsed:t.group;try{r.call(t,e)}catch(i){t.log(e)}}function G(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function q(){var t=new Date;return" @ "+z(t.getHours(),2)+":"+z(t.getMinutes(),2)+":"+z(t.getSeconds(),2)+"."+z(t.getMilliseconds(),3)}function K(t,e){return new Array(e+1).join(t)}function z(t,e){return K("0",e-t.toString().length)+t}var W={Store:y,install:N,version:"3.6.2",mapState:R,mapMutations:L,mapGetters:M,mapActions:P,createNamespacedHelpers:j,createLogger:B};e["ZP"]=W},2482:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},1804:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return mt},KN:function(){return yt}});n(7658);var r=n(7142),i=n(5168),o=n(223);n(2801);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{e(E(t.result)),r()},o=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{e(),r()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),s(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{o&&t.addEventListener("close",(()=>o())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],I=new Map;function O(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!C.includes(n))return;const o=async function(t,...e){const o=this.transaction(t,i?"readwrite":"readonly");let s=o.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),i&&o.done]))[0]};return I.set(e,o),o}b((t=>({...t,get:(e,n,r)=>O(e,n)||t.get(e,n,r),has:(e,n)=>!!O(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class x{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(k(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function k(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const D="@firebase/app",N="0.8.4",R=new i.Yd("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",j="@firebase/app-check-compat",$="@firebase/app-check",F="@firebase/auth",V="@firebase/auth-compat",U="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",G="@firebase/functions-compat",q="@firebase/installations",K="@firebase/installations-compat",z="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.14.0",ot="[DEFAULT]",st={[D]:"fire-core",[L]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[$]:"fire-app-check",[j]:"fire-app-check-compat",[F]:"fire-auth",[V]:"fire-auth-compat",[U]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[G]:"fire-fn-compat",[q]:"fire-iid",[K]:"fire-iid-compat",[z]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new o.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=it;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.aH)()),!n)throw dt.create("no-options");const a=at.get(s);if(a){if((0,o.vZ)(n,a.options)&&(0,o.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(s,u),u}function vt(t=ot){const e=at.get(t);if(!e&&t===ot)return mt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let o=null!==(i=st[t])&&void 0!==i?i:t;n&&(o+=`-${n}`);const s=o.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${o}" with version "${e}":`];return s&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void R.warn(t.join(" "))}lt(new r.wA(`${o}-version`,(()=>({library:o,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",wt=1,_t="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=S(bt,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function St(t){var e;try{const e=await Tt();return e.transaction(_t).objectStore(_t).get(At(t))}catch(n){if(n instanceof o.ZR)R.warn(n.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});R.warn(t.message)}}}async function Ct(t,e){var n;try{const n=await Tt(),r=n.transaction(_t,"readwrite"),i=r.objectStore(_t);return await i.put(e,At(t)),r.done}catch(r){if(r instanceof o.ZR)R.warn(r.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});R.warn(t.message)}}}function At(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=1024,Ot=2592e6;class xt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=kt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Ot})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=kt(),{heartbeatsToSend:e,unsentEntries:n}=Dt(this._heartbeatsCache.heartbeats),r=(0,o.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function kt(){const t=new Date;return t.toISOString().substring(0,10)}function Dt(t,e=It){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Rt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.hl)()&&(0,o.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await St(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Rt(t){return(0,o.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){lt(new r.wA("platform-logger",(t=>new x(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new xt(t)),"PRIVATE")),yt(D,N,t),yt(D,N,"esm2017"),yt("fire-js","")}Lt("")},7142:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=o){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=o){return this.instances.has(t)}getOptions(t=o){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,o]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=o){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===o?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.be8d9ce8.js.map