if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),d={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-ab24e45d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/app.63dcdf2a.js",revision:null},{url:"assets/index.48e3d216.css",revision:null},{url:"assets/virtual_pwa-register.38960bd8.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"index.html",revision:"11e9074a9e65de1ff9f8dffccec400ff"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"4a4f90b08950a9dafa93a73cfa151401"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
