//change-theme is the button id
const changeTheme = document.querySelector('#change-theme');
const main = document.querySelector('.main');
const darkModeLink = document.createElement('link');
const lightModeLink = document.createElement('link');

let darkMode = false;
let lightMode = null;

const createTheme = (mode, cssLink) => {
  mode.setAttribute("rel", "stylesheet");
  mode.setAttribute("href", cssLink);
  document.head.appendChild(mode);
  return;
}
const removeMode = (mode) => {
  document.head.removeChild(mode);
  return;
}

const themeChanger = () => {
  if (darkMode === false){
    if (lightMode === true) removeMode(lightModeLink);
    createTheme(darkModeLink, "css/dark-theme.css");
    alert('switching to dark mode');
    lightMode = false;
    darkMode = true;
  } else if (darkMode === true && lightMode == false) {
    removeMode(darkModeLink);
    createTheme(lightModeLink, "css/light-theme.css");
    alert('switching to light mode');
    darkMode = false;
    lightMode = true;
  }
  return;
}

changeTheme.addEventListener('click', themeChanger, false);