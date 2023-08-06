import { vi } from "vitest";
import * as matcher from "src/matchers/toHaveBeenCalledBefore";

expect.extend(matcher);

describe(".toHaveBeenCalledBefore", () => {
  test("fails when given a first mock has not been called", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test("fails when given first mock that has been called and a second mock that has not been called", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock1();
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test("passes when given first mock is called before second mock", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock1();
    mock2();
    expect(mock1).toHaveBeenCalledBefore(mock2);
  });

  test("fails when given first mock is called after second mock", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock2();
    mock1();
    mock1.mock.invocationCallOrder[0] = 5000; // amend the value for the snapshot
    mock2.mock.invocationCallOrder[0] = 4000;
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test("passes when given first mock is called before multiple calls to second mock", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock1();
    mock2();
    mock1();
    mock2();
    mock2();
    expect(mock1).toHaveBeenCalledBefore(mock2);
  });

  test("passes when given first timestamps does not contain a timestamp greater than any of the second timestamps", () => {
    const now = Date.now();
    const lessThan = now - 100;
    const greaterThan = now + 100;

    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock1.mock.invocationCallOrder[0] = lessThan; // amend the value for the snapshot
    mock1.mock.invocationCallOrder[1] = now;
    mock1.mock.invocationCallOrder[1] = lessThan;
    mock2.mock.invocationCallOrder[0] = greaterThan;
    expect(mock1).toHaveBeenCalledBefore(mock2);
  });

  test("fails when given first mock is called after several calls to second mock", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock2();
    mock1();
    mock1();
    mock1();
    mock1.mock.invocationCallOrder[0] = 5000; // amend the value for the snapshot
    mock1.mock.invocationCallOrder[1] = 6000;
    mock1.mock.invocationCallOrder[2] = 7000;
    mock2.mock.invocationCallOrder[0] = 4000;
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test("fails when given first value is not a jest spy or mock", () => {
    const mock1 = () => {};
    const mock2 = vi.fn();
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test("fails when given second value is not a jest spy or mock", () => {
    const mock1 = vi.fn();
    const mock2 = () => {};
    expect(() => expect(mock1).toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  describe("failIfNoSecondInvocation is passed as false", () => {
    test("passes when given first mock that has been called and a second mock that has not been called", () => {
      const mock1 = vi.fn();
      const mock2 = vi.fn();

      mock1();

      expect(mock1).toHaveBeenCalledBefore(mock2, false);
    });
  });

  describe("failIfNoSecondInvocation is passed as true", () => {
    test("fails when given first mock that has been called and a second mock that has not been called", () => {
      const mock1 = vi.fn();
      const mock2 = vi.fn();

      mock1();

      expect(() => expect(mock1).toHaveBeenCalledBefore(mock2, true)).toThrowErrorMatchingSnapshot();
    });
  });
});

describe(".not.toHaveBeenCalledBefore", () => {
  test("passes when given a first mock has not been called", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    expect(mock1).not.toHaveBeenCalledBefore(mock2);
  });

  test("passes when given first mock that has been called and a second mock that has not been called", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock1();
    mock1.mock.invocationCallOrder[0] = 4000; // amend the value for the snapshot
    expect(mock1).not.toHaveBeenCalledBefore(mock2);
  });

  test("fails when given first mock is called before second mock", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock1();
    mock2();
    mock1.mock.invocationCallOrder[0] = 4000; // amend the value for the snapshot
    mock2.mock.invocationCallOrder[0] = 5000;
    expect(() => expect(mock1).not.toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test("passes when given first mock is called after second mock", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock2();
    mock1();
    expect(mock1).not.toHaveBeenCalledBefore(mock2);
  });

  test("fails when given first mock is called before multiple calls to second mock", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock1();
    mock2();
    mock1();
    mock2();
    mock2();

    mock1.mock.invocationCallOrder[0] = 4000; // amend the value for the snapshot
    mock1.mock.invocationCallOrder[1] = 6000;
    mock2.mock.invocationCallOrder[0] = 5000;
    mock2.mock.invocationCallOrder[1] = 7000;
    mock2.mock.invocationCallOrder[2] = 8000;
    expect(() => expect(mock1).not.toHaveBeenCalledBefore(mock2)).toThrowErrorMatchingSnapshot();
  });

  test("passes when given first mock is called after several calls to second mock", () => {
    const mock1 = vi.fn();
    const mock2 = vi.fn();
    mock2();
    mock1();
    mock1();
    mock1();
    expect(mock1).not.toHaveBeenCalledBefore(mock2);
  });

  describe("failIfNoSecondInvocation is passed as false", () => {
    test("fails when given first mock that has been called and a second mock that has not been called", () => {
      const mock1 = vi.fn();
      const mock2 = vi.fn();

      mock1();

      expect(() => expect(mock1).not.toHaveBeenCalledBefore(mock2, false)).toThrowErrorMatchingSnapshot();
    });
  });

  describe("failIfNoSecondInvocation is passed as true", () => {
    test("passes when given first mock that has been called and a second mock that has not been called", () => {
      const mock1 = vi.fn();
      const mock2 = vi.fn();

      mock1();

      expect(mock1).not.toHaveBeenCalledBefore(mock2, true);
    });
  });
});
