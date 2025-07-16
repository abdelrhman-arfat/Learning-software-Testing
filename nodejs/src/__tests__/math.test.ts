import { sum, sub, mul, div } from "../utils/math";

describe("Math Utility Functions", () => {
  describe("sum()", () => {
    it("should return sum of two numbers", () => {
      expect(sum(1, 2)).toBe(3);
      expect(sum(2, 2)).toBe(4);
      expect(sum(3, 2)).toBe(5);
    });

    it("should handle floating-point numbers", () => {
      expect(sum(0.4, 2)).toBeCloseTo(2.4);
    });
  });

  describe("sub()", () => {
    it("should return positive subtraction result", () => {
      expect(sub(1, 2)).toBe(1);
      expect(sub(2, 2)).toBe(0);
      expect(sub(3, 2)).toBe(1);
      expect(sub(4, 2)).toBe(2);
      expect(sub(5, 2)).toBe(3);
    });

    it("should handle floating-point subtraction", () => {
      expect(sub(2.4, 2)).toBeCloseTo(0.4);
    });
  });

  describe("mul()", () => {
    it("should return multiplication of two numbers", () => {
      expect(mul(1, 2)).toBe(2);
      expect(mul(2, 2)).toBe(4);
      expect(mul(3, 2)).toBe(6);
      expect(mul(4, 2)).toBe(8);
      expect(mul(5, 2)).toBe(10);
    });
  });

  describe("div()", () => {
    it("should return division result of two numbers", () => {
      expect(div(1, 2)).toBe(0.5);
      expect(div(2, 2)).toBe(1);
      expect(div(3, 2)).toBe(1.5);
      expect(div(4, 2)).toBe(2);
      expect(div(5, 2)).toBe(2.5);
      expect(div(9, 2)).toBe(4.5);
    });
  });
});
