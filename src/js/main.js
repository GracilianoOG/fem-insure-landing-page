const hamButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamButton.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu--show");
});
