if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),o={module:{uri:n},exports:c,require:a};s[n]=Promise.all(l.map((e=>o[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8c73ceaec83585c06a34abd25d567307"},{url:"assets/_...all_-Cv0MAQjt.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-DrvwiHnI.css",revision:null},{url:"assets/app-G8efESF2.js",revision:null},{url:"assets/Button-B-gA1mlD.css",revision:null},{url:"assets/Button-DkEPiuGQ.js",revision:null},{url:"assets/centered-BXo6jbpB.css",revision:null},{url:"assets/centered-DtQZ5lHt.js",revision:null},{url:"assets/default-DUxEW5Hd.js",revision:null},{url:"assets/default-iCgzCfzV.css",revision:null},{url:"assets/index-43oSiDa_.js",revision:null},{url:"assets/index-C3mIgKMT.css",revision:null},{url:"assets/privacy-policy-bs5X7MUw.css",revision:null},{url:"assets/privacy-policy-Dg0glc3T.js",revision:null},{url:"assets/terms-BAFCOu-J.js",revision:null},{url:"assets/terms-Bwrkcp1A.css",revision:null},{url:"assets/useUriLocale-DjdjBHoz.js",revision:null},{url:"assets/virtual_pwa-register-NL6x0kWC.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"ec549c0ad4e7e29a4d4ff2dbc04db36d"},{url:"de/privacy-policy.html",revision:"30f2adba57df74dd9021c092c6af20f3"},{url:"de/terms.html",revision:"5093c86f50246f2016fe51d8ce11f0ed"},{url:"en.html",revision:"9dcadd23ab9a7c5f86ee4ef74964241f"},{url:"en/privacy-policy.html",revision:"8fa4141304915915116f07487e326a49"},{url:"en/terms.html",revision:"43b2c593f6747189834ae7ab747edd8c"},{url:"index.html",revision:"94fe31ec4ec27cd251fb705dd2e1158a"},{url:"pl.html",revision:"0c6549d2c2bce2f4b9b3ec2f5c2e60d1"},{url:"pl/privacy-policy.html",revision:"00cb3812b74574c3265c368dc90aff9c"},{url:"pl/terms.html",revision:"4a59a32c4475563acf8212071c1920f0"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
