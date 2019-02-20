var CACHE_NAME = 'static-cache';

var urlsToCache = [
  'stylesheets/style.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for install event, set callback
self.addEventListener('install', function(event) {
    // Perform some task
});