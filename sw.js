if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),o={module:{uri:n},exports:c,require:a};s[n]=Promise.all(r.map((e=>o[e]||a(e)))).then((e=>(l(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"48a9b5985cba42f77c49db0415120fdc"},{url:"assets/_...all_-BWHZD8hV.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-DrvwiHnI.css",revision:null},{url:"assets/app-vH2RgO9M.js",revision:null},{url:"assets/Button-B-gA1mlD.css",revision:null},{url:"assets/Button-qjPXBWFq.js",revision:null},{url:"assets/centered-BXo6jbpB.css",revision:null},{url:"assets/centered-D09cPT1J.js",revision:null},{url:"assets/default-iCgzCfzV.css",revision:null},{url:"assets/default-qbwCaDWw.js",revision:null},{url:"assets/index-CPelrzmH.js",revision:null},{url:"assets/index-nyifbYwU.css",revision:null},{url:"assets/privacy-policy-bs5X7MUw.css",revision:null},{url:"assets/privacy-policy-cf1YUTWo.js",revision:null},{url:"assets/terms-Bwrkcp1A.css",revision:null},{url:"assets/terms-CdPH8eAz.js",revision:null},{url:"assets/useUriLocale-Cnv84Vt2.js",revision:null},{url:"assets/virtual_pwa-register-e1_BcBJo.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"11a8250af61da4291019f9c4f39ec000"},{url:"de/privacy-policy.html",revision:"d32607714130a8ea9c25e34569af4c6f"},{url:"de/terms.html",revision:"72bab68724bc761becfd93e147f71001"},{url:"en.html",revision:"fdd5238e808364eb645d0ba3ab783565"},{url:"en/privacy-policy.html",revision:"733be402d699716c2ec548fc6d8c0499"},{url:"en/terms.html",revision:"8cf5daa014ba9a6b0fb6109c818e04d0"},{url:"index.html",revision:"2bb6e9a82d3b3d742cc0e0aac22777f3"},{url:"pl.html",revision:"4bbaf0850992f9948c5f46ebdc0e8bcc"},{url:"pl/privacy-policy.html",revision:"d9f55839afa02473831f074dd27bc60b"},{url:"pl/terms.html",revision:"44bbf8e71a8689f43ae8d02e6eb45ef0"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
