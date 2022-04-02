import { contains } from '../utils';

interface CustomMatchers<R = unknown> {
  toContainAnyEntries<T>(entries: Array<[keyof T, T[keyof T]]>): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainAnyEntries<T = unknown>(
  this: jest.MatcherContext,
  actual: T,
  expected: Array<[keyof T, T[keyof T]]>,
): jest.CustomMatcherResult {
  const matcherName = 'toContainAnyEntries';
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
    'Expected object to not contain any of the provided entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint(`.${matcherName}`) +
    '\n\n' +
    'Expected object to contain any of the provided entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const entries = Object.entries(actual);
  const pass = expected.some(entry => contains(this.equals, entries, entry));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
