// Home page JavaScript
// Uses common.js for shared navigation functions

window.onload = function() {
  initCommonNav();
  setupScrollAnimations();
};

// Setup intersection observer for scroll animations
function setupScrollAnimations() {
  const components = document.querySelectorAll('.component, .component-light, .bot-contact');
  
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        // Optional: stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  components.forEach(component => {
    observer.observe(component);
  });
}