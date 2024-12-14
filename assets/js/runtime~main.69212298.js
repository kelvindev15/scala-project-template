(()=>{"use strict";var e,t,a,r,o,n={},c={};function d(e){var t=c[e];if(void 0!==t)return t.exports;var a=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=n,d.c=c,e=[],d.O=(t,a,r,o)=>{if(!a){var n=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,i=0;i<a.length;i++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](a[i])))?a.splice(i--,1):(c=!1,o<n&&(n=o));if(c){e.splice(l--,1);var f=r();void 0!==f&&(t=f)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[a,r,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};t=t||[null,a({}),a([]),a(a)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=a(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,d.d(o,n),o},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,a)=>(d.f[a](e,t),t)),[])),d.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",98:"533a09ca",169:"cb266e9e",235:"a7456010",247:"e7b44176",262:"18c41134",401:"17896441",647:"5e95c892",709:"200d1c3a",717:"a7bd4aaa",724:"dff1c289",736:"e44a2883",742:"aba21aa0",748:"822bd8ab",795:"f3976560",863:"f55d3e7a",953:"1e4232ab",969:"14eb3368",974:"5c868d36",976:"0e384e19"}[e]||e)+"."+{48:"be5e0574",61:"263c413a",98:"bb3912a6",169:"f498f517",235:"47cad1bc",237:"7663bed8",247:"c5336cc0",262:"f62ea1f4",401:"c77ac676",408:"0cae011d",647:"1dd55255",709:"6ac0603d",717:"2f0752e8",724:"6a9abb17",736:"3bed5d5c",742:"eb7bf6f2",748:"76464295",795:"2fbaa405",863:"ea3aa543",953:"6d3535b0",969:"a8a6c6b6",974:"6230fa77",976:"dc9cb1ac"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="docs:",d.l=(e,t,a,n)=>{if(r[e])r[e].push(t);else{var c,i;if(void 0!==a)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var u=f[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+a){c=u;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",o+a),c.src=e),r[e]=[t];var b=(t,a)=>{c.onerror=c.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=b.bind(null,c.onerror),c.onload=b.bind(null,c.onload),i&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/scala-project-template/",d.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61","533a09ca":"98",cb266e9e:"169",a7456010:"235",e7b44176:"247","18c41134":"262","5e95c892":"647","200d1c3a":"709",a7bd4aaa:"717",dff1c289:"724",e44a2883:"736",aba21aa0:"742","822bd8ab":"748",f3976560:"795",f55d3e7a:"863","1e4232ab":"953","14eb3368":"969","5c868d36":"974","0e384e19":"976"}[e]||e,d.p+d.u(e)},(()=>{var e={354:0,869:0};d.f.j=(t,a)=>{var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var n=d.p+d.u(t),c=new Error;d.l(n,(a=>{if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,r[1](c)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,n=a[0],c=a[1],i=a[2],f=0;if(n.some((t=>0!==e[t]))){for(r in c)d.o(c,r)&&(d.m[r]=c[r]);if(i)var l=i(d)}for(t&&t(a);f<n.length;f++)o=n[f],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(l)},a=self.webpackChunkdocs=self.webpackChunkdocs||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();