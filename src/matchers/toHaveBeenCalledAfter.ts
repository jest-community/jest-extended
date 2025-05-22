import { isJestMockOrSpy } from 'src/utils';

/**
 * Use `.toHaveBeenCalledAfter` when checking if a `Mock` was called after another `Mock`.
 *
 * Note: Required Jest version >=23
 *
 * @param {Mock} mock
 * @param {boolean} [failIfNoFirstInvocation=true]
 */
export function toHaveBeenCalledAfter(
  actual: unknown,
  expected: jest.MockInstance<any, any[]>,
  failIfNoFirstInvocation: boolean = true,
) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (!isJestMockOrSpy(actual)) {
    // @ts-expect-error OK to have implicit any for this.utils
    return { pass: false, message: mockCheckFailMessage(this.utils, actual, true) };
  }

  if (!isJestMockOrSpy(expected)) {
    // @ts-expect-error OK to have implicit any for this.utils
    return { pass: false, message: mockCheckFailMessage(this.utils, expected, false) };
  }

  let pass = false;
  let firstInvocationCallOrder = null;
  let secondInvocationCallOrder = null;
  // @ts-expect-error isJestMockOrSpy provides the type check
  firstInvocationCallOrder = actual.mock.invocationCallOrder;
  secondInvocationCallOrder = expected.mock.invocationCallOrder;
  pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder, failIfNoFirstInvocation);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toHaveBeenCalledAfter') +
          '\n\n' +
          'Expected first mock to not have been called after, invocationCallOrder:\n' +
          `  ${printExpected(firstInvocationCallOrder)}\n` +
          'Received second mock with invocationCallOrder:\n' +
          `  ${printReceived(secondInvocationCallOrder)}`
        : matcherHint('.toHaveBeenCalledAfter') +
          '\n\n' +
          'Expected first mock to have been called after, invocationCallOrder:\n' +
          `  ${printExpected(firstInvocationCallOrder)}\n` +
          'Received second mock with invocationCallOrder:\n' +
          `  ${printReceived(secondInvocationCallOrder)}`,
  };
}

const smallest = (ns: any) => ns.reduce((acc: any, n: any) => (acc < n ? acc : n));

const predicate = (firstInvocationCallOrder: any, secondInvocationCallOrder: any, failIfNoFirstInvocation: any) => {
  if (firstInvocationCallOrder.length === 0) return !failIfNoFirstInvocation;
  if (secondInvocationCallOrder.length === 0) return false;

  const firstSmallest = smallest(firstInvocationCallOrder);
  const secondSmallest = smallest(secondInvocationCallOrder);

  return firstSmallest > secondSmallest;
};

const mockCheckFailMessage = (utils: any, value: any, isReceivedValue: any) => () => {
  const valueKind = isReceivedValue ? 'Received' : 'Expected';
  const valueKindPrintFunc = isReceivedValue ? utils.printReceived : utils.printExpected;

  return (
    utils.matcherHint('.toHaveBeenCalledAfter') +
    '\n\n' +
    `Matcher error: ${valueKindPrintFunc(valueKind.toLowerCase())} must be a mock or spy function` +
    '\n\n' +
    utils.printWithType(valueKind, value, valueKindPrintFunc)
  );
};
