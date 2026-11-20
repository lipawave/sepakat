// Service worker SEPAKAT: menampilkan notifikasi di layar HP
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

// Untuk sistem utuh: server PHP mengirim Web Push -> event "push" ini menampilkan notifikasi
self.addEventListener("push", e => {
  const data = e.data ? e.data.json() : { judul: "SEPAKAT", isi: "Ada informasi perubahan jadwal baru." };
  e.waitUntil(self.registration.showNotification(data.judul, {
    body: data.isi, icon: "icon-192.png", badge: "icon-192.png", vibrate: [200, 100, 200]
  }));
});

// Notifikasi diketuk -> buka aplikasi SEPAKAT
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then(list => {
    for (const c of list) { if ("focus" in c) return c.focus(); }
    return self.clients.openWindow("index.html#mahasiswa-dashboard");
  }));
});
