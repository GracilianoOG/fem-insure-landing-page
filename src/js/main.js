import { loadAvailableTheme } from "./theme";

const hamButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("hamburger--close");
  navMenu.classList.toggle("nav-menu--show");
});

loadAvailableTheme();
