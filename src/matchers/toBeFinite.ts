interface CustomMatchers<R = unknown> {
  toBeFinite(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeFinite(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeFinite', 'received', '') +
    '\n\n' +
    'Expected value to not be finite received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeFinite', 'received', '') +
    '\n\n' +
    'Expected value to be finite received:\n' +
    `  ${printReceived(actual)}`;

  const pass = Number.isFinite(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
