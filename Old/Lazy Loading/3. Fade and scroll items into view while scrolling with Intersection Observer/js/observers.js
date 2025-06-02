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

//* slide in Intersection observer
const slideInOptions = {
  root: null,
  threshold: 0.25,
  rootMargin: '0px',
};

const slideInObserver = new IntersectionObserver((entries, slideInObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      slideInObserver.unobserve(entry.target);
    }
  });
}, slideInOptions);

sliders.forEach(slider => {
  slideInObserver.observe(slider);
});
