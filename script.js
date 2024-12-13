document.addEventListener("DOMContentLoaded", function () {
  const carModelsContainer = document.querySelector(".car-models");
  const carCards = document.querySelectorAll(".car");
  let scrollPosition = 0;
  let isAutoScrolling = true;
  let timeoutId;
  const cars = Array.from(carModelsContainer.children);
  cars.forEach((car) => {
    const clone = car.cloneNode(true);
    carModelsContainer.appendChild(clone);
  });
  function autoScroll() {
    if (isAutoScrolling) {
      scrollPosition += 1;
      carModelsContainer.scrollLeft = scrollPosition;
      if (scrollPosition >= carModelsContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      requestAnimationFrame(autoScroll);
    }
  }
  autoScroll();
  carModelsContainer.addEventListener("wheel", function (e) {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      return;
    }
    e.preventDefault();
    carModelsContainer.scrollLeft += e.deltaX;
    isAutoScrolling = false;
    scrollPosition = carModelsContainer.scrollLeft;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      isAutoScrolling = true;
      autoScroll();
    }, 2000);
  });
  carCards.forEach((card) => {
    const redirectUrl = card.getAttribute("data-url");

    card.addEventListener("click", () => {
      if (redirectUrl) {
        window.open(redirectUrl, "_blank");
      }
    });

    card.style.cursor = "pointer";
  });
});
