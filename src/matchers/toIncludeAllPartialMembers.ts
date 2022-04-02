import { containsEntry } from '../utils';

interface CustomMatchers<R = unknown> {
  toIncludeAllPartialMembers<T>(members: T[]): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toIncludeAllPartialMembers<E>(
  this: jest.MatcherContext,
  actual: unknown[],
  expected: E[],
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeAllPartialMembers') +
    '\n\n' +
    'Expected list to not have all of the following partial members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeAllPartialMembers') +
    '\n\n' +
    'Expected list to have all of the following partial members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass =
    Array.isArray(actual) &&
    Array.isArray(expected) &&
    expected.every(partial =>
      actual.some(value => Object.entries(partial).every(entry => containsEntry(this.equals, value, entry))),
    );

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
