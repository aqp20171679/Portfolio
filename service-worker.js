"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Portfolio/index.html","9baaadca7f25c5395df41f3a0e6c0855"],["/Portfolio/static/css/main.de9ac1d6.css","a341492436c97c3be522dc0d44bd208d"],["/Portfolio/static/js/main.a70a0ee0.js","a321f287b54db2b2251bc67ff215c7f2"],["/Portfolio/static/media/CSS3.07c31269.png","07c31269d90c2a4ab2ecc62293f8b29d"],["/Portfolio/static/media/Js.eea3294d.png","eea3294df75ec06c7c00fc64e5a44ef3"],["/Portfolio/static/media/ale81.b71d672e.png","b71d672e05a79c889e3a68ff6f91d32e"],["/Portfolio/static/media/buscaminas.ee637c95.png","ee637c95abc3be90dcf68e9e44f49b3d"],["/Portfolio/static/media/firebase.2d6e8ab9.png","2d6e8ab980dc01db8c918204d0f9913a"],["/Portfolio/static/media/girlcode5.423d1db0.png","423d1db025138ec2e61d8551c33cc8c5"],["/Portfolio/static/media/html.a9bb8012.png","a9bb8012d4ed9e0345b5ee1e4166f4a2"],["/Portfolio/static/media/jquery.04f3a08b.png","04f3a08b0a48cba67f0394ac58babd0f"],["/Portfolio/static/media/lyft.a70f71b4.png","a70f71b42948a00f721f48aacc59cd57"],["/Portfolio/static/media/memory.a02dd472.png","a02dd472f24b2246410f26624736b104"],["/Portfolio/static/media/react.206c8110.png","206c8110410ece0dfe81813f8299dc78"],["/Portfolio/static/media/redux.ad36f35c.png","ad36f35ca445f1798e4fc21a79b0c639"],["/Portfolio/static/media/reserva.eb73b9b2.png","eb73b9b2236d8c486c49bb007873aa65"],["/Portfolio/static/media/sass.2a9703a6.png","2a9703a614524147b49034e92df7d621"],["/Portfolio/static/media/trello.b5e1c40e.png","b5e1c40e08751b0c1aebcfeb39b7f272"],["/Portfolio/static/media/trivia.79d572d1.png","79d572d17bd2e75d9c39a5a27a2a5305"],["/Portfolio/static/media/youtube.cd43ff35.png","cd43ff354a2539a74ad648412e2032aa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/Portfolio/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});