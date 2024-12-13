function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}
// JavaScript Kodları
document.addEventListener("DOMContentLoaded", function () {
  const carModelsContainer = document.querySelector(".car-models");

  // Tüm araba öğelerini kopyala ve sonsuzluk için yeniden ekle
  const cars = Array.from(carModelsContainer.children);
  cars.forEach((car) => {
    const clone = car.cloneNode(true); // Elemanı klonla
    carModelsContainer.appendChild(clone); // Kopyayı sona ekle
  });

  // Sonsuz kaydırma fonksiyonu
  let scrollPosition = 0;

  function autoScroll() {
    scrollPosition += 1; // Kaydırma hızı (arttırarak hızlandırabilirsiniz)
    carModelsContainer.scrollLeft = scrollPosition;

    // Kaydırma sonuna ulaşıldığında başa döner
    if (
      scrollPosition >=
      carModelsContainer.scrollWidth / 2 // Yalnızca orijinal elemanlar kadar kaydır
    ) {
      scrollPosition = 0; // Başa al
    }

    requestAnimationFrame(autoScroll); // Animasyonu sürekli çalıştır
  }

  autoScroll();
});
document.addEventListener("DOMContentLoaded", function () {
  const carCards = document.querySelectorAll(".car"); // Tüm araba kartlarını seç

  carCards.forEach((card) => {
    // İlgili sayfanın URL'sini data-attribute'dan alıyoruz
    const redirectUrl = card.getAttribute("data-url");

    // Kart tıklama olayını ekle
    card.addEventListener("click", () => {
      if (redirectUrl) {
        window.open(redirectUrl, "_blank"); // İlgili sayfayı yeni sekmede aç
      }
    });

    // Fare ile hover durumunda 'pointer' göster
    card.style.cursor = "pointer";
  });
});
