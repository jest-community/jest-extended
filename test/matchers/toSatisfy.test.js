import * as matcher from "src/matchers/toSatisfy";

expect.extend(matcher);

describe(".toSatisfy", () => {
  const is2 = n => n === 2;

  test("passes when given a function that returns true", () => {
    expect(2).toSatisfy(is2);
  });

  test("fails when given function that returns false", () => {
    expect(() => expect(3).toSatisfy(is2)).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toSatisfy", () => {
  const isTrue = a => a === true;

  test("passes when given a function that returns false", () => {
    expect(false).not.toSatisfy(isTrue);
  });

  test("fails when given a function that returns true", () => {
    expect(() => expect(true).not.toSatisfy(isTrue)).toThrowErrorMatchingSnapshot();
  });
});
