if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),u={module:{uri:n},exports:c,require:a};s[n]=Promise.all(l.map((e=>u[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"27e341507ec5743ef3bd64460478071c"},{url:"assets/_...all_-D67ETYSs.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/app-C1sgHxBs.js",revision:null},{url:"assets/Button-PN8kzmNF.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-BZLCQlR6.js",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/default-Fqk_4fJ1.css",revision:null},{url:"assets/default-v-KK5i4b.js",revision:null},{url:"assets/index-BQZ2HbJE.js",revision:null},{url:"assets/index-zK3q3q8u.css",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-yaiyuSi2.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/terms-M80BZllG.js",revision:null},{url:"assets/useUriLocale-C2I0dcmi.js",revision:null},{url:"assets/virtual_pwa-register-CymAZ9SZ.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"e4348102ad0ab1261a9757efe8a4bd54"},{url:"de/privacy-policy.html",revision:"bd4fed5ef785179cc546af5d518605e7"},{url:"de/terms.html",revision:"569e96f6308f1cde8e2464c137f3f614"},{url:"en.html",revision:"235c358a4131c6e4df1430cf5d8c1077"},{url:"en/privacy-policy.html",revision:"485552f7e6a9282dc7f595284fd78f51"},{url:"en/terms.html",revision:"0878063a2086b20458a9df0e8a56852b"},{url:"index.html",revision:"93da3942dc07b8ae3f115345fc99add9"},{url:"pl.html",revision:"2271ccd91390086cb8499620f93b5ce9"},{url:"pl/privacy-policy.html",revision:"7f8f7e2a9c696def892ae9271c870da5"},{url:"pl/terms.html",revision:"96b8da481a58cddb13ffc62a836d97d7"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
