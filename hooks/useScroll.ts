import { useEffect, useState } from 'react';

export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      const scrollY = window.scrollY;

      window.requestAnimationFrame(() => {
        console.log('123');
        setScrolled(scrollY > 0);
      });
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return scrolled;
}
