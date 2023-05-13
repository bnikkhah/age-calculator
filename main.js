import "./style.scss";
import Alpine from "alpinejs";
import moment from "moment";
window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  Alpine.data("data", () => ({
    day: "",
    month: "",
    year: "",
    calculatedDays: "--",
    calculatedMonths: "--",
    calculatedYears: "--",
    handleSubmit(e) {
      const duration = moment.duration(
        moment().diff(`${this.year}-${this.month}-${this.day}`)
      );

      this.calculatedDays = duration.days();
      this.calculatedMonths = duration.months();
      this.calculatedYears = duration.years();
    },
  }));
});

Alpine.start();
