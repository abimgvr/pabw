const ALAMAT = 'https://jsonplaceholder.typicode.com/posts?_limit=8';

export async function ambilNotisia() {
  try {
    const respons = await fetch(ALAMAT);
    console.log('status', respons.status, 'ok', respons.ok);

    // fetch tidak menolak Promise hanya karena status 404/500.
    if (!respons.ok) {
      throw new Error('Status HTTP ' + respons.status);
    }

    const data = await respons.json();
    if (!Array.isArray(data)) {
      throw new Error('Format data tidak sesuai: seharusnya larik.');
    }

    // Contoh dua arah JSON untuk data yang sudah diterima.
    const teksJSON = JSON.stringify(data);
    const salinanData = JSON.parse(teksJSON);
    return salinanData;
  } catch (galat) {
    console.error('Gagal mengambil notisia:', galat.message);
    throw galat;
  }
}
