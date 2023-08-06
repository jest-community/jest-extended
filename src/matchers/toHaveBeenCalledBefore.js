import { isJestMockOrSpy } from "../utils";

export function toHaveBeenCalledBefore(actual, expected, failIfNoSecondInvocation = true) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (!isJestMockOrSpy(actual)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, actual, true) };
  }

  if (!isJestMockOrSpy(expected)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, expected, false) };
  }

  const firstInvocationCallOrder = actual.mock.invocationCallOrder;
  const secondInvocationCallOrder = expected.mock.invocationCallOrder;
  const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder, failIfNoSecondInvocation);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toHaveBeenCalledBefore") +
          "\n\n" +
          "Expected first mock to not have been called before, invocationCallOrder:\n" +
          `  ${printExpected(firstInvocationCallOrder)}\n` +
          "Received second mock with invocationCallOrder:\n" +
          `  ${printReceived(secondInvocationCallOrder)}`
        : matcherHint(".toHaveBeenCalledBefore") +
          "\n\n" +
          "Expected first mock to have been called before, invocationCallOrder:\n" +
          `  ${printExpected(firstInvocationCallOrder)}\n` +
          "Received second mock with invocationCallOrder:\n" +
          `  ${printReceived(secondInvocationCallOrder)}`,
  };
}

const mockCheckFailMessage = (utils, value, isReceivedValue) => () => {
  const valueKind = isReceivedValue ? "Received" : "Expected";
  const valueKindPrintFunc = isReceivedValue ? utils.printReceived : utils.printExpected;

  return (
    utils.matcherHint(".toHaveBeenCalledBefore") +
    "\n\n" +
    `Matcher error: ${valueKindPrintFunc(valueKind.toLowerCase())} must be a mock or spy function` +
    "\n\n" +
    utils.printWithType(valueKind, value, valueKindPrintFunc)
  );
};

const smallest = ns => ns.reduce((acc, n) => (acc < n ? acc : n));

const predicate = (firstInvocationCallOrder, secondInvocationCallOrder, failIfNoSecondInvocation) => {
  if (firstInvocationCallOrder.length === 0) return false;
  if (secondInvocationCallOrder.length === 0) return !failIfNoSecondInvocation;

  const firstSmallest = smallest(firstInvocationCallOrder);
  const secondSmallest = smallest(secondInvocationCallOrder);

  return firstSmallest < secondSmallest;
};
