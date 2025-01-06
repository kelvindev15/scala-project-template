(()=>{"use strict";var e,t,a,r,o,n={},f={};function c(e){var t=f[e];if(void 0!==t)return t.exports;var a=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,c),a.loaded=!0,a.exports}c.m=n,c.c=f,e=[],c.O=(t,a,r,o)=>{if(!a){var n=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var f=!0,d=0;d<a.length;d++)(!1&o||n>=o)&&Object.keys(c.O).every((e=>c.O[e](a[d])))?a.splice(d--,1):(f=!1,o<n&&(n=o));if(f){e.splice(l--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var n={};t=t||[null,a({}),a([]),a(a)];for(var f=2&r&&e;"object"==typeof f&&!~t.indexOf(f);f=a(f))Object.getOwnPropertyNames(f).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,c.d(o,n),o},c.d=(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,a)=>(c.f[a](e,t),t)),[])),c.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",98:"533a09ca",169:"cb266e9e",235:"a7456010",247:"e7b44176",262:"18c41134",401:"17896441",647:"5e95c892",709:"200d1c3a",717:"a7bd4aaa",724:"dff1c289",736:"e44a2883",742:"aba21aa0",748:"822bd8ab",795:"f3976560",863:"f55d3e7a",953:"1e4232ab",969:"14eb3368",974:"5c868d36",976:"0e384e19"}[e]||e)+"."+{42:"aace83c8",48:"2f775a1c",61:"8921ffde",98:"b9c23fb0",169:"f498f517",235:"47cad1bc",247:"c5336cc0",262:"89232b2d",341:"0ede52c4",401:"c111e275",647:"10278fa7",709:"6ac0603d",717:"ce0d6e57",724:"1822fa53",736:"4f88882a",742:"eb7bf6f2",748:"26e38c2b",795:"03620766",863:"3506aaa8",953:"ab818227",969:"8a56b0bb",974:"e82f6ac3",976:"99754e03"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="docs:",c.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var f,d;if(void 0!==a)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var u=i[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+a){f=u;break}}f||(d=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.setAttribute("data-webpack",o+a),f.src=e),r[e]=[t];var b=(t,a)=>{f.onerror=f.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),d&&document.head.appendChild(f)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/scala-project-template/",c.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61","533a09ca":"98",cb266e9e:"169",a7456010:"235",e7b44176:"247","18c41134":"262","5e95c892":"647","200d1c3a":"709",a7bd4aaa:"717",dff1c289:"724",e44a2883:"736",aba21aa0:"742","822bd8ab":"748",f3976560:"795",f55d3e7a:"863","1e4232ab":"953","14eb3368":"969","5c868d36":"974","0e384e19":"976"}[e]||e,c.p+c.u(e)},(()=>{var e={354:0,869:0};c.f.j=(t,a)=>{var r=c.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var n=c.p+c.u(t),f=new Error;c.l(n,(a=>{if(c.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,r[1](f)}}),"chunk-"+t,t)}},c.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,n=a[0],f=a[1],d=a[2],i=0;if(n.some((t=>0!==e[t]))){for(r in f)c.o(f,r)&&(c.m[r]=f[r]);if(d)var l=d(c)}for(t&&t(a);i<n.length;i++)o=n[i],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(l)},a=self.webpackChunkdocs=self.webpackChunkdocs||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();