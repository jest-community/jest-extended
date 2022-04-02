import { contains } from '../utils';

interface CustomMatchers<R = unknown> {
  toIncludeAllMembers<T>(members: T[]): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toIncludeAllMembers<E>(
  this: jest.MatcherContext,
  actual: unknown[],
  expected: E[],
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeAllMembers') +
    '\n\n' +
    'Expected list to not have all of the following members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeAllMembers') +
    '\n\n' +
    'Expected list to have all of the following members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass =
    Array.isArray(actual) && Array.isArray(expected) && expected.every(val => contains(this.equals, actual, val));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
