import { useEffect } from 'react';

type useIntersectionObserverProps = {
  root?: HTMLElement;
  rootMargin?: string;
  target: HTMLElement;
  threshold?: number;
  onIntersect: (entry: IntersectionObserverEntry[]) => void;
};

export const useIntersectionObserver = ({
  root = null as any,
  rootMargin = '0px',
  target,
  threshold = 1.0,
  onIntersect,
}: useIntersectionObserverProps): void => {
  useEffect(() => {
    if (!target || !onIntersect) return;

    const observer = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });

    console.log('observe');
    target && observer.observe(target);

    return () => {
      console.log('unboserv?/');
      target && observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
};
