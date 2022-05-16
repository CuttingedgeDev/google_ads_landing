function openNav() {
  document.getElementById('landingBurger').style.width = '100%';
  document.getElementById('landing-burger-btn-group').style.display = 'flex';
}

function closeNav() {
  document.getElementById('landingBurger').style.width = '0%';
  setTimeout(function() {
    document.getElementById('landing-burger-btn-group').style.display = 'none';
  }, 100);
}