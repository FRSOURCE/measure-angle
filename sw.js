if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const u=e=>i(e,n),o={module:{uri:n},exports:a,require:u};s[n]=Promise.all(l.map((e=>o[e]||u(e)))).then((e=>(r(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"71a277aaf8588016034944ea25b9b94a"},{url:"assets/_...all_-5PSCxe1T.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BQHMQ431.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/Button-CqJNTLa4.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/centered-GfZ_ukWd.js",revision:null},{url:"assets/default-11PnyRet.js",revision:null},{url:"assets/default-D9dwkEVE.css",revision:null},{url:"assets/index-BnNlN_Ib.css",revision:null},{url:"assets/index-DLluQRiO.js",revision:null},{url:"assets/privacy-policy-B_SJY2k1.css",revision:null},{url:"assets/privacy-policy-gfGgfXd8.js",revision:null},{url:"assets/terms-dhC8jLtc.css",revision:null},{url:"assets/terms-DN8b-LBd.js",revision:null},{url:"assets/useUriLocale-BJOEbx3J.js",revision:null},{url:"assets/virtual_pwa-register-Du_UQzig.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"ec7411c992bf9db8ea9f5969ded35cbf"},{url:"de/privacy-policy.html",revision:"31bc71af4261e80c2fc6761cb5fc2070"},{url:"de/terms.html",revision:"08cff0705d596601a36cea0062b175ba"},{url:"en.html",revision:"5667063455b6ff73fdbc0d06f9498f46"},{url:"en/privacy-policy.html",revision:"7fb9311dadce8dd173f8e542a7f6faa4"},{url:"en/terms.html",revision:"6a1570735dbe01f8c25b7bd9173f0830"},{url:"index.html",revision:"4a880f320e00690a1d9f6e0a20d01e81"},{url:"pl.html",revision:"df0a47c0170a51ae859c56a3f8c81db1"},{url:"pl/privacy-policy.html",revision:"edafefd724543d367451ea9b0454fd9a"},{url:"pl/terms.html",revision:"cf2895955574044c3b0b7e5ea834a1f6"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"47ea7743e6e7dc83394ed1fe454ee7e3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
