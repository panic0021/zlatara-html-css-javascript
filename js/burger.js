function ukljuciBurger() {
  var prikaz = document.querySelector('nav');
  if (prikaz.style.display === '' || prikaz.style.display === 'none') {
    prikaz.style.display = 'block';
  } else {
    prikaz.style.display = 'none';
  }
}



