const sections = document.querySelectorAll('section');

const options = {
  root: null, // it is the viewport
  threshold: 0, // threshold is a value from 0 to 1 represent the percentage after it the observer will work
  rootMargin: '-400px', // margin around the entries
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.toggle('reverse');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
