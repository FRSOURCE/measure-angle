if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>i(e,n),o={module:{uri:n},exports:a,require:c};s[n]=Promise.all(r.map((e=>o[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f0fffd2c3ebe92dc650fbee08b6f0f17"},{url:"assets/_...all_-BI6j5PBz.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-B5HsYLvm.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/Button-CcoUOOE_.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-BdGM0pBD.css",revision:null},{url:"assets/centered-Cns9dpgX.js",revision:null},{url:"assets/default-BhXB0kpy.css",revision:null},{url:"assets/default-hPMPhav2.js",revision:null},{url:"assets/index-CHa3d9KI.js",revision:null},{url:"assets/index-D7t1vWoD.css",revision:null},{url:"assets/privacy-policy-BbItfcVc.js",revision:null},{url:"assets/privacy-policy-oNMHTJVC.css",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/terms-DItOzpIF.js",revision:null},{url:"assets/useUriLocale-CAZokuHm.js",revision:null},{url:"assets/virtual_pwa-register-DwDWO3GS.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"cce1297f477bd414961824d2a146ea2d"},{url:"de/privacy-policy.html",revision:"d200108db9873454ee1f37615781b286"},{url:"de/terms.html",revision:"c8ac3e8dfabf8606073a9f61566aa942"},{url:"en.html",revision:"771ae732042f2756f3e9a80b917709f9"},{url:"en/privacy-policy.html",revision:"0b03ee44a3376089b181f1bc825bdde9"},{url:"en/terms.html",revision:"f51d033f954ee54de1a72fbe654e9738"},{url:"index.html",revision:"cf95b5323a3968e03231aa88e620cb2a"},{url:"pl.html",revision:"a5c1b71acc0fcd5122612e81b28c0a69"},{url:"pl/privacy-policy.html",revision:"657cb52c19265d92bf745093d38eb3c4"},{url:"pl/terms.html",revision:"58c6be2a79ebaf0ac1be39abf082671a"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
