// Author: Adi Aryasuta
// Created at: October 13, 2021
// Last modified: October 17, 2021

const                navbar = document.querySelector('#navbar');
const         navbarToggler = document.querySelector('#navbar-toggler');
const     themeToggleButton = document.querySelector('#theme-toggle-btn');
const themeToggleButtonIcon = document.querySelector('#theme-toggle-btn-icon');

let navbarTogglerIsActive = false;
let     windowIsScrolledY = window.scrollY > 150;
let       darkModeEnabled = false;

function navbarScrolled(boolean) {
  if (boolean) {
    navbar.classList.replace('bg-transparent', 'bg-light');
    navbar.classList.replace('py-4', 'py-3');
    navbar.classList.remove('mt-3');
  } else {
    navbar.classList.replace('bg-light', 'bg-transparent');
    navbar.classList.replace('py-3', 'py-4');
    navbar.classList.add('mt-3');
  }
}

window.addEventListener('scroll', () => {
  windowIsScrolledY = window.scrollY > 150;
  navbarScrolled(windowIsScrolledY || (navbarTogglerIsActive && !windowIsScrolledY));
});

navbarToggler.addEventListener('click', () => {
  navbarTogglerIsActive = navbarTogglerIsActive ? false : true;
  navbarScrolled(navbarTogglerIsActive || (!navbarTogglerIsActive && windowIsScrolledY));
});

themeToggleButton.addEventListener('click', () => {
  darkModeEnabled = darkModeEnabled ? false : true;
  if (darkModeEnabled) {
    themeToggleButtonIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
  } else {
    themeToggleButtonIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
  }
  themeToggleButton.setAttribute('data-bs-content', darkModeEnabled ? 'Dark mode disabled' : 'Dark mode enabled');
});
