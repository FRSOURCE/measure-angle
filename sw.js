if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const c=e=>r(e,n),u={module:{uri:n},exports:a,require:c};s[n]=Promise.all(i.map((e=>u[e]||c(e)))).then((e=>(l(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8caf7db4bda40f4ced032ba1e0a28e16"},{url:"assets/_...all_-WIrKz06D.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/app-ChJwtNcy.js",revision:null},{url:"assets/Button-D9CtxFu3.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-Br7I4Ev7.js",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/default-BBVrWybz.js",revision:null},{url:"assets/default-Fqk_4fJ1.css",revision:null},{url:"assets/index-CktLpClx.js",revision:null},{url:"assets/index-zK3q3q8u.css",revision:null},{url:"assets/privacy-policy-CmBhhdc4.css",revision:null},{url:"assets/privacy-policy-qLWP9dOp.js",revision:null},{url:"assets/terms-B3Ue1xku.css",revision:null},{url:"assets/terms-xGpkFOsu.js",revision:null},{url:"assets/useUriLocale-CBTPnVrb.js",revision:null},{url:"assets/virtual_pwa-register-C26kTQ9F.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"95bf032568603338142cc37eef31f44c"},{url:"de/privacy-policy.html",revision:"de413c6657351840eeef1513ac968fc7"},{url:"de/terms.html",revision:"49c8dd33449b4d4671808169aae97d7b"},{url:"en.html",revision:"3a073ff7da52e89b802b6fe3f14c87fb"},{url:"en/privacy-policy.html",revision:"0a13a270c6f788320b736c7c57f4dfef"},{url:"en/terms.html",revision:"2da2b1eaa7d1aa7be28e257decd49eb3"},{url:"index.html",revision:"3ca09051c9ecd4d30a4f7a17bb32a888"},{url:"pl.html",revision:"c3ca7345c584ebbe61a3f99e21ba3085"},{url:"pl/privacy-policy.html",revision:"848502ddcc97112b856150b5e8403ec0"},{url:"pl/terms.html",revision:"33dfe504012aed55f55090252364cae4"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
