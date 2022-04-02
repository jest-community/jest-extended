import { contains } from '../utils';

interface CustomMatchers<R = unknown> {
  toContainAnyValues<T>(values: T[]): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainAnyValues<T>(
  this: jest.MatcherContext,
  actual: T,
  expected: Array<T[keyof T]>,
): jest.CustomMatcherResult {
  const matcherName = 'toContainAnyValues';
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
    'Expected object to not contain any of the following values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint(`.${matcherName}`) +
    '\n\n' +
    'Expected object to contain any of the following values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const objectValues = Object.values(actual);
  const pass = expected.some(value => contains(this.equals, objectValues, value));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
