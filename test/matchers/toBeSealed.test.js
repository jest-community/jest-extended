import * as matcher from "src/matchers/toBeSealed";

expect.extend(matcher);

describe(".toBeSealed", () => {
  test("passes when given sealed object", () => {
    expect(Object.seal({})).toBeSealed();
  });

  test("fails when given a non-sealed object", () => {
    expect(() => expect({}).toBeSealed()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeSealed", () => {
  test("fails when given sealed object", () => {
    expect(() => expect(Object.seal({})).not.toBeSealed()).toThrowErrorMatchingSnapshot();
  });

  test("passes when given a non-sealed object", () => {
    expect({}).not.toBeSealed();
  });
});
