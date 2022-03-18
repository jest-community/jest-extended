import { isJestMockOrSpy } from '../utils';

interface CustomMatchers<R = unknown> {
  toHaveBeenCalledBefore(mock: jest.Mock): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toHaveBeenCalledBefore(
  this: jest.MatcherContext,
  actual: jest.Mock,
  expected: jest.Mock,
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (!isJestMockOrSpy(actual)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, actual, true) };
  }

  if (!isJestMockOrSpy(expected)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, expected, false) };
  }

  const firstInvocationCallOrder = actual.mock.invocationCallOrder;
  const secondInvocationCallOrder = expected.mock.invocationCallOrder;
  const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder);

  const passMessage =
    matcherHint('.not.toHaveBeenCalledBefore') +
    '\n\n' +
    'Expected first mock to not have been called before, invocationCallOrder:\n' +
    `  ${printExpected(firstInvocationCallOrder)}\n` +
    'Received second mock with invocationCallOrder:\n' +
    `  ${printReceived(secondInvocationCallOrder)}`;

  const failMessage =
    matcherHint('.toHaveBeenCalledBefore') +
    '\n\n' +
    'Expected first mock to have been called before, invocationCallOrder:\n' +
    `  ${printExpected(firstInvocationCallOrder)}\n` +
    'Received second mock with invocationCallOrder:\n' +
    `  ${printReceived(secondInvocationCallOrder)}`;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const mockCheckFailMessage =
  (utils: jest.MatcherContext['utils'], value: jest.Mock, isReceivedValue: boolean) => () => {
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

const smallest = (ns: number[]) => ns.reduce((acc, n) => (acc < n ? acc : n));

const predicate = (firstInvocationCallOrder: number[], secondInvocationCallOrder: number[]) => {
  if (firstInvocationCallOrder.length === 0) return false;
  if (secondInvocationCallOrder.length === 0) return true;

  const firstSmallest = smallest(firstInvocationCallOrder);
  const secondSmallest = smallest(secondInvocationCallOrder);

  return firstSmallest < secondSmallest;
};
