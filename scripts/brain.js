// Hamburger menu. Nav already declared in main.js
const menuIcon = document.querySelector('.menu-icon');

if (menuIcon) {
  const navEl = document.getElementById('nav');

  menuIcon.addEventListener('click', () => {
    const isOpen = navEl.classList.toggle('menu-open');
    menuIcon.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navEl.classList.remove('menu-open');
      menuIcon.setAttribute('aria-expanded', false);
    });
  });
}

// Auto-updating year
const yearEl = document.getElementById('current-year');
if (yearEl) yearEl.innerHTML = new Date().getFullYear();