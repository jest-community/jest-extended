import * as matcher from "src/matchers/toBeBoolean";

expect.extend(matcher);

describe(".toBeBoolean", () => {
  test("passes when given false", () => {
    expect(false).toBeBoolean();
  });

  test("passes when given true", () => {
    expect(true).toBeBoolean();
  });

  test("passes when given something that evaluates to a boolean", () => {
    expect(1 === 1).toBeBoolean();
  });

  test("passes when given an object of type Boolean", () => {
    expect(new Boolean()).toBeBoolean();
  });

  test("fails when not given a boolean", () => {
    expect(() => expect(1).toBeBoolean()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeBoolean", () => {
  test.each([["true"], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]])(
    "passes when item is not of type boolean: %s",
    given => {
      expect(given).not.toBeBoolean();
    },
  );

  test("fails when given a boolean", () => {
    expect(() => expect(true).not.toBeBoolean()).toThrowErrorMatchingSnapshot();
  });

  test("fails when given an object of type boolean", () => {
    expect(() => expect(new Boolean()).not.toBeBoolean()).toThrowErrorMatchingSnapshot();
  });
});
