if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-6e6e6d5c"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"assets/FacebookCover.png",revision:"a532f24b7933369adea2581bc3263d05"},{url:"assets/app-store.png",revision:"439b7cb894f757bda905d168ddcc6cfd"},{url:"assets/dollar.svg",revision:"cabed35c5af8d16eda6d7799811aaba8"},{url:"assets/favicon/android-chrome-144x144.png",revision:"e55f6c07d7331ac15d49a0749dc10584"},{url:"assets/favicon/android-chrome-192x192.png",revision:"63fa1d294f22079294b0b020923686e9"},{url:"assets/favicon/android-chrome-36x36.png",revision:"967e2668c1796f08a0d0b031eb480fa9"},{url:"assets/favicon/android-chrome-48x48.png",revision:"9c4d778a5d43ae4d51bc333f7a153e37"},{url:"assets/favicon/android-chrome-512x512.png",revision:"b1b764f4b212a2a81fc15072d28edbfb"},{url:"assets/favicon/android-chrome-72x72.png",revision:"e9781703d6540ba932b7c9a3480c153b"},{url:"assets/favicon/android-chrome-96x96.png",revision:"906f89a81a0d5f78abc7e8fecd67d5b8"},{url:"assets/favicon/apple-icon-114x114.png",revision:"29b8985e3ef8bb5748afaa00079244c5"},{url:"assets/favicon/apple-icon-120x120.png",revision:"350a3baff6c76bfccf900069c5001738"},{url:"assets/favicon/apple-icon-144x144.png",revision:"e55f6c07d7331ac15d49a0749dc10584"},{url:"assets/favicon/apple-icon-152x152.png",revision:"3b596c33bd3aa986ec4e6247eb848f65"},{url:"assets/favicon/apple-icon-180x180.png",revision:"bc14fc5a7c27ed3275901d8b1d0273fb"},{url:"assets/favicon/apple-icon-57x57.png",revision:"3c2475908f7c8c8ba090f930271f61d7"},{url:"assets/favicon/apple-icon-60x60.png",revision:"4b6ad8fec3b4ec8c14bc2d737c2d8a78"},{url:"assets/favicon/apple-icon-72x72.png",revision:"e9781703d6540ba932b7c9a3480c153b"},{url:"assets/favicon/apple-icon-76x76.png",revision:"11d70049e01ac3df6f340d608de81166"},{url:"assets/favicon/apple-icon-precomposed.png",revision:"bc14fc5a7c27ed3275901d8b1d0273fb"},{url:"assets/favicon/apple-icon.png",revision:"bc14fc5a7c27ed3275901d8b1d0273fb"},{url:"assets/favicon/favicon-16x16.png",revision:"a66e73e261b6909ff9d140e573e222e2"},{url:"assets/favicon/favicon-32x32.png",revision:"683b2c4ff3681e78ad83c378198e911b"},{url:"assets/favicon/favicon-96x96.png",revision:"906f89a81a0d5f78abc7e8fecd67d5b8"},{url:"assets/favicon/favicon.ico",revision:"82c083783214a525e7de4d4f6f488177"},{url:"assets/favicon/manifest.json",revision:"975314b455f53d379af12be657c770f1"},{url:"assets/favicon/ms-icon-144x144.png",revision:"e55f6c07d7331ac15d49a0749dc10584"},{url:"assets/favicon/ms-icon-150x150.png",revision:"7f3f520ed7776da81fb92a5774100714"},{url:"assets/favicon/ms-icon-310x310.png",revision:"a781af95b9cebdd2bfe0177502c3e5c1"},{url:"assets/favicon/ms-icon-70x70.png",revision:"7b3a3cd347d2882f43494cc21016139a"},{url:"assets/google-play.png",revision:"357fca2fe8081fe8cf9bfcd5ab94fea3"},{url:"assets/hero.svg",revision:"f5025d6f31971a37899792c32f06866c"},{url:"assets/icn_fluxo_chart.png",revision:"34bc1df1eccf214420ac958859de3fec"},{url:"assets/icn_fluxo_chart.svg",revision:"83f58c8feb87778a0c004d9bc8438c42"},{url:"assets/icn_fluxo_chart@2x.png",revision:"ff224762585b658ba79dfce014e70096"},{url:"assets/icn_fluxo_cloud.png",revision:"93761d96a64961f27aab0c2422ceea2e"},{url:"assets/icn_fluxo_cloud.svg",revision:"852d9950d1331a3362759b16560e70fe"},{url:"assets/icn_fluxo_cloud@2x.png",revision:"f4b108da7d6fd654504beccd09dc5545"},{url:"assets/icn_fluxo_customer-support.png",revision:"044d8ed6d405d0c409663f4cc53cdf44"},{url:"assets/icn_fluxo_customer-support.svg",revision:"77117d54b0fffecb9c2ac18e4f48ba60"},{url:"assets/icn_fluxo_customer-support@2x.png",revision:"3b300a4cee515152650757d3619da1ba"},{url:"assets/icn_fluxo_group-users.png",revision:"530a5e56e894bb5406b98adbc7fadafe"},{url:"assets/icn_fluxo_group-users.svg",revision:"576ca8bc9f66584e162ca857e5cd77f2"},{url:"assets/icn_fluxo_group-users@2x.png",revision:"343e630afa59fe6a7999947483abc9e8"},{url:"assets/icn_fluxo_influencer.png",revision:"aa370c3784b84f552b00a012e317668f"},{url:"assets/icn_fluxo_influencer.svg",revision:"19fca58f90761ba392bdd0e6585a48c4"},{url:"assets/icn_fluxo_influencer@2x.png",revision:"e1c7d732a3b2e0c6bd002e2dec9e5de9"},{url:"assets/icn_fluxo_office.png",revision:"54921321048d04df2262983f2e08128c"},{url:"assets/icn_fluxo_office.svg",revision:"d8dadecc59006f1d9ee1d36a52025330"},{url:"assets/icn_fluxo_office@2x.png",revision:"7784b4d561057b773be7df525d733edd"},{url:"assets/icn_fluxo_quote.png",revision:"44f2c3d8a889ad468f96413d8033e245"},{url:"assets/icn_fluxo_quote.svg",revision:"30a3e594cecb423798f3f6318ad24e1c"},{url:"assets/icn_fluxo_quote@2x.png",revision:"7e0f068ac263d2031c3e7536f786b8ef"},{url:"assets/icn_fluxo_speaker.png",revision:"0b16f43af10e945cec194833e1faa269"},{url:"assets/icn_fluxo_speaker.svg",revision:"899a529b7062000fdfe2b36aea1be6ef"},{url:"assets/icn_fluxo_speaker@2x.png",revision:"3fbc72acb497e06c8a125d535de91da5"},{url:"assets/icn_fluxo_stacks.png",revision:"03aec495bf14e89afb3f719bda8151e9"},{url:"assets/icn_fluxo_stacks.svg",revision:"301c4a8e917657111114a666256b5f27"},{url:"assets/icn_fluxo_stacks@2x.png",revision:"ae11fcdf1ef22d55e00a86ad6739c4fd"},{url:"assets/icn_fluxo_users.png",revision:"e5a8ecda578afbef21bcb208371e930e"},{url:"assets/icn_fluxo_users.svg",revision:"bc32a279b86eece970c8e79dd972d745"},{url:"assets/icn_fluxo_users@2x.png",revision:"74f85bf65afaad206e4725a07c535a98"},{url:"assets/icn_testimonials_arrownext.svg",revision:"332f0a560bdf70ce54d5914b6d476554"},{url:"assets/icn_testimonials_arrowprev.svg",revision:"3a65e1a3aefce1bdf037dc64e155d375"},{url:"assets/logo-alt.png",revision:"00d031583777a5e18931a023d0500f7c"},{url:"assets/logo-alt.svg",revision:"159ec48147f543daba365b5fecf88eee"},{url:"assets/logo-footer.svg",revision:"5b540cc0a1e50f6630a3d413cb9c4305"},{url:"assets/logo.png",revision:"2330e9da31978c3173f75dc1e66eef8c"},{url:"assets/logo.svg",revision:"11670e7d4a9891546c25a48c7a1823a1"},{url:"assets/mobileapp.png",revision:"74f916cece97729e72f1e0c8215d9e56"},{url:"assets/pricing.svg",revision:"d9c6eb836ddc4da14996292932ad9c3f"},{url:"assets/svg/bird-house.svg",revision:"c59151acfb38929e04d0c7b31b35d1b4"},{url:"assets/svg/card-background.svg",revision:"183a0d7cec888eb05e06611bf0b13a1a"},{url:"assets/svg/ground@-min.png",revision:"03c0fc55145cc5059857d0b5b04c8480"},{url:"assets/svg/large-building.svg",revision:"e9f387dacc9ccf59d5e699899687b0b2"},{url:"assets/svg/small-building.svg",revision:"8f295a50d09f2e10b99a0212f66cb471"},{url:"css/main.css",revision:"dd5694c62cc6ed7ba0d64ea9d633f637"},{url:"index.html",revision:"2ba8cc2c029a89390b6d62b981c3e490"},{url:"main.js",revision:"3565d4c8949f0aee09a1f4dc7b3ea6b9"},{url:"robots.txt",revision:"6978a616c585d03cb5b542a891995efb"},{url:"sitemap.xml",revision:"b48361b62b03f2ecc979cf1057c01b64"}],{}),e.cleanupOutdatedCaches()}));
