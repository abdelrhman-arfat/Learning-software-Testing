import { orders, ordersWithAsync, ordersWithPromise } from "../../utils/orders";

describe("Async testing", () => {
  describe("is async function working correctly ", () => {
    it("should return data", async () => {
      const data = await ordersWithAsync();
      expect(data).toMatchObject(orders);
    });
    it("should return data", async () => {
      const data = await ordersWithPromise();
      expect(data).toMatchObject(orders);
    });
  });

  describe("should handle promises correctly", () => {
    it("should return data with promise function", () => {
      // Using a promise to handle the async function with 'promise.then'
      return ordersWithAsync().then((data) => {
        expect(data).toMatchObject(orders);
      });
    });
    it("should return data with promise function", () => {
      // Using a promise to handle the async function with `resolves`
      return expect(ordersWithPromise()).resolves.toMatchObject(orders);
    });
  });
});
