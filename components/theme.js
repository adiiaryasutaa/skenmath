const body = document.body;

let darkModeEnabled = sessionStorage.getItem('darkModeEnabled') == null ? false : (sessionStorage.getItem('darkModeEnabled') === 'true' ? true : false);

function changeTheme() {
  sessionStorage.setItem('darkModeEnabled', darkModeEnabled ? 'true' : 'false');
  body.setAttribute('data-theme', darkModeEnabled ? 'dark' : 'light');

  changeNavbarTheme(darkModeEnabled);
  
  try {
    changeMaterialCardTheme(darkModeEnabled);
  } catch (error) {
    /* Nothing to do.
       Because, card materials only appears on a few pages.
       Just hide error on web browser console */
  }
}

body.addEventListener('click', e => {
  if (e.target.id == 'theme-switch') {
    darkModeEnabled = darkModeEnabled ? false : true;
    changeTheme();
  }
});

changeTheme();
