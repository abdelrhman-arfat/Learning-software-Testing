import { isEven, isOdd, isPrime } from "../utils/booleans";

describe("Boolean Math Utilities", () => {
  describe("isEven()", () => {
    it("should return true for even numbers", () => {
      expect(isEven(2)).toBeTruthy();
      expect(isEven(4)).toBeTruthy();
      expect(isEven(6)).toBeTruthy();
    });

    it("should return false for odd numbers", () => {
      expect(isEven(5)).toBeFalsy();
    });
  });

  describe("isOdd()", () => {
    it("should return true for odd numbers", () => {
      expect(isOdd(5)).toBeTruthy();
      expect(isOdd(7)).toBeTruthy();
      expect(isOdd(9)).toBeTruthy();
    });

    it("should return false for even numbers", () => {
      expect(isOdd(2)).toBeFalsy();
      expect(isOdd(4)).toBeFalsy();
      expect(isOdd(6)).toBeFalsy();
    });
  });

  describe("isPrime()", () => {
    it("should return true for prime numbers", () => {
      expect(isPrime(2)).toBeTruthy();
      expect(isPrime(3)).toBeTruthy();
      expect(isPrime(5)).toBeTruthy();
      expect(isPrime(7)).toBeTruthy();
    });

    it("should return false for non-prime numbers", () => {
      expect(isPrime(9)).toBeFalsy();
      expect(isPrime(10)).toBeFalsy();
    });
  });
});
