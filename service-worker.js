self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("mdfy").then(function (cache) {
      return cache.addAll([
        "/",
        "/manifest.json",
        "/favicon.ico",
        "/index.html",
        "/css/app.css",
        "/css/github-styles.css",
        "/js/marked.min.js",
        "/js/app.js",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
