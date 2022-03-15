import { getType } from 'jest-get-type';

interface CustomMatchers<R = unknown> {
  toBeEmptyObject(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeEmptyObject(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeEmptyObject', 'received', '') +
    '\n\n' +
    'Expected value to not be an empty object, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeEmptyObject', 'received', '') +
    '\n\n' +
    'Expected value to be an empty object, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = getType(actual) === 'object' && Object.keys(actual as { [key: string]: unknown }).length === 0;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
