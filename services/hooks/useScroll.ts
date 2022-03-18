import { useEffect, useState } from 'react';
import { throttle } from 'services/utils';

export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', throttle(listener, 200));

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return scrolled;
}
