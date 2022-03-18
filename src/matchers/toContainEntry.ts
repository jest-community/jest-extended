import { containsEntry } from '../utils';

interface CustomMatchers<R = unknown, T = Record<string, unknown>> {
  toContainEntry(entry: [keyof T, T[keyof T]]): R;
}

declare global {
  namespace jest {
    interface Matchers<R, T> extends CustomMatchers<R, T> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainEntry<T = unknown>(
  this: jest.MatcherContext,
  actual: T,
  expected: [keyof T, T[keyof T]],
): jest.CustomMatcherResult {
  const matcherName = 'toContainEntry';
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
    'Expected object to not contain entry:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint(`.${matcherName}`) +
    '\n\n' +
    'Expected object to contain entry:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = containsEntry(this.equals, actual, expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
