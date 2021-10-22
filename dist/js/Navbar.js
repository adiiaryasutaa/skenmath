/*
  Author: Adi Aryasuta
  Since: October 19, 2021
  Last modified: October 19, 2021
*/

const navbarFixed = false;
const Y = 20;

const navbar = document.querySelector('#navbar');
const navbarToggler = document.querySelector('#navbar-toggler');

let navbarTogglerActive = false;
let windowScrolledY = window.scrollY > Y;

function init() {
  if (navbarFixed) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
}

function changeNavbar(boolean) {
  if (boolean) {
    navbar.classList.replace('bg-transparent', 'bg-light');
    if (navbarFixed) navbar.classList.replace('py-4', 'py-3');
    // if (navbarFixed) navbar.classList.remove('mt-3');
  } else {
    navbar.classList.replace('bg-light', 'bg-transparent');
    if (navbarFixed) navbar.classList.replace('py-3', 'py-4');
    // if (!navbarFixed) navbar.classList.add('mt-3');
  }
}

window.addEventListener('scroll', () => {
  windowScrolledY = window.scrollY > Y;
  if (navbarFixed) {
    changeNavbar(windowScrolledY || (navbarTogglerActive && !windowScrolledY));
  }
});

navbarToggler.addEventListener('click', () => {
  navbarTogglerActive = navbarTogglerActive ? false : true;
  if (navbarFixed) {
    changeNavbar(navbarTogglerActive || (!navbarTogglerActive && windowScrolledY));
  } else {
    changeNavbar(navbarTogglerActive);
  }
});

init();