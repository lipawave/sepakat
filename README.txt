SEPAKAT - Prototype (HTML, CSS, JavaScript)

CARA MEMBUKA DI LAPTOP
1. Ekstrak zip.
2. Klik dua kali index.html (Chrome/Edge). Tidak perlu XAMPP.

NOTIFIKASI DI LAYAR HP
Notifikasi pop-up HP hanya jalan kalau prototype dibuka lewat alamat https
(misalnya di-upload ke Vercel/Netlify/GitHub Pages), bukan dari file zip.
1. Buka alamat https-nya di Chrome HP.
2. Menu titik tiga > "Tambahkan ke layar utama" (iPhone: Share > Add to Home Screen, iOS 16.4+).
3. Login sebagai Mahasiswa > tekan "Aktifkan notifikasi HP" > Izinkan.
4. Saat Dosen mengirim usulan / Fakultas memutuskan, notifikasi muncul di layar HP.
Catatan: prototype belum punya server, jadi notifikasi muncul di HP yang sama.
Supaya laptop dosen bisa mengirim notifikasi ke HP mahasiswa lain, perlu PHP + MySQL
(tabel notifikasi) + Web Push. File sw.js sudah siap menerima event "push" itu.

STRUKTUR
- index.html     : halaman utama
- css/style.css  : tampilan
- js/script.js   : logika (login, pengajuan, voting, notifikasi)
- sw.js          : service worker (notifikasi HP)
- manifest.json  : supaya bisa dipasang seperti aplikasi di HP
- ../database/sepakat.sql : database MySQL (import lewat phpMyAdmin)
