if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),u={module:{uri:n},exports:c,require:a};s[n]=Promise.all(r.map((e=>u[e]||a(e)))).then((e=>(l(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"ea4c3cb60824bec9ca0cf16149e1500a"},{url:"assets/_...all_-DaILZSyP.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-CgA42-ee.css",revision:null},{url:"assets/app-DcpIehV6.js",revision:null},{url:"assets/Button-BFn1MbNn.css",revision:null},{url:"assets/Button-m6OyZyLH.js",revision:null},{url:"assets/centered-6CYeRhmv.css",revision:null},{url:"assets/centered-D4PEHOGB.js",revision:null},{url:"assets/default-BYJP4aUg.css",revision:null},{url:"assets/default-tRMdA9Gc.js",revision:null},{url:"assets/index-CMx4wCSP.js",revision:null},{url:"assets/index-DibWaRtV.css",revision:null},{url:"assets/privacy-policy-C_3KX2Lv.css",revision:null},{url:"assets/privacy-policy-Dy23iPXF.js",revision:null},{url:"assets/terms-Bwrkcp1A.css",revision:null},{url:"assets/terms-uAgT-IX9.js",revision:null},{url:"assets/useUriLocale-CH2_Ugde.js",revision:null},{url:"assets/virtual_pwa-register-DJb8fY57.js",revision:null},{url:"assets/workbox-window.prod.es5-BrILYiLO.js",revision:null},{url:"de.html",revision:"b66ea34e0d40a808cbbd4559f4c9d7ea"},{url:"de/privacy-policy.html",revision:"8bd4cf13ef4327d4a35746734c9423fa"},{url:"de/terms.html",revision:"9184d361c71d31776c19e4ee374a8056"},{url:"en.html",revision:"40e2ac147b6420dcdebc0deb17abf08a"},{url:"en/privacy-policy.html",revision:"6df988d24db7cc43fcc5d9badca0fcd6"},{url:"en/terms.html",revision:"00be03c25c9d3bae1fa9820a15006a6d"},{url:"index.html",revision:"96a875d954933c81f5ee3e62435b30a7"},{url:"pl.html",revision:"2e629dd7359f2c43167730898269dccf"},{url:"pl/privacy-policy.html",revision:"c4f3a6931a222a8c26423a57c53f2082"},{url:"pl/terms.html",revision:"dd2fe8776dd18a20e6ff76930a914b4c"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
