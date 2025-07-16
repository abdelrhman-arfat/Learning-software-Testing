export const isEven = (n: number) => n % 2 === 0;
export const isOdd = (n: number) => !isEven(n);
export const isPrime = (n: number) => {
  if (n < 2) return true;
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
