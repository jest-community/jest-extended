import * as matcher from "src/matchers/toBeInRange";

expect.extend(matcher);

describe(".toBeInRange", () => {
  test("passes when given array is in range", () => {
    expect([4, 5, 7, 9]).toBeInRange(4, 10);
  });

  test("fails when given array is not in a given range", () => {
    expect(() => expect([4, 5, 7, 9]).toBeInRange(4, 8)).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeInRange", () => {
  test("passes when given array is not in the given range", () => {
    expect([12, 13, 15, 17]).not.toBeInRange(4, 9);
  });

  test("fails when given array is in the given range", () => {
    expect(() => expect([4, 5, 7, 9]).not.toBeInRange(4, 10)).toThrowErrorMatchingSnapshot();
  });
});
