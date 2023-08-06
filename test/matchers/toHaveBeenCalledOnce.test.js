import * as matcher from "src/matchers/toHaveBeenCalledOnce";

expect.extend(matcher);

describe(".toHaveBeenCalledOnce", () => {
  let mock;
  beforeEach(() => {
    mock = jest.fn();
  });

  test("passes if mock was invoked exactly once", () => {
    mock();
    expect(mock).toHaveBeenCalledOnce();
  });

  test("fails if mock was never invoked indicating that it was invoked 0 times", () => {
    expect(() => expect(mock).toHaveBeenCalledOnce()).toThrowErrorMatchingSnapshot();
  });

  test("fails if mock was invoked more than once, indicating how many times it was invoked", () => {
    // Invoke mock 17 times
    new Array(17).fill(mock).forEach(e => e(Math.random()));
    expect(() => expect(mock).toHaveBeenCalledOnce()).toThrowErrorMatchingSnapshot();
  });

  test("fails when given value is not a jest spy or mock", () => {
    const mock1 = () => {};
    expect(() => expect(mock1).toHaveBeenCalledOnce()).toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toHaveBeenCalledOnce", () => {
  let mock;
  beforeEach(() => {
    mock = jest.fn();
  });

  test("passes if mock was never invoked", () => {
    expect(mock).not.toHaveBeenCalledOnce();
  });

  test("passes if mock was invoked more than once", () => {
    mock();
    mock();
    expect(mock).not.toHaveBeenCalledOnce();
  });

  test("fails if mock was invoked exactly once", () => {
    mock();
    expect(() => expect(mock).not.toHaveBeenCalledOnce()).toThrowErrorMatchingSnapshot();
  });
});
