// Hamburger menu
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    menuIcon.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
      menuIcon.setAttribute('aria-expanded', false);
    });
  });
}

// Auto-updating year
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.innerHTML = new Date().getFullYear();