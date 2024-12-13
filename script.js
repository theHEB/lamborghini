document.addEventListener("DOMContentLoaded", function () {
  const carModelsContainer = document.querySelector(".car-models");
  const carCards = document.querySelectorAll(".car"); // Tüm araba kartlarını seç

  let scrollPosition = 0;
  let isAutoScrolling = true; // Otomatik kaydırmanın aktif olup olmadığını belirten bir bayrak
  let timeoutId; // Otomatik kaydırmayı tekrar başlatma için zamanlayıcı

  // Tüm araba öğelerini kopyala ve sonsuzluk için yeniden ekle
  const cars = Array.from(carModelsContainer.children);
  cars.forEach((car) => {
    const clone = car.cloneNode(true); // Elemanı klonla
    carModelsContainer.appendChild(clone); // Kopyayı sona ekle
  });

  // Sonsuz kaydırma fonksiyonu
  function autoScroll() {
    if (isAutoScrolling) {
      scrollPosition += 1; // Kaydırma hızı (arttırarak hızlandırabilirsiniz)
      carModelsContainer.scrollLeft = scrollPosition;

      // Kaydırma sonuna ulaşıldığında başa döner
      if (scrollPosition >= carModelsContainer.scrollWidth / 2) {
        scrollPosition = 0; // Başa al
      }

      requestAnimationFrame(autoScroll); // Animasyonu sürekli çalıştır
    }
  }

  // Başlat otomatik kaydırma
  autoScroll();

  // Fare kaydırma ile manuel kaydırma kontrolü
  carModelsContainer.addEventListener("wheel", function (e) {
    // Yalnızca yatay kaydırma yapılmasına izin ver
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      return; // Yalnızca dikey kaydırma varsa işlemi durdur
    }

    e.preventDefault(); // Varsayılan kaydırma davranışını engelle
    carModelsContainer.scrollLeft += e.deltaX; // Yatay kaydırma işlemi

    // Fare ile kaydırma yapıldığında, otomatik kaydırmayı durdur
    isAutoScrolling = false;

    // Kaydırma pozisyonunu güncelle
    scrollPosition = carModelsContainer.scrollLeft;

    // Otomatik kaydırmayı yeniden başlatmak için zamanlayıcı
    clearTimeout(timeoutId); // Eski zamanlayıcıyı temizle
    timeoutId = setTimeout(() => {
      isAutoScrolling = true; // Otomatik kaydırmayı tekrar başlat
      autoScroll(); // Otomatik kaydırmayı başlat
    }, 2000); // 2 saniye sonra otomatik kaydırma yeniden başlar (isteğe göre değiştirilebilir)
  });

  // Araba kartlarına tıklama işlemi
  carCards.forEach((card) => {
    const redirectUrl = card.getAttribute("data-url");

    card.addEventListener("click", () => {
      if (redirectUrl) {
        window.open(redirectUrl, "_blank"); // İlgili sayfayı yeni sekmede aç
      }
    });

    card.style.cursor = "pointer";
  });
});
