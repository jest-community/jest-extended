import { contains } from '../utils';

interface CustomMatchers<R = unknown, T = Record<string, unknown>> {
  toBeOneOf(members: T[]): R;
}

declare global {
  namespace jest {
    interface Matchers<R, T> extends CustomMatchers<R, T> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeOneOf<T>(this: jest.MatcherContext, actual: T, expected: T[]): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeOneOf', 'item', 'list') +
    '\n\n' +
    'Expected value to not be in list:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeOneOf', 'item', 'list') +
    '\n\n' +
    'Expected value to be in list:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = contains(this.equals, expected, actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
