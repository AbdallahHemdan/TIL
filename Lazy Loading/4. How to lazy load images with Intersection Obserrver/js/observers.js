const header = document.querySelector('header');
const navBreakpoint = document.querySelector('.home-intro');

const faders = document.querySelectorAll('.fade-in');

const sliders = document.querySelectorAll('.slide-in');

//* navbar Intersection observer
const navbarOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-200px 0px 0px 0px',
};

const navbarObserver = new IntersectionObserver((entries, navbarObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
}, navbarOptions);

navbarObserver.observe(navBreakpoint);

//* faders Intersection observer
const fadersOptions = {
  root: null,
  threshold: 1,
  rootMargin: '0px',
};

const fadersObserver = new IntersectionObserver((entries, fadersObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('appear');
      entry.target.classList.add('appear');
      fadersObserver.unobserve(entry.target);
    }
  });
}, fadersOptions);

faders.forEach(fader => {
  fadersObserver.observe(fader);
});
