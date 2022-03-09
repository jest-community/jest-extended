import { getType } from 'jest-get-type';

interface CustomMatchers<R = unknown> {
  toBeDate(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeDate(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeDate', 'received', '') +
    '\n\n' +
    'Expected value to not be a date received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeDate', 'received', '') +
    '\n\n' +
    'Expected value to be a date received:\n' +
    `  ${printReceived(actual)}`;

  const pass = getType(actual) === 'date' && !isNaN(actual as number);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
