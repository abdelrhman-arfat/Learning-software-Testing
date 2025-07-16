import { isEven, isOdd, isPrime } from "../utils/booleans";

test("isEven - return true if number is even", () => {
  expect(isEven(2)).toBeTruthy();
  expect(isEven(4)).toBeTruthy();
  expect(isEven(6)).toBeTruthy();
  expect(isEven(5)).toBeFalsy();
});
test("isOdd - return true if number is odd", () => {
  expect(isOdd(2)).toBeFalsy();
  expect(isOdd(4)).toBeFalsy();
  expect(isOdd(6)).toBeFalsy();
  expect(isOdd(5)).toBeTruthy();
  expect(isOdd(7)).toBeTruthy();
  expect(isOdd(9)).toBeTruthy();
});

test("isPrime - return true if the number is prime", () => {
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(5)).toBeTruthy();
  expect(isPrime(7)).toBeTruthy();
  expect(isPrime(9)).toBeFalsy();
  expect(isPrime(10)).toBeFalsy();
});
