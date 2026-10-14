// Data profil tetap berasal dari proyek Pertemuan 9.
export const profil = {
  nama: 'Abimanyu Maheswara',
  nim: '25523084',
  peran: 'Mahasiswa Informatika UII yang aktif di Mapala UNISI, berkegiatan di empat divisi kepetualangan.'
};

const daftarKeahlian = [
  { nama: 'Navigasi darat', deskripsi: 'Membaca peta dan kompas untuk kegiatan divisi Gunung Hutan.' },
  { nama: 'Manajemen tali dan simpul', deskripsi: 'Dasar keamanan di divisi Panjat Tebing dan Susur Gua.' },
  { nama: 'Kerja tim di lapangan', deskripsi: 'Koordinasi dan pembagian peran saat kegiatan bersama tim.' },
  { nama: 'HTML dan CSS', deskripsi: 'Belajar design token, flexbox, dan tema gelap di PABW.' }
];

const elNama = document.querySelector('#nama-profil');
const elPeran = document.querySelector('#peran-profil');
const elKaki = document.querySelector('#kaki-profil');
const elKeterampilan = document.querySelector('#daftar-keterampilan');
const elBantuanNim = document.querySelector('#nim-bantuan');

document.title = `Profil ${profil.nama} — PABW 2026/2027`;
elNama.textContent = profil.nama;
elPeran.textContent = profil.peran;
elKaki.textContent = `${profil.nama} · ${profil.nim} · 2026`;
elBantuanNim.textContent = `Delapan digit angka, contoh ${profil.nim}.`;

// Isi keterampilan dengan DOM API dan textContent, bukan innerHTML.
daftarKeahlian.forEach((keahlian) => {
  const nama = document.createElement('dt');
  nama.textContent = keahlian.nama;
  const deskripsi = document.createElement('dd');
  deskripsi.textContent = keahlian.deskripsi;
  elKeterampilan.append(nama, deskripsi);
});
