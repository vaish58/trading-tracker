const cacheName = "trading-tracker-cache-v1";
const assets = [
  "/trading-tracker/",
  "/trading-tracker/index.html",
  "/trading-tracker/manifest.json",
  "/trading-tracker/icon-192.png",
  "/trading-tracker/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
