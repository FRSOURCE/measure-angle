if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),d={module:{uri:n},exports:c,require:a};s[n]=Promise.all(r.map((e=>d[e]||a(e)))).then((e=>(l(...e),c)))}}define(["./workbox-8b237a3f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"46f94856224772f68695b6a60602c2b2"},{url:"assets/_...all_.8dc50128.js",revision:null},{url:"assets/app.6590e3f2.js",revision:null},{url:"assets/centered.7e85bd20.css",revision:null},{url:"assets/centered.924151ef.js",revision:null},{url:"assets/index.00dd742f.css",revision:null},{url:"assets/index.1f3cacf5.js",revision:null},{url:"assets/index.6549f412.css",revision:null},{url:"assets/privacy-policy.4df0be3d.css",revision:null},{url:"assets/privacy-policy.93749d85.js",revision:null},{url:"assets/terms.1170c13c.js",revision:null},{url:"assets/terms.136ca182.css",revision:null},{url:"assets/virtual_pwa-register.b4670d88.js",revision:null},{url:"assets/workbox-window.prod.es5.f4b3e527.js",revision:null},{url:"de.html",revision:"c2f41ef0fef036c36e1ebffd3e7b8be5"},{url:"de/privacy-policy.html",revision:"05df5037571686f094a0b1a4d97adae0"},{url:"de/terms.html",revision:"8e696274b824b3afaa8937b3d38860da"},{url:"en.html",revision:"9c3030a31031edbddc3ab1fa849e1be9"},{url:"en/privacy-policy.html",revision:"6ddcc8825e7cdfacc19f85537c0a5855"},{url:"en/terms.html",revision:"436e9879a7737a2dc4dbd0cc7c8b7627"},{url:"index.html",revision:"4382c42dc0167472975232c61b0f0fcb"},{url:"pl.html",revision:"24b59bc4e59d15bfe8974cb0f5fabfc8"},{url:"pl/privacy-policy.html",revision:"17b2bf9dc7284b6db999b60f6a395017"},{url:"pl/terms.html",revision:"24df402485b0cea474075f12f4ee5a97"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"d0f4bd53a92b341482d7df7532e786a7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
