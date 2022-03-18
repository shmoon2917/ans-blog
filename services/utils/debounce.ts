export function debounce(func: () => unknown, wait: number, leading = false) {
  let timeout: NodeJS.Timeout | null;

  return function (...args: any) {
    const context = this;

    let callNow = leading && !timeout;

    const later = () => {
      timeout = null;
      if (!leading) func.apply(context, args);
    };

    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
