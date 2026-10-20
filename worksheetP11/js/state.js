import { daftarProyek } from "./data.js";
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  kategoriAktif: "semua",
  daftarProyek: daftarProyek
};

export function simpan(stateApp) {
  const isi = {
    versi: VERSI,
    kategoriAktif: stateApp.kategoriAktif
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  pilihKategori("semua");
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function inisialisasiState() {
  const simpanan = muat();
  if (simpanan?.kategoriAktif) {
    state.kategoriAktif = simpanan.kategoriAktif;
  }
}
