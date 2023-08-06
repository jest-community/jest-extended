import * as matcher from "src/matchers/toBeNegative";

expect.extend(matcher);

describe(".toBeNegative", () => {
  test("passes when given negative number", () => {
    expect(-1).toBeNegative();
  });

  test("fails when given positive number", () => {
    expect(() => expect(1).toBeNegative()).toThrowErrorMatchingSnapshot();
  });

  test("fails when given Infinity", () => {
    expect(() => expect(Infinity).toBeNegative()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeNegative", () => {
  test("passes when given positive number", () => {
    expect(1).not.toBeNegative();
  });

  test("passes when given Infinity", () => {
    expect(Infinity).not.toBeNegative();
  });

  test("passes when given NaN", () => {
    expect(NaN).not.toBeNegative();
  });

  test("fails when given negative number", () => {
    expect(() => expect(-1).not.toBeNegative()).toThrowErrorMatchingSnapshot();
  });
});
