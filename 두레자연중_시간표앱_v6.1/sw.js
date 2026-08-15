/* 두레자연중학교 시간표 — 서비스 워커
   네트워크 우선(network-first) : 항상 최신 파일을 먼저 받고, 인터넷이 없을 때만 캐시를 씁니다.
   → 예전 화면이 남아 보이는 문제가 생기지 않습니다. */
var CACHE = 'timetable-v7';
var SHELL = [
  './', './index.html', './maker.html', './data.js',
  './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './icon-maskable-512.png', './apple-touch-icon.png'
];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(SHELL.map(function(u){
      return c.add(u).catch(function(){});   // 없는 파일이 있어도 설치는 계속
    }));
  }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;
  if(new URL(req.url).origin !== self.location.origin) return;   // 폰트 등 외부 자원은 그대로
  e.respondWith(
    fetch(req).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(req, copy); });
      return res;
    }).catch(function(){
      return caches.match(req).then(function(hit){
        return hit || caches.match('./index.html');
      });
    })
  );
});
