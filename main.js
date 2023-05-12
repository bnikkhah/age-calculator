import "./style.scss";
import Alpine from "alpinejs";
window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  Alpine.data("data", () => ({
    day: 0,
    month: 0,
    year: 0,
    handleSubmit(e) {},
  }));
});

Alpine.start();
