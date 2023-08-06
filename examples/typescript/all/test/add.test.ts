// eslint-disable-next-line import/no-unresolved
import { add } from "../src/add";

describe("add", () => {
  test("Commutative Law of Addition", () => {
    expect(add(1, 2)).toBe(add(2, 1));
  });

  test("adding two integers returns an integer", () => {
    expect(add(1, 100)).toBeInteger();
  });

  test("positive numbers remain positive", () => {
    expect(add(1, 1)).toBePositive();
  });

  test("negative numbers remain negative", () => {
    expect(add(-1, -1)).toBeNegative();
  });

  test("adding two even numbers does not give an odd number", () => {
    expect(add(1, 3)).not.toBeOdd();
  });

  test("adding two odd numbers gives an even number", () => {
    expect(add(1, 3)).toBeEven();
  });

  test("array equal another array regardless of the order", () => {
    expect([1, 3]).toIncludeSameMembers([3, 1]);
  });

  test("array property equal another array regardless of the order", () => {
    expect({ array: [1, 3] }).toEqual({
      array: expect.toIncludeSameMembers([3, 1]),
    });
  });
});
