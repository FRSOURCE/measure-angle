if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const a=e=>i(e,n),u={module:{uri:n},exports:c,require:a};s[n]=Promise.all(l.map((e=>u[e]||a(e)))).then((e=>(r(...e),c)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"dbea972c24be7888f83de252f60a95c6"},{url:"assets/_...all_-CBSvcxIM.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-BUT5I0Zb.css",revision:null},{url:"assets/app-D5SZSh1Z.js",revision:null},{url:"assets/Button-9AG99B26.js",revision:null},{url:"assets/Button-XV6Wby9K.css",revision:null},{url:"assets/centered-CsPDCAwg.css",revision:null},{url:"assets/centered-DgDTd8lR.js",revision:null},{url:"assets/default-Dpw12mGH.js",revision:null},{url:"assets/default-Fqk_4fJ1.css",revision:null},{url:"assets/index-7TIh9BGE.css",revision:null},{url:"assets/index-B3a7ii78.js",revision:null},{url:"assets/privacy-policy-CmBhhdc4.css",revision:null},{url:"assets/privacy-policy-CUbcz_yx.js",revision:null},{url:"assets/terms-B3Ue1xku.css",revision:null},{url:"assets/terms-BIs6i8j8.js",revision:null},{url:"assets/useUriLocale-DtUkgd_0.js",revision:null},{url:"assets/virtual_pwa-register-CVnLQ_nM.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"de.html",revision:"f7ea882d57f5a6f3e19304e8a125a895"},{url:"de/privacy-policy.html",revision:"d7c782981c133d7b061912a35955c384"},{url:"de/terms.html",revision:"0fcfab8947830fe376c1174cc5ea7c85"},{url:"en.html",revision:"cbd475cd5b5a5d7ddcd91fa4ae1f390e"},{url:"en/privacy-policy.html",revision:"b41927b7dc41a536514bdb026dcee116"},{url:"en/terms.html",revision:"91ce2f47e54c5051a6f139ed9f38e767"},{url:"index.html",revision:"1414b8414f93d40ce8decca43b74c738"},{url:"pl.html",revision:"6c836c94580ddf374be6cd69bccf2b82"},{url:"pl/privacy-policy.html",revision:"22b673afb0aa32a998e27633aaa95bcf"},{url:"pl/terms.html",revision:"6470c3ce2f61811ea4eff2d7568879f1"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
