if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),d={module:{uri:n},exports:c,require:a};s[n]=Promise.all(r.map((e=>d[e]||a(e)))).then((e=>(l(...e),c)))}}define(["./workbox-58dda7d9"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"cbd049b2c2539191383ae7e2f4b492aa"},{url:"assets/_...all_-5b8c25f2.js",revision:null},{url:"assets/app-792155ec.js",revision:null},{url:"assets/centered-7b03a3bc.js",revision:null},{url:"assets/centered-7e85bd20.css",revision:null},{url:"assets/index-412f8d87.js",revision:null},{url:"assets/index-6549f412.css",revision:null},{url:"assets/index-d15e9aac.css",revision:null},{url:"assets/privacy-policy-67515085.css",revision:null},{url:"assets/privacy-policy-87b62835.js",revision:null},{url:"assets/terms-668366f7.js",revision:null},{url:"assets/terms-7d73e925.css",revision:null},{url:"assets/virtual_pwa-register-8bbb2b7e.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"de.html",revision:"a3259f7cc62a8b04e19476ba2719e1d2"},{url:"de/privacy-policy.html",revision:"5c471bec05e924406aeb96cfec26005c"},{url:"de/terms.html",revision:"4c6db236f2975d25b7b35fb763295b8f"},{url:"en.html",revision:"61b79a744f0a9173b297c70718b4de22"},{url:"en/privacy-policy.html",revision:"3a9145b18cb460b3cd35ad06d46d48bf"},{url:"en/terms.html",revision:"6855731a187fb63861663473efbf350a"},{url:"index.html",revision:"da52308de83a12bcd981d730766829c9"},{url:"pl.html",revision:"b85370d2377b58d3c280315255c3df9f"},{url:"pl/privacy-policy.html",revision:"949f9c80bd6dc66a4a37bc58b4dbe629"},{url:"pl/terms.html",revision:"65a03f20274d87cb30d5ecdc59847983"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"47ea7743e6e7dc83394ed1fe454ee7e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
