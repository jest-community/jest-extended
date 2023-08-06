import * as matcher from "src/matchers/toBeFalse";

expect.extend(matcher);

describe(".toBeFalse", () => {
  test("passes when given false", () => {
    expect(false).toBeFalse();
  });

  test("fails when not given false", () => {
    expect(() => expect(true).toBeFalse()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeFalse", () => {
  test.each([[true], [""], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]])(
    "passes when not given false: %s",
    given => {
      expect(given).not.toBeFalse();
    },
  );

  test("fails when given false", () => {
    expect(() => expect(false).not.toBeFalse()).toThrowErrorMatchingSnapshot();
  });
});
