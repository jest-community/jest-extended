import { getType } from 'jest-get-type';

interface CustomMatchers<R = unknown> {
  toBeValidDate(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeValidDate(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeValidDate', 'received', '') +
    '\n\n' +
    'Expected value to not be a valid date received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeValidDate', 'received', '') +
    '\n\n' +
    'Expected value to be a valid date received:\n' +
    `  ${printReceived(actual)}`;

  const pass = getType(actual) === 'date' && !isNaN(actual as number) && !isNaN((actual as Date).getTime());

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
