const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
});

const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerHTML = currentYear;
