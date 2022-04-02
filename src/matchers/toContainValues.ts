import { contains } from '../utils';

interface CustomMatchers<R = unknown> {
  toContainValues<T>(keys: T[]): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainValues<T = unknown>(
  this: jest.MatcherContext,
  actual: T,
  expected: Array<T[keyof T]>,
): jest.CustomMatcherResult {
  const matcherName = 'toContainValues';
  const { RECEIVED_COLOR, printReceived, printExpected, printWithType, matcherHint, matcherErrorMessage } = this.utils;

  if (typeof actual !== 'object' || actual === null) {
    throw new Error(
      matcherErrorMessage(
        matcherHint(matcherName),
        `${RECEIVED_COLOR('received')} value must be a non-null object`,
        printWithType('Received', actual, printReceived),
      ),
    );
  }

  const passMessage =
    matcherHint(`.not.${matcherName}`) +
    '\n\n' +
    'Expected object to not contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint(`.${matcherName}`) +
    '\n\n' +
    'Expected object to contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const values = Object.values(actual);
  const pass = expected.every(value => contains(this.equals, values, value));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
