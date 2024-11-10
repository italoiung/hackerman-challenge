export const useDebounce = <T extends (...args: any[]) => void>(fn: T, delay: number = 500) => {
  let timer: ReturnType<typeof setTimeout>;

  return ((...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }) as T;
}
