import { contains } from '../utils';

interface CustomMatchers<R = unknown> {
  toIncludeAnyMembers<T>(members: T[]): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toIncludeAnyMembers<E>(
  this: jest.MatcherContext,
  actual: unknown[],
  expected: E[],
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toIncludeAnyMembers') +
    '\n\n' +
    'Expected list to not include any of the following members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeAnyMembers') +
    '\n\n' +
    'Expected list to include any of the following members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass =
    Array.isArray(actual) && Array.isArray(expected) && expected.some(member => contains(this.equals, actual, member));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
