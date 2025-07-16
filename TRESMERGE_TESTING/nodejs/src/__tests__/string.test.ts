import {
  greeting,
  startWithCapitalized,
  startWithLowerCase,
} from "../utils/Strings";

describe("String Utility Functions", () => {
  describe("startWithCapitalized()", () => {
    it("should return string with first letter capitalized", () => {
      expect(startWithCapitalized("hello")).toBe("Hello");
      expect(startWithCapitalized("Hello")).toBe("Hello");
      expect(startWithCapitalized("hELLO")).toBe("Hello");
      expect(startWithCapitalized("HELLO")).toBe("Hello");
    });
  });

  describe("startWithLowerCase()", () => {
    it("should return string with first letter in lowercase", () => {
      expect(startWithLowerCase("hello")).toBe("hello");
      expect(startWithLowerCase("Hello")).toBe("hello");
      expect(startWithLowerCase("hELLO")).toBe("hELLO");
      expect(startWithLowerCase("HELLO")).toBe("hELLO");
    });
  });

  describe("greeting()", () => {
    it("should return a greeting message with the name", () => {
      expect(greeting("abdo")).toMatch("Hello abdo");
    });
  });
});
