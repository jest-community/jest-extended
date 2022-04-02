import { contains } from '../utils';

interface CustomMatchers<R = unknown> {
  toContainAllValues<T>(values: T[]): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainAllValues<T = unknown>(
  this: jest.MatcherContext,
  actual: T,
  expected: Array<T[keyof T]>,
): jest.CustomMatcherResult {
  const matcherName = 'toContainAllValues';
  const { RECEIVED_COLOR, printWithType, printReceived, printExpected, matcherHint, matcherErrorMessage } = this.utils;

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
  const pass =
    values.length === expected.length && values.every(objectValue => contains(this.equals, expected, objectValue));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
