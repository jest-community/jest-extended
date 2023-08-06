import * as matcher from "src/matchers/toBeArray";

expect.extend(matcher);

describe(".toBeArray", () => {
  test("passes when given an array", () => {
    expect([]).toBeArray();
  });

  test("fails when not given an array", () => {
    expect(() => expect(false).toBeArray()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeArray", () => {
  test.each([[false], [true], [0], [{}], [() => {}], [undefined], [null], [NaN]])(
    "passes when not given an array: %s",
    given => {
      expect(given).not.toBeArray();
    },
  );

  test("fails when given an array", () => {
    expect(() => expect([]).not.toBeArray()).toThrowErrorMatchingSnapshot();
  });
});
