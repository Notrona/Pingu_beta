const staticDevPingu = "Pingu_team"
const assets = [
  "index.html",
  "css/estilos.css",
  "/js/jquery.js",
  "img/cactus1.jpg",
  "img/cactus2.jpg",
  "img/dino.jpg",
  "img/Fondo.jpg",
  "img/nube.jpg",
  "img/pinguino.jpg",
  "img/suelo.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevPingu).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })