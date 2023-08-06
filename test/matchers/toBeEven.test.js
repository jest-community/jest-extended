import * as matcher from "src/matchers/toBeEven";

expect.extend(matcher);

describe(".toBeEven", () => {
  test("passes when given even number", () => {
    expect(2).toBeEven();
  });

  test.each([[false], [true], [""], [1], [{}], [() => {}], [undefined], [null], [NaN]])(
    "fails when not given an even number",
    given => {
      expect(() => expect(given).toBeEven()).toThrowErrorMatchingSnapshot();
    },
  );
});

describe(".not.toBeEven", () => {
  test("fails when given an even number", () => {
    expect(() => expect(2).not.toBeEven()).toThrowErrorMatchingSnapshot();
  });

  test.each([[false], [true], [""], [1], [[]], [{}], [() => {}], [undefined], [null], [NaN]])(
    "passes when not given an even number: %s",
    given => {
      expect(given).not.toBeEven();
    },
  );
});
