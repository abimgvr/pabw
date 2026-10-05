# PABW — Pertemuan 8: JavaScript Modern ES6+

Nama: Abimanyu Maheswara · NIM: 25523084 · Kelas: E

Halaman profil dari Pertemuan 6 (`profil.html` dan enam berkas CSS) yang isinya sekarang berasal dari data JavaScript di `js/app.js`: identitas, daftar keterampilan, dan daftar karya tidak lagi ditulis di HTML.

## Menjalankan

Buka lewat server lokal, bukan klik dua kali:

- Live Server di VS Code: klik kanan `profil.html` → Open with Live Server
- atau: `python3 -m http.server 8000` lalu buka `http://localhost:8000/profil.html`

## Perubahan dari Pertemuan 6

Struktur, landmark, label, dan alt di `profil.html` tidak diubah. Perubahannya hanya:

- atribut `id` pada `h1`, tagline, daftar karya, daftar keterampilan, dan paragraf kaki halaman
- isi elemen-elemen itu dikosongkan, lalu diisi dari `js/app.js`
- satu baris `<script type="module" src="js/app.js"></script>` sebelum `</body>`

Berkas CSS tidak diubah.

## Isi `js/app.js`

- data: `daftarKeahlian`, `profil`, `daftarProyek`
- fungsi murni: `buatPerkenalan`, `formatKeahlian`
- array methods: `map`, `filter`, `find`, dan `[...daftarProyek].sort` pada salinan

## Deklarasi AI

Dibantu AI (Claude): draf `js/app.js`, penambahan `id` dan baris script di `profil.html`, dan pengisian lembar worksheet.

Dikerjakan sendiri: (lengkapi sebelum diserahkan — mis. menjalankan halaman di peramban, memeriksa Console, tangkapan layar, commit dan push)
