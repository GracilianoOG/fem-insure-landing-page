const hamButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

export const loadHamburger = () => {
  hamButton.addEventListener("click", () => {
    hamButton.classList.toggle("hamburger--close");
    navMenu.classList.toggle("nav-menu--show");
  });
};
