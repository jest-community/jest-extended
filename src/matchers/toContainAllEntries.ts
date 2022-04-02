import { containsEntry } from '../utils';

interface CustomMatchers<R = unknown> {
  toContainAllEntries<T>(entries: Array<[keyof T, T[keyof T]]>): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toContainAllEntries(
  this: jest.MatcherContext,
  actual: unknown,
  expected: [string, unknown][],
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainAllEntries') +
    '\n\n' +
    'Expected object to not only contain all of the given entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainAllEntries') +
    '\n\n' +
    'Expected object to only contain all of the given entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass =
    (actual as object).hasOwnProperty &&
    expected.length == Object.keys(actual as object).length &&
    expected.every(entry => containsEntry(this.equals, actual as Record<string, unknown>, entry));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
