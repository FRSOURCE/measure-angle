if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const u=e=>i(e,n),a={module:{uri:n},exports:c,require:u};s[n]=Promise.all(l.map((e=>a[e]||u(e)))).then((e=>(r(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"4d3413b86639d0b1186f167b7769ca76"},{url:"assets/_...all_-CLOivLzp.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/app-DT9tPyzn.js",revision:null},{url:"assets/Button-qlJbhzlo.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-CFGCZuHh.js",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/default-C3FHDxIb.js",revision:null},{url:"assets/default-D9dwkEVE.css",revision:null},{url:"assets/index-BnNlN_Ib.css",revision:null},{url:"assets/index-sKdwiapj.js",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-C6r_wkKn.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/terms-Dytl1uwk.js",revision:null},{url:"assets/useUriLocale-URN521cf.js",revision:null},{url:"assets/virtual_pwa-register-Dy0udGU2.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"8a3dc33e6c90cc7cb26d7fa0ba1f7bf5"},{url:"de/privacy-policy.html",revision:"a8eae0ad40617c8bef6b31391b0d3c98"},{url:"de/terms.html",revision:"60707cc300ac4e075cc9bb5046329beb"},{url:"en.html",revision:"b013b24a7eeb0db838c32563acefa28b"},{url:"en/privacy-policy.html",revision:"b6ecf82cea1a5ff219e9df1be7b2cac1"},{url:"en/terms.html",revision:"fc31b230295db244e582f0e8e9b6cfff"},{url:"index.html",revision:"d9c65f208e7b53235338763c81eced86"},{url:"pl.html",revision:"d76ecc576f032463683124d90efb7fbf"},{url:"pl/privacy-policy.html",revision:"59defeddd1d7b0c7a54cbb6dc08f1a0b"},{url:"pl/terms.html",revision:"e99fd9ab65c69e558836dd08847dd5b1"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
