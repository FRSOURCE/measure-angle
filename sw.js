if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>r(e,n),u={module:{uri:n},exports:c,require:a};s[n]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(l(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"312f92dcb8486bb851ca2da6a848e566"},{url:"assets/_...all_-CUrrhdgQ.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-B089dKne.js",revision:null},{url:"assets/app-DrvwiHnI.css",revision:null},{url:"assets/Button-B-gA1mlD.css",revision:null},{url:"assets/Button-nXEYzZOt.js",revision:null},{url:"assets/centered-BXo6jbpB.css",revision:null},{url:"assets/centered-DXVC6Tw2.js",revision:null},{url:"assets/default-Bb8t_gCU.js",revision:null},{url:"assets/default-iCgzCfzV.css",revision:null},{url:"assets/index-C3mIgKMT.css",revision:null},{url:"assets/index-jBPnjwvd.js",revision:null},{url:"assets/privacy-policy-D0QDukm7.css",revision:null},{url:"assets/privacy-policy-DwrW54wZ.js",revision:null},{url:"assets/terms-CGu14MWA.css",revision:null},{url:"assets/terms-hP3Pi29U.js",revision:null},{url:"assets/useUriLocale-BPgYWpfF.js",revision:null},{url:"assets/virtual_pwa-register-B2s4srKm.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"1878a5fc46afa076f1fa7e9f60065f04"},{url:"de/privacy-policy.html",revision:"9b51c4238a115a861e30aca99b91509a"},{url:"de/terms.html",revision:"75f3f38c70ec39f4a48daf97200e6d42"},{url:"en.html",revision:"47dda9d4bb5500d25e152c6537c04f28"},{url:"en/privacy-policy.html",revision:"27229047cdc35383ed1a772757e4fb7e"},{url:"en/terms.html",revision:"0a9005dc13fd2f5d4b52cc6df65ed238"},{url:"index.html",revision:"099ff61c5e3b7b08882dce378b4b011e"},{url:"pl.html",revision:"d4422caf09840a0b963f665fddecd677"},{url:"pl/privacy-policy.html",revision:"dcc86bfd2562741796a595c28b0458f9"},{url:"pl/terms.html",revision:"d47f9d7b94f1ff82269e6cc7209c18a0"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
