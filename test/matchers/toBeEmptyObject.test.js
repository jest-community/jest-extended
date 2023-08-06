import * as matcher from "src/matchers/toBeEmptyObject";

expect.extend(matcher);

describe(".toBeEmptyObject", () => {
  test("passes when given an empty object", () => {
    expect({}).toBeEmptyObject();
  });

  test("fails when not given an empty object", () => {
    expect(() => expect({ property1: "something" }).toBeEmptyObject()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeEmptyObject", () => {
  test("passes when not given an empty object", () => {
    expect({ property1: "something" }).not.toBeEmptyObject();
  });

  test("fails when given an empty object", () => {
    expect(() => expect({}).not.toBeEmptyObject()).toThrowErrorMatchingSnapshot();
  });
});
