interface CustomMatchers<R = unknown> {
  toBeSymbol(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeSymbol(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeSymbol', 'received', '') +
    '\n\n' +
    'Expected value to not be a symbol, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeSymbol', 'received', '') +
    '\n\n' +
    'Expected to receive a symbol, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = typeof actual === 'symbol';

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
