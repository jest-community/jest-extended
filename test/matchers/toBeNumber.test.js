import * as matcher from "src/matchers/toBeNumber";

expect.extend(matcher);

describe(".toBeNumber", () => {
  test.each`
    number
    ${10}
    ${NaN}
    ${Infinity}
    ${-Infinity}
  `("passes when given: $number", ({ number }) => {
    expect(number).toBeNumber();
  });

  test("fails when not given a number", () => {
    expect(() => expect(false).toBeNumber()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeNumber", () => {
  test.each([[false], [true], [[]], [{}], [() => {}], [undefined], [null], ["10"]])(
    "passes when not given a number: %s",
    given => {
      expect(given).not.toBeNumber();
    },
  );

  test("fails when given a number", () => {
    expect(() => expect(1).not.toBeNumber()).toThrowErrorMatchingSnapshot();
  });
});
