const hamButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("hamburger--close");
  navMenu.classList.toggle("nav-menu--show");
});

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  const savedTheme = localStorage.getItem("theme");
  const currentTheme = document.documentElement.dataset.theme || "light";
  const theme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
});
