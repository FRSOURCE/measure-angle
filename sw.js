if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>i(e,n),u={module:{uri:n},exports:a,require:c};s[n]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"851b9a8b46beab03dd8caf6211da0b03"},{url:"assets/_...all_-BtIA258u.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/app-D6OEh8Ge.js",revision:null},{url:"assets/Button-DgpZBfka.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/centered-Erfa2M6i.js",revision:null},{url:"assets/default-CiVuHk3T.js",revision:null},{url:"assets/default-D9dwkEVE.css",revision:null},{url:"assets/index-BnNlN_Ib.css",revision:null},{url:"assets/index-CHGznE-t.js",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-DRx2GazB.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/terms-SNnVyszJ.js",revision:null},{url:"assets/useUriLocale-CT4nafPI.js",revision:null},{url:"assets/virtual_pwa-register-D6zt3TCd.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"0df3d2b73aaa0f92a354be3426b1e1c7"},{url:"de/privacy-policy.html",revision:"918834168ca3ca1ee8d4c3d90af9b65d"},{url:"de/terms.html",revision:"25973ec9aec708d5709608be292ed5d2"},{url:"en.html",revision:"4c3666c1147556eaccff4ae560978bca"},{url:"en/privacy-policy.html",revision:"9bf7298cd4c80904b14699af8d00e5d4"},{url:"en/terms.html",revision:"3ade8163c1ec0ef0f16760905ee07d49"},{url:"index.html",revision:"9ded9b71b8dd1396da23ab8576d7bfb2"},{url:"pl.html",revision:"9c91fdda00e3f292b7ee6acef03a119b"},{url:"pl/privacy-policy.html",revision:"3c32a104552dfcb77431c78dcf0cf551"},{url:"pl/terms.html",revision:"11b29a75afcf1c94e0e1d9425d95e28b"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
