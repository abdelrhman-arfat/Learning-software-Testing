import { sub, sum } from "..";

const messageSum =
  "sum - return sum of two numbers '1,2 = 3' , '2,2 = 4' , '3,2 = 5'";
const messageSub =
  "sub - return sub of two number with positive result '1,2 = 1' , '2,2 = 0' , '3,2 = 1'";
describe("test math functions", () => {
  it(messageSum, () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 2)).toBe(4);
    expect(sum(3, 2)).toBe(5);  
  });
  it(messageSub, () => {
    expect(sub(1, 2)).toBe(1);
    expect(sub(2, 2)).toBe(0);
    expect(sub(3, 2)).toBe(1);
    expect(sub(4, 2)).toBe(2);
    expect(sub(5, 2)).toBe(3);
  });
});
