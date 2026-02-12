const CACHE_NAME = 'merola-v6';
const assets = ['merola.html', 'manifest.json', 'readingData.js', 'lessonData.js', 'quizGenerators.js', 'wordPartsData.js', 'storiesData.js', 'writingData.js'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

