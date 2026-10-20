export const daftarKeahlian = [
  { nama: "Navigasi darat", deskripsi: "Membaca peta dan kompas untuk kegiatan divisi Gunung Hutan." },
  { nama: "Manajemen tali dan simpul", deskripsi: "Dasar-dasar keamanan yang dipakai di divisi Panjat Tebing dan Susur Gua." },
  { nama: "Kerja tim di lapangan", deskripsi: "Koordinasi dan pembagian peran saat kegiatan ekspedisi bersama tim." },
  { nama: "HTML dan CSS", deskripsi: "Sedang belajar: design token, flexbox, dan tema gelap di mata kuliah PABW." },
];

export const profil = {
  nama: "Abimanyu Maheswara",
  nim: "25523084",
  peran: "Mahasiswa Informatika UII yang aktif di Mapala UNISI, berkegiatan di empat divisi kepetualangan.",
  keahlian: daftarKeahlian.map((keahlian) => keahlian.nama),
  kontak: {}
};

export const daftarProyek = [
  { judul: "Halaman Kelas Terbuka Kampus", deskripsi: "praktikum P03, HTML semantik dan form", kategori: "web" },
  { judul: "Laporan pendakian gunung hutan", deskripsi: "dokumentasi jalur dan logistik tim", tahun: 2026, kategori: "mapala" },
  { judul: "Dokumentasi latihan panjat tebing", deskripsi: "tingkat dasar untuk anggota baru", tahun: 2026, kategori: "mapala" },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");
