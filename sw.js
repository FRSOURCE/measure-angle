if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let a={};const d=e=>i(e,l),o={module:{uri:l},exports:a,require:d};s[l]=Promise.all(r.map((e=>o[e]||d(e)))).then((e=>(n(...e),a)))}}define(["./workbox-74eda642"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9c706c36f4c260e18682fb9213648382"},{url:"assets/_...all_.89fd3ed7.js",revision:null},{url:"assets/app.0cfd53b6.js",revision:null},{url:"assets/centered.534eb4a8.js",revision:null},{url:"assets/centered.55e492d6.css",revision:null},{url:"assets/index.5aa54d99.js",revision:null},{url:"assets/index.904154bc.css",revision:null},{url:"assets/index.e0649d2a.css",revision:null},{url:"assets/virtual_pwa-register.a8089bbe.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"de.html",revision:"13a3dc17413ad9859b0675bdf046cad7"},{url:"en.html",revision:"79619f449ef3ff68f2042291c39c40da"},{url:"index.html",revision:"4465beea92f842771b7cf23507ddb528"},{url:"pl.html",revision:"1dff3eb66e373045431431e118030e17"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"d0f4bd53a92b341482d7df7532e786a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
