import * as matcher from "src/matchers/toInclude";

expect.extend(matcher);

const data = "hello world";

describe(".toInclude", () => {
  test("passes when a string has a given substring", () => {
    expect(data).toInclude("ell");
  });

  test("fails when a string does not have a given substring", () => {
    expect(() => expect(data).toInclude("bob")).toThrowErrorMatchingSnapshot();
  });

  describe(".not.toInclude", () => {
    test("passes when a string does not have a given substring", () => {
      expect(data).not.toInclude("bob");
    });

    test("fails when a string does have a given substring", () => {
      expect(() => expect(data).not.toInclude("ell")).toThrowErrorMatchingSnapshot();
    });
  });
});
