if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>i(e,n),u={module:{uri:n},exports:a,require:c};s[n]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"1a4da0aedf20fe474e62bcbb05ca21a4"},{url:"assets/_...all_-DiYJ-A00.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/app-DYizwskN.js",revision:null},{url:"assets/Button-C35E9kqy.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-C6NqXLNe.js",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/default-Fqk_4fJ1.css",revision:null},{url:"assets/default-Y8J77u9u.js",revision:null},{url:"assets/index-Cf5k5OE7.js",revision:null},{url:"assets/index-zK3q3q8u.css",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-CreTdPQy.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/terms-NPsfzn8w.js",revision:null},{url:"assets/useUriLocale-Cf12ofPm.js",revision:null},{url:"assets/virtual_pwa-register-DfJmr0IC.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"c4fd2ffd7ad815524fb8b0e5c532b8a8"},{url:"de/privacy-policy.html",revision:"ac0475e691390b7c898806698b62b449"},{url:"de/terms.html",revision:"55d387870b8bccea5a95d368c2b9d8fc"},{url:"en.html",revision:"6327d6004575ad54f40df9d87d1970c0"},{url:"en/privacy-policy.html",revision:"2914fe4df7da86ab3000d3a645bfeecf"},{url:"en/terms.html",revision:"b8b51cdf62a2adcde4079f3c151339b1"},{url:"index.html",revision:"6a4b6cba181f27e9333f6f2a7c8b8394"},{url:"pl.html",revision:"95e45aaa979f1b7d8a3765545cbd56cc"},{url:"pl/privacy-policy.html",revision:"ac89e1dbbea0b67e05be27ca4140de3c"},{url:"pl/terms.html",revision:"d7e0cbc3f62f8c8454f31bf19b5222a7"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"47ea7743e6e7dc83394ed1fe454ee7e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
