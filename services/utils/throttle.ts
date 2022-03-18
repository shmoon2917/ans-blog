import { callbackify } from 'util';

export function throttle(func: () => unknown, delay: number) {
  let waiting = false;

  return function (...args: any) {
    const context = this;

    if (!waiting) {
      waiting = true;

      setTimeout(() => {
        func.apply(context, args);
        waiting = false;
      }, delay);
    }
  };
}
