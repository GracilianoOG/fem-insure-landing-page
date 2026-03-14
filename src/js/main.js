const hamButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("hamburger--close");
  navMenu.classList.toggle("nav-menu--show");
});

const getTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const preferredTheme = matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return savedTheme ?? preferredTheme;
};

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

const changeTheme = () => {
  const currentTheme = getTheme();
  const theme = currentTheme === "dark" ? "light" : "dark";
  setTheme(theme);
};

const initThemeToggle = () => {
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.addEventListener("click", changeTheme);
};

const loadAvailableTheme = () => {
  const theme = getTheme();
  setTheme(theme);
  initThemeToggle();
};

loadAvailableTheme();
