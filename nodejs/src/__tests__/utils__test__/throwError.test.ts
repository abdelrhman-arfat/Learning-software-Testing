const func = () => {
  throw Error("This is an error");
};

describe.skip("throwError", () => {
  it("should throw an error", () => {
    expect(() => func()).toThrow(); // with out the message
    expect(() => func()).toThrow("This is an error"); // with the message in the error
    expect(() => func()).toThrow(Error); // with the error type
  });
});
