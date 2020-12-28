const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const solarizedButton = document.getElementById('solarized');
const solarizedDarkButton = document.getElementById('solarized-dark');

const body = document.body;
const THEME_KEY = 'theme';

const themeApplied = (themeName) => {
  return body.classList[0] === themeName;
};

const currentTheme = () => body.classList[0];

const applyTheme = (newTheme) => {
  if (themeApplied(newTheme)) {
    return;
  }
  body.classList.replace(currentTheme(), newTheme);
  saveTheme(newTheme);
};

const saveTheme = (newTheme) => {
  localStorage.removeItem(THEME_KEY);
  localStorage.setItem(THEME_KEY, newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme);
};

loadTheme();

lightButton.onclick = () => applyTheme('light');
darkButton.onclick = () => applyTheme('dark');
solarizedButton.onclick = () => applyTheme('solarized');
solarizedDarkButton.onclick = () => applyTheme('solarized-dark');
