if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),o={module:{uri:n},exports:c,require:a};s[n]=Promise.all(l.map((e=>o[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9462269b8edb15d764c20c33561500d8"},{url:"assets/_...all_-CPUQkKpw.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/app-PxSx_Uzg.js",revision:null},{url:"assets/Button-Chy8bj1v.css",revision:null},{url:"assets/Button-D7EfnCUd.js",revision:null},{url:"assets/centered-B5BY0gvN.js",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/default-D9dwkEVE.css",revision:null},{url:"assets/default-DAPa6oPe.js",revision:null},{url:"assets/index-BaPZlkYG.js",revision:null},{url:"assets/index-Bj6E1iVD.css",revision:null},{url:"assets/privacy-policy-C1WaVnPm.js",revision:null},{url:"assets/privacy-policy-CmBhhdc4.css",revision:null},{url:"assets/terms-B3Ue1xku.css",revision:null},{url:"assets/terms-DDcGcG7q.js",revision:null},{url:"assets/useUriLocale-BoN3mOTd.js",revision:null},{url:"assets/virtual_pwa-register-BKAtSHgk.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"75adc4d611c1ee773d20e5f728936756"},{url:"de/privacy-policy.html",revision:"9141ab8221dfe899caa3124ae233aabd"},{url:"de/terms.html",revision:"81bb09c6e2c7f9143029c8587591e5a0"},{url:"en.html",revision:"a3f03ecc36167adb6bad725ef6ff81ff"},{url:"en/privacy-policy.html",revision:"125b5f1dc162463c7dd0a6d28a5c72f1"},{url:"en/terms.html",revision:"5a58d14be91b0bb0677ee1c477639282"},{url:"index.html",revision:"69ccdd924e9975f7f9b8dd11f626186c"},{url:"pl.html",revision:"c653e125cbd7bd3a9351b5e719c46996"},{url:"pl/privacy-policy.html",revision:"593c39f87d9a572995529a51a14ff2e4"},{url:"pl/terms.html",revision:"12d22e62f7821f88f18fda799d38f422"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
