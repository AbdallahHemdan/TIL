const images = document.querySelectorAll('[data-src]');

const imagesOption = {
  root: null,
  threshold: 0,
  rootMargin: '0px',
};

const preloadImage = element => {
  const src = element.getAttribute('data-src');

  if (src) {
    element.src = src;
  }
};

const imagesObserver = new IntersectionObserver((entries, imagesObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry);
      preloadImage(entry.target);
      imagesObserver.unobserve(entry.target);
    }
  });
}, imagesOption);

images.forEach(image => {
  imagesObserver.observe(image);
});
