if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const u=e=>i(e,n),c={module:{uri:n},exports:a,require:u};s[n]=Promise.all(l.map((e=>c[e]||u(e)))).then((e=>(r(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"6902f1bbc0c15fc9c95079bf4deb70a2"},{url:"assets/_...all_-gTKjzNA_.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/app-CkmAL9iq.js",revision:null},{url:"assets/Button-CjjdJulJ.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/centered-DW1vd-t0.js",revision:null},{url:"assets/default-CfcNPMfE.js",revision:null},{url:"assets/default-Fqk_4fJ1.css",revision:null},{url:"assets/index-CuTKu2iu.js",revision:null},{url:"assets/index-zK3q3q8u.css",revision:null},{url:"assets/privacy-policy-Bn3pvaui.js",revision:null},{url:"assets/privacy-policy-CmBhhdc4.css",revision:null},{url:"assets/terms-B3Ue1xku.css",revision:null},{url:"assets/terms-D6t2aJbZ.js",revision:null},{url:"assets/useUriLocale-DlBeQLzA.js",revision:null},{url:"assets/virtual_pwa-register-D_rysnmq.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"9cc0525d5f5d6e00f3532ab70a307418"},{url:"de/privacy-policy.html",revision:"33b6f77f0a108ae7629c2f2aa3fc820c"},{url:"de/terms.html",revision:"5ba257bebcf93d3aae67734c73452b6b"},{url:"en.html",revision:"0beab970b1e8e63d8b2d65073041b4ca"},{url:"en/privacy-policy.html",revision:"0e427b3815e68925b54b598a0f892b47"},{url:"en/terms.html",revision:"b74ef62abd6022d7eeee833a750c4fda"},{url:"index.html",revision:"84a85ab61bc25062eeeb9e8ea4e68d56"},{url:"pl.html",revision:"fc414eac14bb9d8c26af4337497a4881"},{url:"pl/privacy-policy.html",revision:"70187e48e8ec8339439641edd17f00ea"},{url:"pl/terms.html",revision:"a29c0640b254f612e0fd422f8f4315d5"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
