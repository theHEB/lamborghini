function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}
const carModelsSection = document.querySelector(".car-models");
carModelsSection.addEventListener("wheel", (event) => {
  event.preventDefault();
  carModelsSection.scrollLeft += event.deltaY;
});
