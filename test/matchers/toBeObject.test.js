import * as matcher from "src/matchers/toBeObject";

expect.extend(matcher);

describe(".toBeObject", () => {
  test("passes when given an object", () => {
    expect({}).toBeObject();
  });

  test.each([[false], [""], [0], [() => {}], [undefined], [NaN], [[1, 2, 3]]])(
    "fails when not given an object: %s",
    given => {
      expect(() => expect(given).toBeObject()).toThrowErrorMatchingSnapshot();
    },
  );
});

describe(".not.toBeObject", () => {
  test.each([[false], [""], [0], [() => {}], [undefined], [NaN], [[1, 2, 3]]])(
    "passes when not given an object: %s",
    given => {
      expect(given).not.toBeObject();
    },
  );

  test("fails when given an object", () => {
    expect(() => expect({}).not.toBeObject()).toThrowErrorMatchingSnapshot();
  });
});
