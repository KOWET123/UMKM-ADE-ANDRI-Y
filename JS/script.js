function pesan(produk) {
  const nomorWhatsApp = "6281234567890";

  const pesanWA =
    "Halo, saya ingin memesan " + produk +
    " dari Bakwan Crispy.";

  const url =
    "https://wa.me/" + nomorWhatsApp +
    "?text=" + encodeURIComponent(pesanWA);

  window.open(url, "_blank");
}