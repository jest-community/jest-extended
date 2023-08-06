import * as matcher from "src/matchers/toBeFinite";

expect.extend(matcher);

describe(".toBeFinite", () => {
  test("passes when given a positive finite number", () => {
    expect(1).toBeFinite();
  });

  test("passes when given a negative finite number", () => {
    expect(-1).toBeFinite();
  });

  test("passes when given the largest finite number", () => {
    expect(Number.MAX_SAFE_INTEGER).toBeFinite();
  });

  test("passes when given the largetst negative finite number", () => {
    expect(Number.MIN_SAFE_INTEGER).toBeFinite();
  });

  test("passes when given 0", () => {
    expect(0).toBeFinite();
  });

  test("fails when not given NaN", () => {
    expect(() => expect(NaN).toBeFinite()).toThrowErrorMatchingSnapshot();
  });

  test("fails when not given Infinity", () => {
    expect(() => expect(Infinity).toBeFinite()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeFinite", () => {
  test("fails when given a finite number", () => {
    expect(() => expect(1).not.toBeFinite()).toThrowErrorMatchingSnapshot();
  });

  test("passes when given NaN", () => {
    expect(NaN).not.toBeFinite();
  });

  test("passes when given Infinity", () => {
    expect(Infinity).not.toBeFinite();
  });
});
