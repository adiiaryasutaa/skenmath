class MaterialCard extends HTMLElement {
  constructor() {

    super();

    let
      cardHref = this.hasAttribute('card-href') && !this.getAttribute('card-href').length < 1 ? `href="${this.getAttribute('card-href')}"` : '',
      cardImgSrc = this.hasAttribute('card-img-src') ? this.getAttribute('card-img-src') : '',
      cardImgAlt = this.hasAttribute('card-img-alt') ? this.getAttribute('card-img-alt') : 'no-img',
      cardTitle = this.hasAttribute('card-title') ? this.getAttribute('card-title') : 'No Title :)';

    this.innerHTML = `
      <a class="text-decoration-none" ${cardHref}>
        <div class="material-card card bg-light shadow-sm h-100">
          <img src="${cardImgSrc}" class="card-img-top" alt="${cardImgAlt}">
          <div class="card-body">
            <h5 class="card-title">${cardTitle}</h5>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define('material-card', MaterialCard);

const materialCard = document.querySelectorAll('.material-card'); 

/**
 * If the parameter is true, the material cards will change its theme into dark.
 * False otherwise.
 * 
 * @since October 24, 2021
 */
function changeMaterialCardTheme(boolean) {
  if (boolean) {
    materialCard.forEach(e => {
      e.classList.remove('bg-light');
      e.classList.add('bg-dark');
    });
  } else {
    materialCard.forEach(e => {
      e.classList.remove('bg-dark');
      e.classList.add('bg-light');
    });
  }
}