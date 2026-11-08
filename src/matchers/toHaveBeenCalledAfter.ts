import type { MatcherContext } from 'expect';
import { isJestMockOrSpy } from 'src/utils';

export function toHaveBeenCalledAfter(
  this: MatcherContext,
  actual: unknown,
  expected: jest.MockInstance<any, any[]>,
  failIfNoFirstInvocation: boolean = true,
) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (!isJestMockOrSpy(actual)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, actual, true) };
  }

  if (!isJestMockOrSpy(expected)) {
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

const smallest = (ns: number[]) => ns.reduce((acc: number, n: number) => (acc < n ? acc : n));

const predicate = (
  firstInvocationCallOrder: number[],
  secondInvocationCallOrder: number[],
  failIfNoFirstInvocation: boolean,
) => {
  if (firstInvocationCallOrder.length === 0) return !failIfNoFirstInvocation;
  if (secondInvocationCallOrder.length === 0) return false;

  const firstSmallest = smallest(firstInvocationCallOrder);
  const secondSmallest = smallest(secondInvocationCallOrder);

  return firstSmallest > secondSmallest;
};

const mockCheckFailMessage = (utils: any, value: unknown, isReceivedValue: boolean) => () => {
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
