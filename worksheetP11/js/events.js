import { pilihKategori, aturUlang } from "./state.js";
import { inputData, cekKolom, cekForm, setPesanForm } from "./dom.js";

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  const form = document.querySelector("form");

  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol) return;

      if (tombol.id === "tombol-reset") {
        aturUlang();
        return;
      }

      const kategori = tombol.dataset.kategori;
      if (kategori) {
        pilihKategori(kategori);
      }
    });
  }

  inputData.forEach(({ input, error }) => {
    if (input) {
      input.addEventListener("input", () => {
        cekKolom(input, error);
        cekForm();
        setPesanForm("");
      });
    }
  });

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!cekForm()) {
        const pertamaSalah = inputData.find(
          ({ input }) => input.getAttribute("aria-invalid") === "true"
        );
        pertamaSalah?.input.focus();
        return;
      }

      setPesanForm("Form valid dan siap diproses.");
    });
  }
}
