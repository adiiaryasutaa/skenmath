const jumbotronSkenmathLogo = document.querySelector('div#banner img.skenmath-logo');

jumbotronSkenmathLogo.addEventListener('mouseover', () => {
  jumbotronSkenmathLogo.classList.add('rotate');
  jumbotronSkenmathLogo.addEventListener('animationend', () => {
    jumbotronSkenmathLogo.classList.remove('rotate');
  });
});
