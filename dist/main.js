(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"/* * {\n    border: red 1px solid;\n} */\nbody{\n    height: 100vh;\n    background-color: rgb(250, 250, 250)\n    /* background-color: rgb(255, 249, 234) */\n}\n\n#content{\n    height: 100%;\n    display: grid;\n    grid-template-rows: 1fr 6fr 1fr;\n}\n\nheader{\n    display: grid;\n    grid-template-columns: 1fr 4fr 1fr;\n}\n\nheader ul{\n    display: flex;\n    justify-content: space-evenly;\n    list-style-type: none;\n\n}\n\nli{\n    display: grid;\n    align-items: end;\n    justify-items: center;\n}\n\n\nli img{\n    height: 100px;\n    grid-row: 1/2;\n    grid-column: 1/2;\n}\n\nli h2{\n    grid-row: 1/2;\n    grid-column: 1/2;\n}\n\nmain{\n    display: grid;\n    grid-row: 2/3;\n    justify-items: center;\n\n}\n\nmain p{\n    grid-row: 2/3;\n}\n\nmain img{\n    height: 400px;\n    grid-row: 1/2;\n}\n\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),h=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=n.p+"02f0153057ebe2054035.png",g=n.p+"459a4e5fbba0c913501d.svg";document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("#content");let t=function(){const e=document.createElement("header"),t=document.createElement("main"),n=document.createElement("footer"),r=document.createElement("h1"),a=document.createElement("ul"),o=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li");a.id="tabs",o.id="homeTab",i.id="menuTab",c.id="contactTab",console.log(c.id),console.log(c.id),o.classList.add("tab"),i.classList.add("tab"),c.classList.add("tab"),a.addEventListener("click",(e=>{const n=e.target.closest("li"),r=n.id;if(n.classList.contains("tab")){let e=l(r);t.appendChild(e.img),t.appendChild(e.content)}}));const s="./img/chickenPie.png",d="A chicken pie is a comforting dish featuring tender chicken pieces, vegetables, and aromatic herbs in a creamy sauce, all encased in a flaky pastry crust. It's a classic comfort food loved for its rich flavors and contrasting textures.";function l(e){t.innerHTML="";const n=new Image,r=document.createElement("p");return n.src=m,"homeTab"===e?r.textContent="Von's famous pies have taken the Netherlands by storm, becoming a sensation in a country more known for its practical cuisine than its culinary adventures. These pies are a stark contrast to the typical Dutch fare, which, let's face it, often prioritizes function over flair. With the arrival of Von's Pies, the Dutch have been pleasantly ambushed by a whirlwind of flavors and food with actual texture, making many wonder how they ever settled for frikandel and herring.\n            Each pie from Von's Pies is a culinary rebellion against the ordinary. Where traditional Dutch meals are comfortably predictable, Von's Pies are daringly unpredictable. Their crusts are not just flaky; they're an audacious escape from the monotony of deepfried noodle blocks and potato. The fillings? A far cry from the usual stamppot, they are a blend of the finest ingredients that could make even the most loyal Dutch foodie question their allegiance to their national staples. \n            The variety at Von's Pies is another delightful shock to the Dutch palate. From pies bursting with exotic meats to those brimming with fruits sweeter than a Dutch summer, Von's Pies treats each creation as a piece of edible art. These pies have become the talk of the town, outshining even the most traditional Dutch snacks. It's no longer just about filling the belly; it's about feeding the soul with something unexpectedly extraordinary.\n            ":"menuTab"===e?function(e,t){const n=document.createElement("div"),r=new Image,a=document.createElement("p");r.src=e,a.textContent=t,n.appendChild(r),n.appendChild(a)}(s,d):"contactTab"===e&&(r.textContent="contact"),{img:n,content:r}}function u(){const e=new Image;return e.src=g,e}const p=document.createElement("h2"),h=document.createElement("h2"),f=document.createElement("h2");r.textContent="Von's Pies",a.appendChild(o),a.appendChild(i),a.appendChild(c),p.textContent="Home",h.textContent="Menu",f.textContent="Contact",o.appendChild(u()),i.appendChild(u()),c.appendChild(u()),o.appendChild(p),i.appendChild(h),c.appendChild(f),e.appendChild(r),e.appendChild(a);let v=l();return t.appendChild(v.img),t.appendChild(v.content),{header:e,main:t,footer:n}}();e.appendChild(t.header),e.appendChild(t.main),e.appendChild(t.footer)}))})()})();