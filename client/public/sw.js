if(!self.define){let s,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(i,c)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let n={};const r=s=>a(s,t),o={module:{uri:t},exports:n,require:r};e[t]=Promise.all(i.map((s=>o[s]||r(s)))).then((s=>(c(...s),n)))}}define(["./workbox-7c2a5a06"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"ffd4e488d98eaf8c387868785c83fc92"},{url:"/_next/static/chunks/17-b6a8529d728a8bcc.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/177.7103f4b8ff08fe5b.js",revision:"7103f4b8ff08fe5b"},{url:"/_next/static/chunks/209-aaea84cf659c914f.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/265-769dbf4d3f891627.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/326-d53510ad27b08abd.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/413-f64b8710ec26c40d.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/458.845ce46fc849d1cd.js",revision:"845ce46fc849d1cd"},{url:"/_next/static/chunks/472-a38e906cf9ed94cf.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/482-991f773b78af4dc6.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/483-886a6109316cf077.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/525.2259a6f0ada8c068.js",revision:"2259a6f0ada8c068"},{url:"/_next/static/chunks/566.53139afbfcd70289.js",revision:"53139afbfcd70289"},{url:"/_next/static/chunks/634-6c4065698aee54b4.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/728.91193883481922d6.js",revision:"91193883481922d6"},{url:"/_next/static/chunks/9081a741-592c7cc2047f0301.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/91.22a62a1e7a385b19.js",revision:"22a62a1e7a385b19"},{url:"/_next/static/chunks/961.2c56a289ffccd8be.js",revision:"2c56a289ffccd8be"},{url:"/_next/static/chunks/9761e08b-7f22411bbab55903.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/9dadc25a.2d6e5d423b8d11de.js",revision:"2d6e5d423b8d11de"},{url:"/_next/static/chunks/app/(pages)/(articles)/articles/page-5403ebb17e19273c.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/(pages)/(articles)/layout-063ce2bb6e306a23.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/(pages)/aboutUs/page-d2c9bf58559671ca.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/(pages)/contacts/page-e729c8a3e597a0f5.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/(pages)/layout-a1f291dd145c4877.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/(pages)/portfolio/page-a604f56e43949774.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/layout-97b245aada471003.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/not-found-85fd33d5c53d8ac5.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/page-7c026aa8c662e7f9.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/app/products/%5BproductId%5D/page-f72c9bbe64ecc15a.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/fd9d1056-39998525e4f299bf.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/main-app-5a15b256c241fe28.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/main-c24207be27e50cfa.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/pages/_app-174d3fc0b06857fe.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/pages/_error-1749fe2efd45c640.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-05b9bb7c3080c017.js",revision:"qEjfKbTiQBmsxrwsvP-tQ"},{url:"/_next/static/css/69cc9dc15dfbf8b9.css",revision:"69cc9dc15dfbf8b9"},{url:"/_next/static/css/965e21aa9bbee8a4.css",revision:"965e21aa9bbee8a4"},{url:"/_next/static/css/9dfda927f5b32600.css",revision:"9dfda927f5b32600"},{url:"/_next/static/css/9efd1f6f099e7ebc.css",revision:"9efd1f6f099e7ebc"},{url:"/_next/static/css/a2300fd9e0be4532.css",revision:"a2300fd9e0be4532"},{url:"/_next/static/css/b8fb8cec4c36f68d.css",revision:"b8fb8cec4c36f68d"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/2d141e1a38819612-s.p.woff2",revision:"acb6ad8efbc88ce55fcc0639a5d0a211"},{url:"/_next/static/media/513657b02c5c193f-s.p.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/62328fecf9e80426-s.woff2",revision:"138c8f78129c50d2783bf0fe261d32af"},{url:"/_next/static/media/background-final.9775a2c8.webp",revision:"9775a2c8"},{url:"/_next/static/media/c7eb187887c48af6-s.woff2",revision:"361fa9642b5371651338f1af9f725f7e"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/checkbox.5cddb51e.svg",revision:"5cddb51e"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/qEjfKbTiQBmsxrwsvP-tQ/_buildManifest.js",revision:"6822c4d5aaf7f92a59445cc0c6947e1d"},{url:"/_next/static/qEjfKbTiQBmsxrwsvP-tQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/assets/Portfolio/colleagues-celebrating-success.jpg",revision:"d8e9d8154cd2d840c96fc363241127cf"},{url:"/assets/Portfolio/front-view-young-women-celebrating-together.jpg",revision:"493776daa0294e48356467a8b139175d"},{url:"/assets/icon-192x192.png",revision:"0f13d8c8133f20bc5f668e0eecb98278"},{url:"/assets/icon-256x256.png",revision:"89b9a26d5073a65e8c81c30775821666"},{url:"/assets/icon-384x384.png",revision:"1f0fe9453f9efb6d8ee2ab46eaa6bc8f"},{url:"/assets/icon-512x512.png",revision:"cc968f83ce0381d0b691742f1568ffdc"},{url:"/assets/icon-96x96.png",revision:"531c47d6e8714fb785ad8fe4310166b7"},{url:"/assets/icons/1.svg",revision:"25cd2f0eda284b9172237993ef3fda97"},{url:"/assets/icons/2.svg",revision:"fa89329d76492d8573134983bb8a354c"},{url:"/assets/icons/3.svg",revision:"ed2b5e2916b3afcb22407efaf4c21742"},{url:"/assets/icons/4.svg",revision:"a2e9551bfb8dbe6e41120485bcc2bc0e"},{url:"/assets/icons/5.svg",revision:"57a8e0a59375b3da86126aede4fe59a8"},{url:"/assets/icons/LogoAbout.webp",revision:"3b8e2e7a5d8faea2240416d8b7101986"},{url:"/assets/icons/LogoFINAL11111.png",revision:"3bfb6cba3ad598cbf02d80b12a6ee166"},{url:"/assets/icons/checkbox.svg",revision:"404c228aeaa8be9f5721cb273f0f9dbd"},{url:"/assets/icons/loader.svg",revision:"77776f617b491f524e74dbdb27fb1d2c"},{url:"/assets/icons/menu.svg",revision:"10eece93b2201ab156bec261a8a7daa7"},{url:"/assets/images/404/notfound-final.webp",revision:"d5c5c87f7ea0bb5fe8d860d563183b4f"},{url:"/assets/images/antresolIcon/1.webp",revision:"5937dbaec26c6a191dc70dcdaa0b692f"},{url:"/assets/images/antresolIcon/2.webp",revision:"2797a06236aefce86b2902272dc92190"},{url:"/assets/images/antresolIcon/3.webp",revision:"fd162d131275c742d0c93a88663f9ee3"},{url:"/assets/images/antresolIcon/4.webp",revision:"2dbab74b22aea8480dd79eb81eda57ba"},{url:"/assets/images/antresolIcon/5.webp",revision:"973cec89074d4f052cc38f2480f53e66"},{url:"/assets/images/antresolIcon/6.webp",revision:"8bd74184b81faa44abef19a6dd43d9d8"},{url:"/assets/images/antresolIcon/7.webp",revision:"126b61d275c93a3c2d5e044641ab675a"},{url:"/assets/images/antresolIcon/8.webp",revision:"3184c0b7099c2c2328b6703a5eb0e3cb"},{url:"/assets/images/antresolIcon/9.webp",revision:"5cc9c8081fbc8ecb756350619685250f"},{url:"/assets/images/antresolIcon/antresol-background.webp",revision:"15aecb9c81bc7c063bea2c128453f439"},{url:"/assets/images/antresolIcon/background-final.webp",revision:"df48f5ba4fbbd62815ed290c7a946b48"},{url:"/assets/images/antresolIcon/background-new.webp",revision:"f4fd12cc7afc5fe5a3cb2190ac6845e2"},{url:"/assets/images/antresolIcon/background-new1.png",revision:"51e003184bd3f212860ae7c212959418"},{url:"/assets/images/antresolIcon/background-new1.webp",revision:"87936d5e3592786d5b2787a48404d69d"},{url:"/assets/images/antresolIcon/background-туц.webp",revision:"2292be2a0d4b0c584709015bfad2e7d6"},{url:"/assets/images/antresolIcon/background.jpg",revision:"c867385f779cfe6aa131459070cb2b43"},{url:"/assets/images/product/1.jpg",revision:"a3f6bee72c1e6fe613ba31e1704ebbce"},{url:"/assets/images/product/10.jpg",revision:"2bbdfed36ad991ee2545041ff832a3ee"},{url:"/assets/images/product/11.jpg",revision:"98679f3c52f1a77d6c5719b744ada1cc"},{url:"/assets/images/product/12.jpg",revision:"766b3bf1be96b90f893d5abeaaae80a2"},{url:"/assets/images/product/13.jpg",revision:"f35935b25bad1d3080767f8a929b4ef1"},{url:"/assets/images/product/14.jpg",revision:"2706d8735bbcf33c299ac6521b4aa5c9"},{url:"/assets/images/product/15.jpg",revision:"332389cacc6fbb7b7780b24e0c47ad41"},{url:"/assets/images/product/16.jpg",revision:"79715955e61224fcd0356f221e2c241d"},{url:"/assets/images/product/17.jpg",revision:"bb68dd50eebc51645c48c14fe8022004"},{url:"/assets/images/product/18.jpg",revision:"0b161a2636ee2326c97c5ce3904d8e48"},{url:"/assets/images/product/2.jpg",revision:"c0a9ada17fe95e5e1137ddb1b8d9c65e"},{url:"/assets/images/product/3.jpg",revision:"b1e27bee709ef5495301f22ea2081a4c"},{url:"/assets/images/product/4.jpg",revision:"0a4fff0f981b88b02b9b93508a66c47e"},{url:"/assets/images/product/5.jpg",revision:"20f92f0d9cb3ef07922bfb5b85195974"},{url:"/assets/images/product/6.jpg",revision:"3147a75289264c5f44f4764d2fe1e254"},{url:"/assets/images/product/7.jpg",revision:"65fb96a6ae6f31dc22d3aeedeb1452eb"},{url:"/assets/images/product/8.jpg",revision:"9f85d15cd60dd13738fad2a6d2041b54"},{url:"/assets/images/product/9.jpg",revision:"2afd0ed6273f0a40d43dc887add18deb"},{url:"/assets/it-ChooseUs/1.svg",revision:"813059a825802137c9b7a434c83d20e0"},{url:"/assets/it-ChooseUs/2.svg",revision:"6d8506c040b5c85b20a5d394b660d1db"},{url:"/assets/it-ChooseUs/2148890074.jpg",revision:"64f2d99a410279a0b084061ffd3f03ae"},{url:"/assets/it-ChooseUs/3.svg",revision:"39aaaa9118a691361d99915021809955"},{url:"/assets/it-ChooseUs/4.svg",revision:"f92609036f71d0cd8ccdc47c297ee93d"},{url:"/assets/it-ChooseUs/5.svg",revision:"70c4b7475e15ddc512ff04cc6f4cb67c"},{url:"/assets/it-ChooseUs/6.svg",revision:"ca0bb1ebde047c18ca7435412aee625a"},{url:"/assets/it-ChooseUs/SteveJobs.png",revision:"71cc3dde08107b538595e093d7a405b3"},{url:"/assets/it-ChooseUs/blog5eaaa5cb18719_nativemsg-faq.jpg",revision:"295b64a8af72d84b9c31e40706fb3cbd"},{url:"/assets/it-ChooseUs/business-people-having-meeting.jpg",revision:"880a6861212cef355c451e4cd39fac92"},{url:"/assets/it-ChooseUs/close-up-side-view-smiling-businessman-eyeglasses.jpg",revision:"2bcf87996ecbda646c52b145045e4516"},{url:"/assets/it-ChooseUs/contact.png",revision:"44aaf4fdbc777f1d6314b3a563d26db4"},{url:"/assets/it-ChooseUs/corporate-management-strategy-solution-branding-concept.jpg",revision:"b5fdd10ab95cd56501a8ee5e3de83845"},{url:"/assets/it-ChooseUs/d22f6fabce6ab1bb83ced8ea318a4392.jpg",revision:"fed0fb4f7fe59c521a22784c10927165"},{url:"/assets/it-ChooseUs/image.png",revision:"38eb25a5d3f4d4e8b427e955b9b85f82"},{url:"/assets/it-ChooseUs/map.png",revision:"221a6d59358e0e04f7152b22d0bb152c"},{url:"/assets/it-ChooseUs/programming-background-collage.jpg",revision:"341f701e596bb9af13dec057183c0cd6"},{url:"/assets/it-ChooseUs/programming-background-with-html.jpg",revision:"fb38da07a1be2faee4c8b01d76dbea1d"},{url:"/assets/it-ChooseUs/woman-holding-clipboard-her-coworkers.jpg",revision:"d2e4d29c0342c5f9bc6c1ab9c06a8d6f"},{url:"/assets/it/1.jpg",revision:"465044474f3ecb880f3ee6f8b7923b9d"},{url:"/assets/it/2.jpg",revision:"b58dc451241a75e0f0cd9e98d1367c8f"},{url:"/assets/it/3.jpg",revision:"b58dc451241a75e0f0cd9e98d1367c8f"},{url:"/assets/services/1.svg",revision:"f92609036f71d0cd8ccdc47c297ee93d"},{url:"/assets/services/2.svg",revision:"80fd2db74aa7041f60402c1ed0866d4d"},{url:"/assets/services/3.svg",revision:"39aaaa9118a691361d99915021809955"},{url:"/assets/services/4.svg",revision:"6d8506c040b5c85b20a5d394b660d1db"},{url:"/assets/services/5.svg",revision:"cffb9a43954bfd8cc8ae835377b74ee2"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|wav|ogg)$/i,new s.CacheFirst({cacheName:"static-audio-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp4)$/i,new s.CacheFirst({cacheName:"static-video-assets",plugins:[new s.RangeRequestsPlugin,new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
