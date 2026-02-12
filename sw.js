const CACHE_NAME = 'merola-v8';
const assets = [
  'index.html',
  'manifest.json',
  'readingData.js',
  'lessonData.js',
  'quizGenerators.js',
  'wordPartsData.js',
  'storiesData.js',
  'writingData.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});

