// ===== Data halaman (Lembar B dan D) =====
const daftarKeahlian = [
  { nama: "Navigasi darat", deskripsi: "Membaca peta dan kompas untuk kegiatan divisi Gunung Hutan." },
  { nama: "Manajemen tali dan simpul", deskripsi: "Dasar-dasar keamanan yang dipakai di divisi Panjat Tebing dan Susur Gua." },
  { nama: "Kerja tim di lapangan", deskripsi: "Koordinasi dan pembagian peran saat kegiatan ekspedisi bersama tim." },
  { nama: "HTML dan CSS", deskripsi: "Sedang belajar: design token, flexbox, dan tema gelap di mata kuliah PABW." },
];

const profil = {
  nama: "Abimanyu Maheswara",
  nim: "25523084",
  peran: "Mahasiswa Informatika UII yang aktif di Mapala UNISI, berkegiatan di empat divisi kepetualangan.",
  keahlian: daftarKeahlian.map((keahlian) => keahlian.nama),
};

const daftarProyek = [
  { judul: "Halaman Kelas Terbuka Kampus", deskripsi: "praktikum P03, HTML semantik dan form", kategori: "web" },
  { judul: "Laporan pendakian gunung hutan", deskripsi: "dokumentasi jalur dan logistik tim", tahun: 2026, kategori: "mapala" },
  { judul: "Dokumentasi latihan panjat tebing", deskripsi: "tingkat dasar untuk anggota baru", tahun: 2026, kategori: "mapala" },
];

const jumlahProyek = daftarProyek.length;
const kategoriAktif = "semua";

// ===== Lembar C: dua fungsi murni =====
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

// ===== Lembar B: template literal, ?? dan ?. =====
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
const surel = profil.kontak?.surel ?? "belum diisi";

// ===== Lembar D: map, filter, find, salinan =====
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const proyekMapala = daftarProyek.filter((proyek) => proyek.kategori === "mapala");
const laporan = daftarProyek.find((proyek) => proyek.judul === "Laporan pendakian gunung hutan");
const proyekTerurut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));

let proyekDitampilkan = daftarProyek;
if (kategoriAktif !== "semua") {
  proyekDitampilkan = daftarProyek.filter((proyek) => proyek.kategori === kategoriAktif);
}

// ===== Pemeriksaan di Console =====
console.log(kalimat);
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(surel);
console.table(profil.keahlian);
console.table(daftarProyek);
console.table(proyekMapala);
console.log(laporan);
console.log(judulProyek.length === daftarProyek.length);
console.log(proyekTerurut.map((proyek) => proyek.judul));
console.log(daftarProyek.map((proyek) => proyek.judul));

// ===== Menampilkan data ke halaman =====
const elNama = document.querySelector("#nama-profil");
const elPeran = document.querySelector("#peran-profil");
const elProyek = document.querySelector("#daftar-proyek");
const elKeterampilan = document.querySelector("#daftar-keterampilan");
const elKaki = document.querySelector("#kaki-profil");
const elBantuanNim = document.querySelector("#nim-bantuan");

document.title = `Profil ${profil.nama} — PABW 2026/2027`;
elNama.textContent = profil.nama;
elPeran.textContent = profil.peran;

elProyek.innerHTML = proyekDitampilkan
  .map((proyek) => {
    const akhiran = proyek.tahun === undefined ? "" : `, ${proyek.tahun}`;
    return `<li>${proyek.judul} — ${proyek.deskripsi}${akhiran}.</li>`;
  })
  .join("");

elKeterampilan.innerHTML = daftarKeahlian
  .map((keahlian) => `<dt>${keahlian.nama}</dt><dd>${keahlian.deskripsi}</dd>`)
  .join("");

elKaki.innerHTML = `${profil.nama} · ${profil.nim} · <time datetime="2026">2026</time>`;
elBantuanNim.textContent = `Delapan digit angka, contoh ${profil.nim}.`;
