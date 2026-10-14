import { ambilNotisia } from './api.js';

const wadah = document.querySelector('#daftar');
const kosong = document.querySelector('#pesan-kosong');
const barisFilter = document.querySelector('#filter');
let semuaNotisia = [];

function gambar(daftar) {
  wadah.textContent = '';
  if (daftar.length === 0) {
    kosong.hidden = false;
    kosong.textContent = 'Belum ada notisia pada kategori ini.';
    return;
  }
  kosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  daftar.forEach((notisia) => {
    const kartu = document.createElement('li');
    kartu.className = 'kartu';
    const judul = document.createElement('strong');
    judul.className = 'kartu__judul';
    judul.textContent = notisia.title;
    const isi = document.createElement('p');
    isi.textContent = notisia.body;
    kartu.append(judul, isi);
    fragmen.append(kartu);
  });
  wadah.append(fragmen);
}

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll('button').forEach((tombol) => {
    tombol.classList.toggle('aktif', tombol === tombolAktif);
  });
}

barisFilter.addEventListener('click', (event) => {
  const tombol = event.target.closest('button');
  if (!tombol) return;
  tandaiTombolAktif(tombol);
  const kategori = tombol.dataset.kategori;
  // Data API diperlakukan sebagai proyek web; kategori mapala sengaja kosong.
  gambar(kategori === 'mapala' ? [] : semuaNotisia);
});

async function tampilkan() {
  wadah.textContent = 'Memuat data dari API...';
  kosong.hidden = true;
  try {
    semuaNotisia = await ambilNotisia();
    if (semuaNotisia.length === 0) {
      wadah.textContent = '';
      kosong.hidden = false;
      kosong.textContent = 'Belum ada notisia.';
      return;
    }
    gambar(semuaNotisia);
  } catch (galat) {
    wadah.textContent = '';
    kosong.hidden = false;
    kosong.textContent = `Gagal memuat data: ${galat.message}. Periksa koneksi internet lalu muat ulang halaman.`;
  }
}

tampilkan();
