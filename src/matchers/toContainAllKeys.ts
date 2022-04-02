import { contains } from '../utils';

interface CustomMatchers<R = unknown> {
  toContainAllKeys<T>(keys: T): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainAllKeys<T = unknown>(
  this: jest.MatcherContext,
  actual: T,
  expected: Array<keyof T>,
): jest.CustomMatcherResult {
  const matcherName = 'toContainAllKeys';
  const { printExpected, printReceived, matcherHint, matcherErrorMessage, RECEIVED_COLOR, printWithType } = this.utils;

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
    'Expected object to not contain all keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(Object.keys(actual))}`;

  const failMessage =
    matcherHint(`.${matcherName}`) +
    '\n\n' +
    'Expected object to contain all keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(Object.keys(actual))}`;

  const objectKeys = Object.keys(actual);
  const pass = objectKeys.length === expected.length && expected.every(key => contains(this.equals, objectKeys, key));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
