import {
  greeting,
  startWithCapitalized,
  startWithLowerCase,
} from "../utils/Strings";

test("startWithCapitalized - return string with first letter capitalized", () => {
  expect(startWithCapitalized("hello")).toBe("Hello");
  expect(startWithCapitalized("Hello")).toBe("Hello");
  expect(startWithCapitalized("hELLO")).toBe("Hello");
  expect(startWithCapitalized("HELLO")).toBe("Hello");
});

test("startWithLowerCase", () => {
  expect(startWithLowerCase("hello")).toBe("hello");
  expect(startWithLowerCase("Hello")).toBe("hello");
  expect(startWithLowerCase("hELLO")).toBe("hELLO");
  expect(startWithLowerCase("HELLO")).toBe("hELLO");
});

test("greeting", () => {
  expect(greeting("abdo")).toMatch("Hello abdo");
});
