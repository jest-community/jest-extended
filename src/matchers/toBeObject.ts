import { getType } from 'jest-get-type';

interface CustomMatchers<R = unknown> {
  toBeObject(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeObject(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeObject', 'received', '') +
    '\n\n' +
    'Expected value to not be an object, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeObject', 'received', '') +
    '\n\n' +
    'Expected value to be an object, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = getType(actual) === 'object';

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
