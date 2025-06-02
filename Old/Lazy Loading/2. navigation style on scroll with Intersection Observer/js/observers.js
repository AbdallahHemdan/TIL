const header = document.querySelector('header');
const navBreakpoint = document.querySelector('.home-intro');

const options = {
  root: null,
  threshold: 0,
  rootMargin: '-100px',
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
}, options);

observer.observe(navBreakpoint);
