# Worksheet PABW Pertemuan 10 — Profil Abimanyu

## Isi proyek
- `profil.html`: halaman profil.
- `css/`: enam berkas CSS dari proyek sebelumnya.
- `js/app.js`: data dan elemen profil, tanpa `fetch`.
- `js/dom.js`: tampilan data dan keadaan antarmuka.
- `js/api.js`: lapisan data, alamat API, `fetch`, pemeriksaan `response.ok`, pembacaan JSON, dan ekspor `ambilNotisia`.

## API
Proyek menggunakan API publik tanpa kunci akses:
`https://jsonplaceholder.typicode.com/posts?_limit=8`

Jika API tidak dapat dijangkau atau diblokir CORS di jaringan kelas, coba jaringan lain atau gunakan berkas JSON lokal sesuai arahan pengampu. Respons API dan tangkapan layar harus diperiksa langsung di browser sebelum dikumpulkan.

## Menjalankan
Dari folder proyek jalankan server lokal, misalnya:
`python -m http.server 8000`
Lalu buka `http://localhost:8000/profil.html`. Jangan membuka halaman dengan `file://`, karena modul JavaScript dan fetch dapat diblokir browser.

## Keadaan antarmuka
- Memuat: teks “Memuat data dari API...”.
- Berhasil: daftar kartu dari data API.
- Gagal: pesan kesalahan ditampilkan di halaman.
- Kosong: pesan “Belum ada notisia...” saat larik kosong atau filter tidak menghasilkan data.

## Deklarasi penggunaan AI
AI digunakan untuk membantu menyusun dan memeriksa struktur `js/api.js`, penanganan empat keadaan antarmuka, serta draf jawaban worksheet dan README. Saya perlu membaca, menguji, dan memahami setiap bagian kode sebelum menyerahkan tugas. Pengujian browser, pemeriksaan Network, tangkapan layar, dan unggah GitHub harus dilakukan sendiri.
