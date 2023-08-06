import * as matcher from "src/matchers/toIncludeMultiple";

expect.extend(matcher);

describe(".toIncludeMultiple", () => {
  test("passes when string includes all substrings", () => {
    expect("hello world").toIncludeMultiple(["world", "hello"]);
  });

  test("fails when string does not include all substrings", () => {
    expect(() => expect("hello world").toIncludeMultiple(["hello", "world", "bob"])).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toIncludeMultiple", () => {
  test("passes when string does not include all substrings", () => {
    expect("hello world").not.toIncludeMultiple(["world", "hello", "bob"]);
  });

  test("fails when string includes all substrings", () => {
    expect(() => expect("hello world").not.toIncludeMultiple(["hello", "world"])).toThrowErrorMatchingSnapshot();
  });
});
