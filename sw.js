if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),d={module:{uri:c},exports:o,require:t};i[c]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-128d1cd8.js",revision:null},{url:"assets/index-d526a0c5.css",revision:null},{url:"index.html",revision:"f3e083c1d0dd592c60afcdd8b4d504ae"},{url:"registerSW.js",revision:"c8b2236e47fa02266c79599150f0967d"},{url:"favicon.ico",revision:"bd75d885c8acfe971a2920f89b370f64"},{url:"pwa-192x192.png",revision:"befb82638ebfb5c672ec7f706c36f760"},{url:"pwa-512x512.png",revision:"65d2283264dbc6fc7c46ed485302b02b"},{url:"manifest.webmanifest",revision:"6fabcc05d26fbe66c7751bf82fee5a9e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));