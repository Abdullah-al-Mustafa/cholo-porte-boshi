const CACHE_NAME = 'cpb-v1';
const urlsToCache = [
  '/cholo-porte-boshi/',
  '/cholo-porte-boshi/index.html',
  '/cholo-porte-boshi/css/style.css',
  '/cholo-porte-boshi/favicon.svg',
  '/cholo-porte-boshi/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
