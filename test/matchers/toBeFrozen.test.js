import * as matcher from "src/matchers/toBeFrozen";

expect.extend(matcher);

describe(".toBeFrozen", () => {
  test("passes when given frozen object", () => {
    expect(Object.freeze({})).toBeFrozen();
  });

  test("fails when given a non-frozen object", () => {
    expect(() => expect({}).toBeFrozen()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeFrozen", () => {
  test("fails when given frozen object", () => {
    expect(() => expect(Object.freeze({})).not.toBeFrozen()).toThrowErrorMatchingSnapshot();
  });

  test("passes when given a non-frozen object", () => {
    expect({}).not.toBeFrozen();
  });
});
