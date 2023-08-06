import * as matcher from "src/matchers/toBeWithin";

expect.extend(matcher);

describe(".toBeWithin", () => {
  test("passes when given number is within the given bounds of start (inclusive) and end (exclusive)", () => {
    expect(1).toBeWithin(1, 3);
  });

  test("fails when given number is not within the given bounds of start (inclusive) and end (exclusive)", () => {
    expect(() => expect(3).toBeWithin(1, 3)).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeWithin", () => {
  test("passes when given number is not within the given bounds of start (inclusive) and end (exclusive)", () => {
    expect(3).not.toBeWithin(1, 3);
  });

  test("fails when given number is within the given bounds of start (inclusive) and end (exclusive)", () => {
    expect(() => expect(1).not.toBeWithin(1, 3)).toThrowErrorMatchingSnapshot();
  });
});
