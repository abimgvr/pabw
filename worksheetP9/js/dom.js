import { daftarProyek, profil } from "./app.js";

const elNama = document.querySelector("#nama-profil");
const elPeran = document.querySelector("#peran-profil");
const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const tombolKirim = document.querySelector("#tombol-kirim");
const pesanForm = document.querySelector("#pesan-form");

const namaInput = document.querySelector("#nama");
const emailInput = document.querySelector("#email");
const nimInput = document.querySelector("#nim");
const pesanInput = document.querySelector("#pesan");

const inputData = [
  { input: namaInput, error: document.querySelector("#nama-error") },
  { input: emailInput, error: document.querySelector("#email-error") },
  { input: nimInput, error: document.querySelector("#nim-error") },
  { input: pesanInput, error: document.querySelector("#pesan-error") },
];

document.title = `Profil ${profil.nama} — PABW 2026/2027`;
elNama.textContent = profil.nama;
elPeran.textContent = profil.peran;

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

function render(daftar) {
  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
  wadah.append(fragmen);
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  tandaiTombolAktif(tombol);
  render(terpilih);
});

function cekKolom(input, error) {
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

function cekForm() {
  let sah = true;

  inputData.forEach(({ input, error }) => {
    if (!cekKolom(input, error)) {
      sah = false;
    }
  });

  tombolKirim.disabled = !sah;
  return sah;
}

inputData.forEach(({ input, error }) => {
  input.addEventListener("input", () => {
    cekKolom(input, error);
    cekForm();
    pesanForm.textContent = "";
  });
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  if (!cekForm()) {
    const pertamaSalah = inputData.find(
      ({ input }) => input.getAttribute("aria-invalid") === "true"
    );
    pertamaSalah?.input.focus();
    return;
  }

  pesanForm.textContent = "Form valid dan siap diproses.";
});

render(daftarProyek);
