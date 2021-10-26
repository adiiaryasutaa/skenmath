const body = document.body;
const themeToggleButton = document.querySelector('#theme-toggle-btn');
const themeToggleButtonIcon = document.querySelector('#theme-toggle-btn-icon');

let darkModeEnabled = false;

themeToggleButton.addEventListener('click', () => {

  darkModeEnabled = darkModeEnabled ? false : true;
  
  if (darkModeEnabled) {
    // set value of body's data-theme to dark
    body.setAttribute('data-theme', 'dark');
    
    // Change navbar
    changeNavbarTheme(true);
    
    // change toogle button icon
    themeToggleButtonIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  } else {
    // set value of body's data-theme to light
    body.setAttribute('data-theme', 'light');
    
    // change navbar
    changeNavbarTheme(false);
    
    // change toogle button icon
    themeToggleButtonIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  }
});