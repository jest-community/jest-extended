import { containsEntry } from '../utils';

interface CustomMatchers<R = unknown, T = Record<string, unknown>> {
  toContainEntries(entries: Array<[keyof T, T[keyof T]]>): R;
}

declare global {
  namespace jest {
    interface Matchers<R, T> extends CustomMatchers<R, T> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainEntries<T = unknown>(
  this: jest.MatcherContext,
  actual: T,
  expected: Array<[keyof T, T[keyof T]]>,
): jest.CustomMatcherResult {
  const matcherName = 'toContainEntries';
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
    'Expected object to not contain all of the given entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint(`.${matcherName}`) +
    '\n\n' +
    'Expected object to contain all of the given entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = expected.every(entry => containsEntry(this.equals, actual, entry));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
