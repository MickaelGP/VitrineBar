export default {
    mounted(el, binding) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
  
      const callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (binding.value && typeof binding.value === 'function') {
              binding.value(entry.target);
            } else {
              el.classList.add('visible');
            }
            observer.unobserve(entry.target);
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
    }
  };