if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const u=e=>i(e,n),c={module:{uri:n},exports:a,require:u};s[n]=Promise.all(l.map((e=>c[e]||u(e)))).then((e=>(r(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7add9f7c9a719e7c9868b2026b11c709"},{url:"assets/_...all_-5PSCxe1T.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BQHMQ431.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/Button-CqJNTLa4.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/centered-GfZ_ukWd.js",revision:null},{url:"assets/default-11PnyRet.js",revision:null},{url:"assets/default-D9dwkEVE.css",revision:null},{url:"assets/index-BnNlN_Ib.css",revision:null},{url:"assets/index-DLluQRiO.js",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-gfGgfXd8.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/terms-DN8b-LBd.js",revision:null},{url:"assets/useUriLocale-BJOEbx3J.js",revision:null},{url:"assets/virtual_pwa-register-Du_UQzig.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"ba2dc875520336c7f38f0f51a7d9b256"},{url:"de/privacy-policy.html",revision:"c549b798fed474a36bed301e9c4159c8"},{url:"de/terms.html",revision:"ff31e45c11fe9f5b2632f0a4f7ccdb50"},{url:"en.html",revision:"a5f0a5fed26836fc6685837764cde5e1"},{url:"en/privacy-policy.html",revision:"7dc41c866bc7ede097a2318ac4fb0b27"},{url:"en/terms.html",revision:"35f24c2ed7c482b126ef223a8a1d11c7"},{url:"index.html",revision:"98f730e95bfa14e7ee0ae8ba52e1cad8"},{url:"pl.html",revision:"abbf35936435ad643773662005a2872f"},{url:"pl/privacy-policy.html",revision:"864bf047afa8a04a50ba400386eb2f92"},{url:"pl/terms.html",revision:"7b45f47361328a9d7a90aebf93996238"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"47ea7743e6e7dc83394ed1fe454ee7e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
