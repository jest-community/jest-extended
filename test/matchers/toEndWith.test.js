import * as matcher from "src/matchers/toEndWith";

expect.extend(matcher);

describe(".toEndWith", () => {
  test("passes when string ends with given suffix", () => {
    expect("hello world").toEndWith("world");
  });

  test("fails when the string is shorter than the given suffix", () => {
    expect(() => expect("hello").toEndWith("hello world")).toThrowErrorMatchingSnapshot();
  });

  test("fails when string does not end with the given suffix", () => {
    expect(() => expect("hello world").toEndWith("hello")).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toEndWith", () => {
  test("passes when string does not end with the given suffix", () => {
    expect("hello world").not.toEndWith("hello");
  });

  test("passes when string is shorter than the given suffix", () => {
    expect("hello").not.toEndWith("hello world");
  });

  test("fails when string ends with given suffix", () => {
    expect(() => expect("hello world").not.toEndWith("world")).toThrowErrorMatchingSnapshot();
  });
});
