if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let c={};const a=e=>i(e,l),d={module:{uri:l},exports:c,require:a};s[l]=Promise.all(r.map((e=>d[e]||a(e)))).then((e=>(n(...e),c)))}}define(["./workbox-8b237a3f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1e34f6cab146d5071f79cfc6227c5c8d"},{url:"assets/_...all_.65962cf4.js",revision:null},{url:"assets/app.1bf5b050.js",revision:null},{url:"assets/centered.364dc731.js",revision:null},{url:"assets/centered.7b47be9e.css",revision:null},{url:"assets/index.0de69dcc.css",revision:null},{url:"assets/index.83431f6c.js",revision:null},{url:"assets/index.f14a8d5b.css",revision:null},{url:"assets/privacy-policy.67515085.css",revision:null},{url:"assets/privacy-policy.c9ea4a4e.js",revision:null},{url:"assets/terms.19d2d697.js",revision:null},{url:"assets/terms.7d73e925.css",revision:null},{url:"assets/virtual_pwa-register.f8d9c3ac.js",revision:null},{url:"assets/workbox-window.prod.es5.f4b3e527.js",revision:null},{url:"de.html",revision:"f26cfb01ca13ddcd9163ef7dcb3d6fc9"},{url:"en.html",revision:"a01871875a9642f34345123b3153b69e"},{url:"index.html",revision:"7e007fdf340b8a4fe4c0f33d56d113de"},{url:"pl.html",revision:"18ef20666d40a95319cd4e27f1a4f7c1"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"d0f4bd53a92b341482d7df7532e786a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
