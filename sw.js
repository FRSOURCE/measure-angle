if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),u={module:{uri:n},exports:c,require:a};s[n]=Promise.all(r.map((e=>u[e]||a(e)))).then((e=>(l(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f57c57329ed71cf8f693c468d7421d43"},{url:"assets/_...all_-CeS6YTeu.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BJ9hLELt.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/Button-DnSMVbsd.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-8L6uR8rs.js",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/default-B2H7Fcf1.js",revision:null},{url:"assets/default-Fqk_4fJ1.css",revision:null},{url:"assets/index-9AUaL4aS.js",revision:null},{url:"assets/index-zK3q3q8u.css",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-C0SxAKMk.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/terms-oH1wi0Bm.js",revision:null},{url:"assets/useUriLocale-DfLPg_uT.js",revision:null},{url:"assets/virtual_pwa-register-CfZUs8Nm.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"78e752039e8b3233a1b74e1eba8a5cb1"},{url:"de/privacy-policy.html",revision:"39055883de37ca7242f0e8ae73fa1a6d"},{url:"de/terms.html",revision:"812d17a8a69605fff4b140c12b14eb46"},{url:"en.html",revision:"71bb19535fb408365b5cfbc7af4d9c50"},{url:"en/privacy-policy.html",revision:"cacf3f08ca02d7173d5e936f2c67b9ea"},{url:"en/terms.html",revision:"9f327d6ad687dbc03078bf62128833ce"},{url:"index.html",revision:"0f527fd8c9a3bd7ab87be3b6550a58bc"},{url:"pl.html",revision:"22c432005db308e242c96c4885b58172"},{url:"pl/privacy-policy.html",revision:"7a5134b553bc88162e4dcb19c57567cb"},{url:"pl/terms.html",revision:"6c52e4311c53f346ca88d7754443bad6"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
