import{_ as g}from"./app.2591a8bc.js";function _(l={}){const{immediate:d=!1,onNeedRefresh:v,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:o}=l;let t,a;const c=async(n=!0)=>{await a};async function f(){if("serviceWorker"in navigator){const{Workbox:n,messageSW:u}=await g(()=>import("./workbox-window.prod.es5.6954f450.js"),[]);t=new n("/fast-angle/sw.js",{scope:"/fast-angle/",type:"classic"}),t.addEventListener("activated",e=>{e.isUpdate?window.location.reload():i==null||i()}),t.register({immediate:d}).then(e=>{s?s("/fast-angle/sw.js",e):r==null||r(e)}).catch(e=>{o==null||o(e)})}}return a=f(),c}export{_ as registerSW};
