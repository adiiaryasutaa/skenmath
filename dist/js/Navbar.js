/*
  Author: Adi Aryasuta
  Created: October 19, 2021
  Modified: October 24, 2021
*/

const navbarFixed = true;
const Y = 20;

const navbar = document.querySelector('#navbar');
const navbarToggler = document.querySelector('#navbar-toggler');

let navbarTheme = 'light';
let navbarTogglerActive = false;
let windowScrolledY = window.scrollY > Y;

function init() {
  if (navbarFixed) {
    navbar.classList.add('fixed-top');
  } else {
    navbar.classList.remove('fixed-top');
  }
}

/**
 * If the parameter is true, the navbar will change its theme into dark.
 * False otherwise.
 * 
 * @since October 24, 2021
 */
function changeNavbarTheme(boolean) {
  if (boolean) {
    navbar.classList.replace('navbar-light', 'navbar-dark');
    if (!windowScrolledY && !navbarTogglerActive) {
      navbar.classList.replace('bg-light', 'bg-transparent');
    } else {
      if (navbar.classList.contains('bg-transparent')) {
        navbar.classList.replace('bg-transparent', 'bg-dark');
      } else {
        navbar.classList.replace('bg-light', 'bg-dark');
      }
    }
    navbarTheme = 'dark';
  } else {
    navbar.classList.replace('navbar-dark', 'navbar-light');
    if (!windowScrolledY && !navbarTogglerActive) {
      navbar.classList.replace('bg-dark', 'bg-transparent');
    } else {
      if (navbar.classList.contains('bg-transparent')) {
        navbar.classList.replace('bg-transparent', 'bg-light');
      } else {
        navbar.classList.replace('bg-dark', 'bg-light');
      }
    }
    navbarTheme = 'light';
  }
}

/**
 * If the parameter is true, the navbar will change its background into colored background and scale down padding y.
 * False otherwise.
 * 
 * @since October 24, 2021
 */
function changeNavbar(boolean) {
  if (boolean) {
    changeNavbarTheme(darkModeEnabled);
    if (navbarFixed) navbar.classList.replace('py-4', 'py-3');
  } else {
    navbar.classList.replace(navbarTheme == 'light' ? 'bg-light' : 'bg-dark', 'bg-transparent');
    if (navbarFixed) navbar.classList.replace('py-3', 'py-4');
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