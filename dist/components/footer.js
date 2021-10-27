class Footer extends HTMLElement {
  constructor() {

    super();

    let
      brandLogoSrc = this.hasAttribute('brand-logo-src') ? this.getAttribute('brand-logo-src') : './',
      brandHref    = this.hasAttribute('brand-href') ? this.getAttribute('brand-href') : '#',
      homePageHref = this.hasAttribute('home-page-href') ? this.getAttribute('home-page-href') : '#',
      materialHref = this.hasAttribute('material-href') ? this.getAttribute('material-href') : '#',
      aboutUsHref  = this.hasAttribute('about-us-href') ? this.getAttribute('about-us-href') : '#',
      lisenceHref  = this.hasAttribute('lisence-href') ? this.getAttribute('lisence-href') : '#';

    this.innerHTML = `    
      <footer id="footer" class="container-fluid bg-dark py-5">
        <div class="container d-flex flex-column flex-lg-row justify-content-between">
          <div class="mb-4 mb-lg-0 me-3">
            <h3><img id="skenmath-logo" src="${brandLogoSrc}" alt="skenmath-logo"> <span class="fw-light">SKEN</span><span class="fw-bold">MATH</span></h3>
            <ul class="list-unstyled">
              <li class="mb-3"><span class="fw-light">SKEN</span><span class="fw-bold">MATH</span> is maintained by <span class="fw-light">SKEN</span><span class="fw-bold">MATH</span> team.</li>
              <li>© Copyright 2021 <span class="fw-light">SKEN</span><span class="fw-bold">MATH</span> team. All rights reserved.</li>
            </ul>
          </div>
          <div class="d-flex flex-sm-row flex-column justify-content-lg-between">
            <div class="d-flex mb-4 mb-lg-0">
              <div class="">
                <h5>NAVIGATIONS</h5>
                <ul class="list-unstyled">
                  <li><a class="text-white-50 text-decoration-none" href="${homePageHref}">Halaman utama</a></li>
                  <li><a class="text-white-50 text-decoration-none" href="${materialHref}">Materi</a></li>
                  <li><a class="text-white-50 text-decoration-none" href="${aboutUsHref}">Tentang kami</a></li>
                  <li><a class="text-white-50 text-decoration-none" href="${lisenceHref}">Lisensi</a></li>
                </ul>
              </div>
              <div class="mx-3">
                <h5>SUPPORT</h5>
                <ul class="list-unstyled">
                  <li><a class="text-white-50 text-decoration-none" href="">Report a Bug</a></li>
                  <li><a class="text-white-50 text-decoration-none" href="">Request a feature</a></li>
                </ul>
              </div>
            </div>
            <div class="">
              <h5>About the Site</h5>
              <ul class="list-unstyled">
                <li>Hosted on <a class="text-white-50 text-decoration-none" href="https://vercel.com/">Vercel</a></li>
                <li>Powered by <a class="text-white-50 text-decoration-none" href="">Bootstrap</a></li>
                <li>Report <a class="text-white-50 text-decoration-none" href="https://github.com/adiiaryasutaa/skenmath/issues">an Issue</a></li>
              </ul>
              <a class="text-white text-decoration-none fs-5" href="https://github.com/adiiaryasutaa/skenmath"><i class="bi-github"></i></a>
            </div>
          </div>
        </div>
      </footer>    
    `;
  }
}

customElements.define('custome-footer', Footer);