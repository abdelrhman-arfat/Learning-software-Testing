const names = ["abdo", "ahmed", "ali"];
const numbers = [1, 2, 3, 4, 5];
describe("Array testing", () => {
  describe("is element present in the array", () => {
    it("should return true if the element is present in the array", () => {
      expect(numbers).toContain(4);
    });
    it("should return false if the element is not present in the array", () => {
      expect(numbers).not.toContain(6);
    });
    it("should return true if the element is present in the array", () => {
      expect(names).toContain("abdo");
    });
    it("should return false if the element is not present in the array", () => {
      expect(names).not.toContain("ahmed");
    });

    it("should return false if the array is null", () => {
      expect(null).not.toBeTruthy();
    });
  });
});
