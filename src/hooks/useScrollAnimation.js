import { useEffect } from 'react';

export function useScrollAnimation(refs) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          
          // CSS-based animations
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
        }
      });
    }, observerOptions);

    refs.forEach(ref => {
      // Handle both ref objects and direct DOM elements
      const element = ref?.current || ref;
      if (element && element instanceof Element) {
        observer.observe(element);
      }
    });

    return () => {
      refs.forEach(ref => {
        const element = ref?.current || ref;
        if (element && element instanceof Element) {
          observer.unobserve(element);
        }
      });
    };
  }, [refs]);
}
