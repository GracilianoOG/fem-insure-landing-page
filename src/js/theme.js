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

const updateToggler = (theme) => {
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.classList.toggle("theme-toggle--active", theme === "dark");
};

const changeTheme = () => {
  const currentTheme = getTheme();
  const theme = currentTheme === "dark" ? "light" : "dark";
  setTheme(theme);
  updateToggler(theme);
};

const initThemeToggle = (theme) => {
  const themeToggle = document.querySelector(".theme-toggle");
  themeToggle.addEventListener("click", changeTheme);
  updateToggler(theme);
};

export const loadAvailableTheme = () => {
  const theme = getTheme();
  setTheme(theme);
  initThemeToggle(theme);
};
