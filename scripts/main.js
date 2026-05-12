// Nav scroll state
const nav = document.getElementById(‘nav’);
window.addEventListener(‘scroll’, () => {
nav.classList.toggle(‘scrolled’, window.scrollY > 60);
}, { passive: true });

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));