// Background Service Worker Engine
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Background notification listener execution
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'System alert triggered!',
        icon: 'https://cdn-icons-png.flaticon.com/512/4214/4214953.png',
        tag: 'tank-alert',
        renotify: true
    };
    event.waitUntil(self.registration.showNotification('Circuit Hub Alert', options));
});
