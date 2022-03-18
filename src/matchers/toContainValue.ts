import { contains } from '../utils';

interface CustomMatchers<R = unknown, T = Record<string, unknown>> {
  toContainValue(keys: T[keyof T]): R;
}

declare global {
  namespace jest {
    interface Matchers<R, T> extends CustomMatchers<R, T> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainValue<T = unknown>(
  this: jest.MatcherContext,
  actual: T,
  expected: T[keyof T],
): jest.CustomMatcherResult {
  const matcherName = 'toContainValue';
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
    'Expected object to not contain value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint(`.${matcherName}`) +
    '\n\n' +
    'Expected object to contain value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const values = Object.values(actual);
  const pass = contains(this.equals, values, expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
