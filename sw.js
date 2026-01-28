// Minimal Service Worker to enable PWA Installability
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Simple pass-through strategy for now. 
  // In a full production PWA, caching logic would go here.
  event.respondWith(fetch(event.request));
});