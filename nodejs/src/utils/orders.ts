export const orders = [
  { id: 1, item: "Apple", quantity: 3 },
  { id: 2, item: "Banana", quantity: 5 },
  { id: 3, item: "Cherry", quantity: 2 },
];

const ordersWithPromise = function () {
  return Promise.resolve(orders);
};
const ordersWithAsync = async function () {
  return orders;
};

export { ordersWithPromise, ordersWithAsync };
