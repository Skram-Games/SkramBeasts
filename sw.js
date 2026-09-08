// Skrambeasts service worker.
// Deliberately network-first, not cache-first: this project already hit a real
// bug where a cached build kept getting served after a fix was pushed (see the
// GitHub Pages stale-cache issue from testing). A service worker cache is even
// stickier than a normal HTTP cache if built cache-first, so this always tries
// the network first and only serves the cached copy when genuinely offline.
//
// Bump CACHE_NAME (e.g. 'skrambeasts-v2') whenever you want to force every
// installed client to drop old cached assets - otherwise this doesn't need
// touching for routine content updates, since network-first already prefers
// the live version whenever one is reachable.
const CACHE_NAME = 'skrambeasts-v1';
const APP_SHELL = ['./', './index.html', './manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting(); // take over immediately rather than waiting for every open tab to close
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return; // never intercept Firebase writes etc.
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
