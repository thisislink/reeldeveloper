// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Scroll reveal — skip on mobile where IntersectionObserver misfires on tall sections
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobile = window.matchMedia('(max-width: 900px)').matches;

const revealEls = document.querySelectorAll('.reveal');

if (isMobile || prefersReducedMotion) {
  // Just show everything immediately
  revealEls.forEach(el => el.classList.add('in-view'));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => observer.observe(el));
}