import { profil, daftarKeahlian } from "./data.js";

const elNama = document.querySelector("#nama-profil");
const elPeran = document.querySelector("#peran-profil");
const elKeterampilan = document.querySelector("#daftar-keterampilan");
const elKaki = document.querySelector("#kaki-profil");
const elBantuanNim = document.querySelector("#nim-bantuan");

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const tombolKirim = document.querySelector("#tombol-kirim");
const pesanForm = document.querySelector("#pesan-form");

const namaInput = document.querySelector("#nama");
const emailInput = document.querySelector("#email");
const nimInput = document.querySelector("#nim");
const pesanInput = document.querySelector("#pesan");

export const inputData = [
  { input: namaInput, error: document.querySelector("#nama-error") },
  { input: emailInput, error: document.querySelector("#email-error") },
  { input: nimInput, error: document.querySelector("#nim-error") },
  { input: pesanInput, error: document.querySelector("#pesan-error") },
];

export function inisialisasiStatis() {
  document.title = `Profil ${profil.nama} — PABW 2026/2027`;
  if (elNama) elNama.textContent = profil.nama;
  if (elPeran) elPeran.textContent = profil.peran;

  if (elKeterampilan) {
    elKeterampilan.innerHTML = daftarKeahlian
      .map((keahlian) => `<dt>${keahlian.nama}</dt><dd>${keahlian.deskripsi}</dd>`)
      .join("");
  }

  if (elKaki) {
    elKaki.innerHTML = `${profil.nama} · ${profil.nim} · <time datetime="2026">2026</time>`;
  }

  if (elBantuanNim) {
    elBantuanNim.textContent = `Delapan digit angka, contoh ${profil.nim}.`;
  }
}

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("strong");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;

  const deskripsi = document.createElement("span");
  deskripsi.textContent = ` — ${proyek.deskripsi}`;

  li.append(judul, deskripsi);

  if (proyek.tahun !== undefined) {
    const tahun = document.createElement("span");
    tahun.textContent = `, ${proyek.tahun}.`;
    li.append(tahun);
  } else {
    const titik = document.createElement("span");
    titik.textContent = ".";
    li.append(titik);
  }

  return li;
}

function saring(state) {
  if (state.kategoriAktif === "semua") {
    return state.daftarProyek;
  }
  return state.daftarProyek.filter((proyek) => proyek.kategori === state.kategoriAktif);
}

export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

export function render(state) {
  wadah.textContent = "";
  const tampil = saring(state);

  if (tampil.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;
  const fragmen = document.createDocumentFragment();
  tampil.forEach((item) => fragmen.append(buatKartu(item)));
  wadah.append(fragmen);

  tandaiTombolAktif(state.kategoriAktif);
}

export function cekKolom(input, error) {
  const nilai = input.value.trim();
  let pesan = "";

  if (nilai === "") {
    pesan = "Kolom ini wajib diisi.";
  } else if (input === emailInput && !input.validity.valid) {
    pesan = "Masukkan alamat email yang benar, misalnya nama@contoh.com.";
  } else if (input === nimInput && !/^[0-9]{8}$/.test(nilai)) {
    pesan = "Masukkan NIM berupa tepat 8 digit angka.";
  }

  error.textContent = pesan;
  input.setAttribute("aria-invalid", pesan ? "true" : "false");
  return pesan === "";
}

export function cekForm() {
  let sah = true;
  inputData.forEach(({ input, error }) => {
    if (!cekKolom(input, error)) {
      sah = false;
    }
  });

  if (tombolKirim) tombolKirim.disabled = !sah;
  return sah;
}

export function setPesanForm(pesan) {
  if (pesanForm) pesanForm.textContent = pesan;
}
