if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>r(e,n),o={module:{uri:n},exports:c,require:a};s[n]=Promise.all(i.map((e=>o[e]||a(e)))).then((e=>(l(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"82ee3bc4bd2d2c23830ea31fc5d2364f"},{url:"assets/_...all_-B1Sbb9qH.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-B9eDfSpo.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/Button-CFn_ZQra.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-D1CkgthI.js",revision:null},{url:"assets/centered-DyIRRn8U.css",revision:null},{url:"assets/default-ClOrnq8P.css",revision:null},{url:"assets/default-LDX7TcnX.js",revision:null},{url:"assets/index-CQFp2ETp.js",revision:null},{url:"assets/index-zK3q3q8u.css",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-B66f0hL4.js",revision:null},{url:"assets/terms-C9mBl4oR.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/useUriLocale-D57yh8L_.js",revision:null},{url:"assets/virtual_pwa-register-CKgSHxva.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"81bb318895df8c9214b4383b473f12b7"},{url:"de/privacy-policy.html",revision:"23e906082f74310348a546bd8e8303a4"},{url:"de/terms.html",revision:"025cc82b5ee46f3bd34e0dd1a43b7f52"},{url:"en.html",revision:"01429752c48075429b37075b12b1c50c"},{url:"en/privacy-policy.html",revision:"dd5866eaec4f7532afef3b45646507c6"},{url:"en/terms.html",revision:"53108182057dc65709789507c0724c20"},{url:"index.html",revision:"f6529f90a382bb415f2a1ac09d356dc3"},{url:"pl.html",revision:"c9ae33827d99335e1d6114c850ecf283"},{url:"pl/privacy-policy.html",revision:"e077a9801a32ad95ea286faa184f1c73"},{url:"pl/terms.html",revision:"4eeaf9227751b0285ceb6373390d20d3"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
