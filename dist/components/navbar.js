/********** CONFIG **********/

const
  navbarFixed   = true,
  Y             = 20;

/********** CONFIG **********/


class Navbar extends HTMLElement {
  constructor() {

    super();

    let classes = 'navbar navbar-expand-lg navbar-light bg-transparent py-4'.concat(navbarFixed ? ' fixed-top' : '');
    
    let
      brandLogoSrc = this.hasAttribute('brand-logo-src') ? this.getAttribute('brand-logo-src') : './',
      brandHref    = this.hasAttribute('brand-href') ? this.getAttribute('brand-href') : '#',
      homePageHref = this.hasAttribute('home-page-href') ? this.getAttribute('home-page-href') : '#',
      materialHref = this.hasAttribute('material-href') ? this.getAttribute('material-href') : '#',
      aboutUsHref  = this.hasAttribute('about-us-href') ? this.getAttribute('about-us-href') : '#',
      lisenceHref  = this.hasAttribute('lisence-href') ? this.getAttribute('lisence-href') : '#',
      activePage = this.hasAttribute('active-page') ? this.getAttribute('active-page') : '1';

    this.innerHTML = `
      <nav id="navbar" class="${classes}">
        <div class="container">
          <a class="navbar-brand" href="${brandHref}">
            <img src="${brandLogoSrc}" width="35px" alt="skenmath-logo">
            <span class="fw-light">SKEN</span><span class="fw-bold">MATH</span>
          </a>
          <button id="navbar-toggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav flex-grow-1 justify-content-center me-auto mb-2 mb-lg-0">
              <li class="nav-item pe-1">
                <a class="nav-link ${activePage === '1' ? 'active' : ''}" ${activePage === '1' ? 'aria-current="page"' : ''} href="${homePageHref}">Halaman Utama</a>
              </li>
              <li class="nav-item pe-1">
                <a class="nav-link ${activePage === '2' ? 'active' : ''}" ${activePage === '2' ? 'aria-current="page"' : ''} href="${materialHref}">Materi</a>
              </li>
              <li class="nav-item pe-1">
                <a class="nav-link ${activePage === '3' ? 'active' : ''}" ${activePage === '3' ? 'aria-current="page"' : ''} href="${aboutUsHref}">Tentang Kami</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="${lisenceHref}">Lisensi</a>
              </li>
            </ul>
            <div class="d-flex">
              <button id="theme-toggle-btn" class="btn" type="button"><i id="theme-toggle-btn-icon" class="bi bi-moon-fill"></i></button>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('custome-navbar', Navbar);

const
  navbar        = document.querySelector('custome-navbar nav'),
  navbarToggler = document.querySelector('custome-navbar #navbar-toggler');

let
  navbarTheme = 'light',
  navbarTogglerActive = false,
  windowScrolledY = window.scrollY > Y;

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
