import * as matcher from "src/matchers/toHaveBeenCalledExactlyOnceWith";

expect.extend(matcher);

describe(".toHaveBeenCalledExactlyOnceWith", () => {
  let mock;
  beforeEach(() => {
    mock = jest.fn();
  });

  test("passes if mock was invoked exactly once with the expected value", () => {
    mock("hello");
    expect(mock).toHaveBeenCalledExactlyOnceWith("hello");
  });

  test("passes if mock was invoked exactly once with the expected values in an array", () => {
    mock(["hello", "there"]);
    expect(mock).toHaveBeenCalledExactlyOnceWith(["hello", "there"]);
  });

  test("passes if mock was invoked exactly once with the expected values", () => {
    mock("hello", "there");
    expect(mock).toHaveBeenCalledExactlyOnceWith("hello", "there");
  });

  test("fails if mock was never invoked indicating that it was invoked 0 times", () => {
    expect(() => expect(mock).toHaveBeenCalledExactlyOnceWith("hello")).toThrowErrorMatchingSnapshot();
  });

  test("fails if mock was invoked more than once, indicating how many times it was invoked", () => {
    // Invoke mock 17 times
    new Array(17).fill(mock).forEach(e => e(Math.random()));
    expect(() => expect(mock).toHaveBeenCalledExactlyOnceWith("hello")).toThrowErrorMatchingSnapshot();
  });

  test("fails when given value is not a jest spy or mock", () => {
    const mock1 = () => {};
    expect(() => expect(mock1).toHaveBeenCalledExactlyOnceWith("hello")).toThrowErrorMatchingSnapshot();
  });

  test("fails when given value is not the expected one", () => {
    mock("not hello");
    expect(() => expect(mock).toHaveBeenCalledExactlyOnceWith("hello")).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toHaveBeenCalledExactlyOnceWith", () => {
  let mock;
  beforeEach(() => {
    mock = jest.fn();
  });

  test("passes if mock was never invoked", () => {
    expect(mock).not.toHaveBeenCalledExactlyOnceWith("hello");
  });

  test("passes if mock was invoked more than once", () => {
    mock("hello");
    mock("hello");
    expect(mock).not.toHaveBeenCalledExactlyOnceWith("hello");
  });

  test("fails if mock was invoked exactly once with the expected value", () => {
    mock("hello");
    expect(() => expect(mock).not.toHaveBeenCalledExactlyOnceWith("hello")).toThrowErrorMatchingSnapshot();
  });

  test("passes if mock was invoked exactly once without the expected value", () => {
    mock("not hello");
    expect(mock).not.toHaveBeenCalledExactlyOnceWith("hello");
  });

  test("passes if mock was invoked exactly once without both expected values in an array", () => {
    mock(["hello", "there"]);
    expect(mock).not.toHaveBeenCalledExactlyOnceWith(["hello", "not there"]);
  });

  test("passes if mock was invoked exactly once without both expected values", () => {
    mock("hello", "there");
    expect(mock).not.toHaveBeenCalledExactlyOnceWith("hello", "not there");
  });
});
