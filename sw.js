if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>i(e,n),o={module:{uri:n},exports:a,require:c};s[n]=Promise.all(r.map((e=>o[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-8b237a3f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"cc0c21c33e86af0e4ca7a05db73e5f6b"},{url:"assets/_...all_.95efef2a.js",revision:null},{url:"assets/app.847f61b1.js",revision:null},{url:"assets/centered.7d71c4fd.js",revision:null},{url:"assets/centered.7e85bd20.css",revision:null},{url:"assets/index.794a3ece.js",revision:null},{url:"assets/index.8f3f0d85.css",revision:null},{url:"assets/index.f8b96e8c.css",revision:null},{url:"assets/privacy-policy.077a99cc.js",revision:null},{url:"assets/privacy-policy.4df0be3d.css",revision:null},{url:"assets/terms.136ca182.css",revision:null},{url:"assets/terms.2aba7300.js",revision:null},{url:"assets/virtual_pwa-register.8e8661b3.js",revision:null},{url:"assets/workbox-window.prod.es5.f4b3e527.js",revision:null},{url:"de.html",revision:"65e06ec1f3f28f0a863eb19292fe6aa0"},{url:"de/privacy-policy.html",revision:"98509c8b164847b3f445477557aac6eb"},{url:"de/terms.html",revision:"338f31e433ca772f3df851d8311a4810"},{url:"en.html",revision:"f0f6ea32cb1022b045b06def015622e0"},{url:"en/privacy-policy.html",revision:"494174d0cd1d851117910572089cdae1"},{url:"en/terms.html",revision:"6b8f949350b7be2b62c553e77b5c16cb"},{url:"index.html",revision:"6582c3435a663da78a4a893c2c38683d"},{url:"pl.html",revision:"f985d25d4182d2368c9847cb66d34157"},{url:"pl/privacy-policy.html",revision:"87b4c8269352f891f1d611b05d1f4a42"},{url:"pl/terms.html",revision:"0a5affb6f65dce3d8ab6a711a5adbf4c"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"d0f4bd53a92b341482d7df7532e786a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
