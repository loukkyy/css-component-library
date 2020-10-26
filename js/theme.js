const html = document.querySelector("html");
const themes = [
  "theme1",
  "theme1 invert",
  "theme2",
  "theme2 invert",
  "theme3",
  "theme3 invert",
];
const btn = document.querySelector("#changeThemeBtn");

function loadTheme() {
  const theme = localStorage.getItem("theme");
  if (theme != null) {
    setTheme(theme);
  } else {
    setTheme("theme1");
  }
}

function setTheme(theme) {
  html.setAttribute("theme", theme);
}
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}
function changeTheme() {
  let index = themes.indexOf(html.getAttribute("theme", "theme2"));
  if (index === themes.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  // set theme
  setTheme(themes[index]);

  // save theme to local storage
  saveTheme(themes[index]);
}
loadTheme();
btn.addEventListener("click", (e) => {
  changeTheme();
});
