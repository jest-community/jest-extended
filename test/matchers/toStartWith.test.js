import * as matcher from "src/matchers/toStartWith";

expect.extend(matcher);

describe(".toStartWith", () => {
  test("passes when string starts with given prefix", () => {
    expect("hello world").toStartWith("hello");
  });

  test("fails when the string is shorter than the given prefix", () => {
    expect(() => expect("hello").toStartWith("hello world")).toThrowErrorMatchingSnapshot();
  });

  test("fails when string does not start with the given prefix", () => {
    expect(() => expect("hello world").toStartWith("world")).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toStartWith", () => {
  test("passes when string does not start with the given prefix", () => {
    expect("hello world").not.toStartWith("world");
  });

  test("passes when string is shorter than the given prefix", () => {
    expect("hello").not.toStartWith("hello world");
  });

  test("fails when string starts with given prefix", () => {
    expect(() => expect("hello world").not.toStartWith("hello")).toThrowErrorMatchingSnapshot();
  });
});
