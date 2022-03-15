interface CustomMatchers<R = unknown> {
  toBeOdd(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeOdd(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeOdd', 'received', '') +
    '\n\n' +
    'Expected value to not be odd received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeOdd', 'received', '') +
    '\n\n' +
    'Expected value to be odd received:\n' +
    `  ${printReceived(actual)}`;

  const pass = !isNaN(parseInt(actual as string)) && (actual as number) % 2 === 1;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
