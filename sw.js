if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>i(e,n),o={module:{uri:n},exports:a,require:c};s[n]=Promise.all(r.map((e=>o[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-8b237a3f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"a4f91f91329754bbb551a3a6a81e34ab"},{url:"assets/_...all_.cb7b5c69.js",revision:null},{url:"assets/app.46be516e.js",revision:null},{url:"assets/centered.43271b33.js",revision:null},{url:"assets/centered.7b47be9e.css",revision:null},{url:"assets/index.0de69dcc.css",revision:null},{url:"assets/index.5d0273cc.js",revision:null},{url:"assets/index.f14a8d5b.css",revision:null},{url:"assets/privacy-policy.4df0be3d.css",revision:null},{url:"assets/privacy-policy.b7476bb0.js",revision:null},{url:"assets/terms.136ca182.css",revision:null},{url:"assets/terms.b0ead972.js",revision:null},{url:"assets/virtual_pwa-register.09900150.js",revision:null},{url:"assets/workbox-window.prod.es5.f4b3e527.js",revision:null},{url:"de.html",revision:"a4136593ef1bcec5a4a7932aca4f6a8f"},{url:"de/privacy-policy.html",revision:"9a84cc156f06ff86016a40164b2257c5"},{url:"de/terms.html",revision:"1d7112837149c34b2bc182e9e174f85d"},{url:"en.html",revision:"267d571c73bbc3b43acf87255e18ad13"},{url:"en/privacy-policy.html",revision:"d647d3b4918c95e1dd861fc9a2797241"},{url:"en/terms.html",revision:"33ccf59f1d7447ef85836a495a27160c"},{url:"index.html",revision:"ad5128712d7c6a55c3afc8ec66355ef9"},{url:"pl.html",revision:"47297be2435e97147758df7aa46668f1"},{url:"pl/privacy-policy.html",revision:"4a075b10abd0b1b8e28db80d215ac172"},{url:"pl/terms.html",revision:"c3f14ff4f46aa92afac002665a66c9ed"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"d0f4bd53a92b341482d7df7532e786a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
