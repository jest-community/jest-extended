import { isJestMockOrSpy } from 'src/utils';

export function toHaveBeenCalledBefore(
  actual: unknown,
  expected: jest.MockInstance<any, any[]>,
  failIfNoSecondInvocation: boolean = true,
) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (!isJestMockOrSpy(actual)) {
    // @ts-expect-error OK to have implicit any for this
    return { pass: false, message: mockCheckFailMessage(this.utils, actual, true) };
  }

  if (!isJestMockOrSpy(expected)) {
    // @ts-expect-error OK to have implicit any for this
    return { pass: false, message: mockCheckFailMessage(this.utils, expected, false) };
  }

  let pass = false;
  let firstInvocationCallOrder = null;
  let secondInvocationCallOrder = null;
  if (isJestMockOrSpy(actual)) {
    // @ts-expect-error isJestMockOrSpy provides the type check
    firstInvocationCallOrder = actual.mock.invocationCallOrder;
    secondInvocationCallOrder = expected.mock.invocationCallOrder;
    pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder, failIfNoSecondInvocation);
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toHaveBeenCalledBefore') +
          '\n\n' +
          'Expected first mock to not have been called before, invocationCallOrder:\n' +
          `  ${printExpected(firstInvocationCallOrder)}\n` +
          'Received second mock with invocationCallOrder:\n' +
          `  ${printReceived(secondInvocationCallOrder)}`
        : matcherHint('.toHaveBeenCalledBefore') +
          '\n\n' +
          'Expected first mock to have been called before, invocationCallOrder:\n' +
          `  ${printExpected(firstInvocationCallOrder)}\n` +
          'Received second mock with invocationCallOrder:\n' +
          `  ${printReceived(secondInvocationCallOrder)}`,
  };
}

const mockCheckFailMessage = (utils: any, value: any, isReceivedValue: any) => () => {
  const valueKind = isReceivedValue ? 'Received' : 'Expected';
  const valueKindPrintFunc = isReceivedValue ? utils.printReceived : utils.printExpected;

  return (
    utils.matcherHint('.toHaveBeenCalledBefore') +
    '\n\n' +
    `Matcher error: ${valueKindPrintFunc(valueKind.toLowerCase())} must be a mock or spy function` +
    '\n\n' +
    utils.printWithType(valueKind, value, valueKindPrintFunc)
  );
};

const smallest = (ns: any) => ns.reduce((acc: any, n: any) => (acc < n ? acc : n));

const predicate = (firstInvocationCallOrder: any, secondInvocationCallOrder: any, failIfNoSecondInvocation: any) => {
  if (firstInvocationCallOrder.length === 0) return false;
  if (secondInvocationCallOrder.length === 0) return !failIfNoSecondInvocation;

  const firstSmallest = smallest(firstInvocationCallOrder);
  const secondSmallest = smallest(secondInvocationCallOrder);

  return firstSmallest < secondSmallest;
};
