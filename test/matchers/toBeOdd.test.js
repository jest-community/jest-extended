import * as matcher from "src/matchers/toBeOdd";

expect.extend(matcher);

describe(".toBeOdd", () => {
  test("passes when given an odd number", () => {
    expect(1).toBeOdd();
  });

  test.each([[false], [true], [""], [2], [{}], [() => {}], [undefined], [null], [NaN]])(
    "fails when given not given an odd number",
    given => {
      expect(() => expect(given).toBeOdd()).toThrowErrorMatchingSnapshot();
    },
  );
});

describe(".not.toBeOdd", () => {
  test.each([[false], [true], [""], [2], [[]], [{}], [() => {}], [undefined], [null], [NaN]])(
    "passes when not given an odd number: %s",
    given => {
      expect(given).not.toBeOdd();
    },
  );

  test("fails when given an odd number", () => {
    expect(() => expect(1).not.toBeOdd()).toThrowErrorMatchingSnapshot();
  });
});
