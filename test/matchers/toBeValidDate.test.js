import * as matcher from "src/matchers/toBeValidDate";

expect.extend(matcher);

describe(".toBeValidDate", () => {
  test("passes when given a valid date", () => {
    expect(new Date()).toBeValidDate();
  });

  test("fails when given an invalid date", () => {
    expect(() => expect(new Date("2018-90-90T13:00:00.000Z")).toBeValidDate()).toThrowErrorMatchingSnapshot();
  });

  test("fails when not given non-date values", () => {
    expect(() => expect(1).toBeValidDate()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeValidDate", () => {
  test.each([
    [new Date("01/90/2018")],
    [new Date("32/01/2018")],
    [false],
    [true],
    [0],
    [""],
    [{}],
    [() => {}],
    [undefined],
    [null],
    [NaN],
  ])("passes when not given a date: %s", given => {
    expect(given).not.toBeValidDate();
  });

  test("fails when given a valid date value", () => {
    expect(() => expect(new Date("2018-01-01T13:00:00.000Z")).not.toBeValidDate()).toThrowErrorMatchingSnapshot();
  });
});
