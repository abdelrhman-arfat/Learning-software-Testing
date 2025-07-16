const data = { id: 1, name: "test", value: 42 };

describe.skip("Object testing", () => {
  describe("is key present in the object", () => {
    it("should return true if the key is present in the object", () => {
      expect(data).toHaveProperty("name");
    });
    it("should return false if the key is not present in the object", () => {
      expect(data).not.toHaveProperty("age");
    });
    it("should return true if the value is present in the object", () => {
      expect(data).toHaveProperty("value", 42);
    });
    it("should return false if the value is not present in the object", () => {
      expect(data).not.toHaveProperty("value", 100);
    });

    it("should return false if the object is null", () => {
      expect(null).not.toBeTruthy();
    });
  });
});
