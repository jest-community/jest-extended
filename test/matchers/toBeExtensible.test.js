import * as matcher from "src/matchers/toBeExtensible";

expect.extend(matcher);

describe(".toBeExtensible", () => {
  test.each([{}, [], () => {}])("passes when given an extensible object: %s", given => {
    expect(given).toBeExtensible();
  });

  test.each([[false], [""], [0], [undefined], [null], [NaN], [Object.seal({})], [Object.freeze({})]])(
    "fails when not given an extensible object: %s",
    given => {
      expect(() => expect(given).toBeExtensible()).toThrowErrorMatchingSnapshot();
    },
  );
});

describe(".not.toBeExtensible", () => {
  test.each([[false], [""], [0], [undefined], [null], [NaN], [Object.seal({})], [Object.freeze({})]])(
    "passes when not given extensible object: %s",
    given => {
      expect(given).not.toBeExtensible();
    },
  );

  test.each([[{}], [[]], [() => {}]])("fails when given an extensible object: %s", given => {
    expect(() => expect(given).not.toBeExtensible()).toThrowErrorMatchingSnapshot();
  });
});
