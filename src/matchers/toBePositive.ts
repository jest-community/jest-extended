interface CustomMatchers<R = unknown> {
  toBePositive(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBePositive(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBePositive', 'received', '') +
    '\n\n' +
    'Expected value to not be positive received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBePositive', 'received', '') +
    '\n\n' +
    'Expected value to be positive received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual !== true && !isNaN(actual as number) && actual !== Infinity && (actual as number) > 0;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
