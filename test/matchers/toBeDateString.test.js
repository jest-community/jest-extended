import * as matcher from "src/matchers/toBeDateString";

expect.extend(matcher);

describe(".toBeDateString", () => {
  test("passes when given a date string", () => {
    expect(new Date().toISOString()).toBeDateString();
  });

  test("fails when not given a date string", () => {
    expect(() => expect("not a date").toBeDateString()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeDateString", () => {
  test("passes when not given a date string", () => {
    expect("not a date").not.toBeDateString();
  });

  test("fails when given a date string", () => {
    expect(() => expect("2018-01-01T13:00:00.000Z").not.toBeDateString()).toThrowErrorMatchingSnapshot();
  });
});
