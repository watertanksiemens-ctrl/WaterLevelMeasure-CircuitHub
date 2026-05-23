// Circuit Hub High-Speed PWA Background Service Thread
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'Circuit Hub tank threshold breached!',
        icon: 'https://cdn-icons-png.flaticon.com/512/4214/4214953.png',
        tag: 'tank-alert',
        renotify: true
    };
    event.waitUntil(self.registration.showNotification('Circuit Hub Alert', options));
});
