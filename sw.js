if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>i(e,n),o={module:{uri:n},exports:a,require:c};s[n]=Promise.all(l.map((e=>o[e]||c(e)))).then((e=>(r(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c197afbc4708dc7a5482c6e611130f70"},{url:"assets/_...all_-DlpgE31R.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-Bqkm3Tn6.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/Button-Cwa59eeA.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-BgNSwChU.js",revision:null},{url:"assets/centered-DyIRRn8U.css",revision:null},{url:"assets/default-F-tJCFOh.css",revision:null},{url:"assets/default-TnAqn-Bk.js",revision:null},{url:"assets/index-Aruvvn43.js",revision:null},{url:"assets/index-BnNlN_Ib.css",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-CW94O6za.js",revision:null},{url:"assets/terms-BAZZfVxD.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/useUriLocale-DKQo00as.js",revision:null},{url:"assets/virtual_pwa-register-23BwSn9A.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"09022778ae29e8f33c552fcaa6d522a1"},{url:"de/privacy-policy.html",revision:"99799f8f7866f7ab0c3f9728514db77a"},{url:"de/terms.html",revision:"65a56143abab50872b081f34eba8f909"},{url:"en.html",revision:"be4042be21c105abd53dd4d3dfe2f3cf"},{url:"en/privacy-policy.html",revision:"3b0ea7ace2339e18767a9c39fc8b89e8"},{url:"en/terms.html",revision:"373fb6dd0e6379ab09bc5e14733bb55f"},{url:"index.html",revision:"ad817c4fe1f781c899fdf9a73591a00d"},{url:"pl.html",revision:"f085fdc71a8563cf1532554fa4c79cda"},{url:"pl/privacy-policy.html",revision:"7a6ea39dd007ef04e708ac066ad13a70"},{url:"pl/terms.html",revision:"464b7f81e1dabcbdae766b63ba95bdbe"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
