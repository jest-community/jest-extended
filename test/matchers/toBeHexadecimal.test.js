import * as matcher from "src/matchers/toBeHexadecimal";

expect.extend(matcher);

describe(".toBeHexadecimal", () => {
  test("passes when given valid 6 digit hexadecimal", () => {
    expect("#ECECEC").toBeHexadecimal();
  });

  test("passes when given valid 3 digit hexadecimal", () => {
    expect("#000").toBeHexadecimal();
  });

  test("fails when given non-string", () => {
    expect(() => expect(true).toBeHexadecimal()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeHexadecimal", () => {
  test("passes when given positive number", () => {
    expect(1).not.toBeHexadecimal();
  });

  test("fails when given valid hexadecimal", () => {
    expect(() => expect("#eeffee").not.toBeHexadecimal()).toThrowErrorMatchingSnapshot();
  });
});
