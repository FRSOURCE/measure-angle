if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const u=e=>i(e,n),c={module:{uri:n},exports:a,require:u};s[n]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(l(...e),a)))}}define(["./workbox-9f7b9521"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"0ef122b3fcfde707b01f94ae143f3d68"},{url:"assets/_...all_-BwtYuv1X.js",revision:null},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/app-CgA42-ee.css",revision:null},{url:"assets/app-Cpm0aIQs.js",revision:null},{url:"assets/Button-B-gA1mlD.css",revision:null},{url:"assets/Button-DrmhAkZG.js",revision:null},{url:"assets/centered-BXo6jbpB.css",revision:null},{url:"assets/centered-CG2OxSHY.js",revision:null},{url:"assets/default-BYJP4aUg.css",revision:null},{url:"assets/default-CxfpAUGI.js",revision:null},{url:"assets/index-DMqufz_b.js",revision:null},{url:"assets/index-yJZhbi3r.css",revision:null},{url:"assets/privacy-policy-CFWzYKUD.js",revision:null},{url:"assets/privacy-policy-D0QDukm7.css",revision:null},{url:"assets/terms-CGu14MWA.css",revision:null},{url:"assets/terms-CWY9pTQz.js",revision:null},{url:"assets/useUriLocale-LtFW2dAm.js",revision:null},{url:"assets/virtual_pwa-register-55pw7sbO.js",revision:null},{url:"assets/workbox-window.prod.es5-BrILYiLO.js",revision:null},{url:"de.html",revision:"39521d4c5ab70fbb41233143b5a54094"},{url:"de/privacy-policy.html",revision:"438cb2bd804418968243e3dbe0fce4ed"},{url:"de/terms.html",revision:"b48172747a5a4b733fe1f7823a435dbb"},{url:"en.html",revision:"131a7ee79200f8b3e156dc6e89fc8a39"},{url:"en/privacy-policy.html",revision:"55f109079b3e5aa7c135a94d1b284a05"},{url:"en/terms.html",revision:"cc7547dbcea4947ab3326a761ce94ce7"},{url:"index.html",revision:"3ea375e51328781caa61dccfe7d1c0a9"},{url:"pl.html",revision:"96d425dbed10b50484849f0ff576f289"},{url:"pl/privacy-policy.html",revision:"d47e249741e734ae361d899f1fc323d7"},{url:"pl/terms.html",revision:"4ede09377724c651c7d4a139e3ba1b63"},{url:"favicon-dark.svg",revision:"98cd02853d9e8386612b5fbd7f9eb630"},{url:"favicon.svg",revision:"e476a8de9eefda3467f128aed07c007d"},{url:"pwa-192x192.png",revision:"307aeecc8a6cf708adcbd0b21274b92f"},{url:"pwa-512x512.png",revision:"50c3254ba3466da79827fcceb4807241"},{url:"pwa-maskable-512x512.png",revision:"5123dacbec6173fc269500f01c0834a8"},{url:"pwa-monochrome-192x192.png",revision:"47c8c3bba4d5b3cc780c268659f6a3fc"},{url:"safari-pinned-tab.svg",revision:"037dc7a68e4764080ef4d13890a13140"},{url:"manifest.webmanifest",revision:"0ffbc5bda62c00c71ebb6dee55f5fc48"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
