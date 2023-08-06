import * as matcher from "src/matchers/toBeSymbol";

expect.extend(matcher);

describe(".toBeSymbol", () => {
  test("passes when given a symbol", () => {
    expect(Symbol()).toBeSymbol();
  });

  test("fails when not given a symbol", () => {
    expect(() => expect(false).toBeSymbol()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeSymbol", () => {
  test.each([[false], [""], [0], [{}], [[]], [undefined], [null], [NaN], [() => {}]])(
    "passes when not given a symbol: %s",
    given => {
      expect(given).not.toBeSymbol();
    },
  );

  test("fails when given a symbol", () => {
    expect(() => expect(Symbol()).not.toBeSymbol()).toThrowErrorMatchingSnapshot();
  });
});
