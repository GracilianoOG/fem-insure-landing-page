const hamButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const toggleHamburgerMenu = () => {
  hamButton.classList.toggle("hamburger--close");
  navMenu.classList.toggle("nav-menu--show");
  hamButton.setAttribute(
    "aria-expanded",
    navMenu.classList.contains("nav-menu--show")
  );
};

export const loadHamburger = () => {
  hamButton.addEventListener("click", toggleHamburgerMenu);
};
