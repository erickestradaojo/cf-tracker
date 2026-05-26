// SW mínimo — solo desregistra versiones anteriores que puedan estar cacheando mal
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
// Sin fetch handler — todas las peticiones van directo a la red
