!function(e){var t={};function n(c){if(t[c])return t[c].exports;var s=t[c]={i:c,l:!1,exports:{}};return e[c].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:c})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["client/b57701502f6cafe5752f/_.0.js","client/b57701502f6cafe5752f/_5xx.1.js","client/b57701502f6cafe5752f/_4xx.2.js","client/b57701502f6cafe5752f/main.js"].concat(["favicon.ico","global.css","LICENSE","manifest.json","README.md","svelte-logo-192.png","svelte-logo-512.png","tachyons.min.css"]),s=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1524769333880").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1524769333880"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):e.respondWith(caches.open("offline1524769333880").then(async t=>{try{"only-if-cache"===e.request.cache&&(e.request.mode="same-origin");const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}]);