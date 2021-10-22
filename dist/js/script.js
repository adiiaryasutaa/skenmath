/*
  Author: Adi Aryasuta
  Since: October 13, 2021
  Last modified: October 17, 2021
*/

const themeToggleButton = document.querySelector('#theme-toggle-btn');
const themeToggleButtonIcon = document.querySelector('#theme-toggle-btn-icon');

let darkModeEnabled = false;

themeToggleButton.addEventListener('click', () => {
  darkModeEnabled = darkModeEnabled ? false : true;
  if (darkModeEnabled) {
    themeToggleButtonIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  } else {
    themeToggleButtonIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  }
  // themeToggleButton.setAttribute('data-bs-content', darkModeEnabled ? 'Dark mode disabled' : 'Dark mode enabled');
});
