import * as matcher from "src/matchers/toIncludeRepeated";

expect.extend(matcher);

const string = "hello world";

describe(".toIncludeRepeated", () => {
  test("passes when a string includes a given substring 1 time", () => {
    expect(string).toIncludeRepeated("ell", 1);
  });

  test("passes when a string includes a given substring 3 times", () => {
    expect(string).toIncludeRepeated("l", 3);
  });

  test("fails when given string does not include given substring", () => {
    expect(() => expect(string).toIncludeRepeated("bob", 1)).toThrowErrorMatchingSnapshot();
  });

  test("fails when given string does not have a given substring the correct number of times", () => {
    expect(() => expect(string).toIncludeRepeated("world", 2)).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toIncludeRepeated", () => {
  test("fails when given string includes given substring 1 time", () => {
    expect(() => expect(string).not.toIncludeRepeated("ell", 1)).toThrowErrorMatchingSnapshot();
  });

  test("fails when given string includes given substring to the given occurrences", () => {
    expect(() => expect(string).not.toIncludeRepeated("l", 3)).toThrowErrorMatchingSnapshot();
  });

  test("passes when given string does not include given substring", () => {
    expect(string).not.toIncludeRepeated("bob", 1);
  });

  test("passes when given string does not have a given substring the correct number of times", () => {
    expect(string).not.toIncludeRepeated("world", 2);
  });
});
