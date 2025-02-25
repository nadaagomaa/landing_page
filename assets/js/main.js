
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const CloseMenuBtn = document.getElementById('closeMenuBtn');
    const overlayBackdrop = document.querySelector('.overlay-backdrop');
  
    function toggleMenu() {
      navbarCollapse.classList.toggle('show');
      overlayBackdrop.classList.toggle('show');
    }
  
    navbarToggler.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });
  
    CloseMenuBtn.addEventListener('click', function() {
      toggleMenu();
    });});
    //body-overflow
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
      document.body.classList.toggle('overflow-hidden');
  });
  
  document.getElementById('closeMenuBtn').addEventListener('click', function() {
      document.body.classList.remove('overflow-hidden');
  });