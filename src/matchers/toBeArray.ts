interface CustomMatchers<R = unknown> {
  toBeArray(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeArray(this: jest.MatcherContext, expected: unknown): jest.CustomMatcherResult {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeArray', 'received', '') +
    '\n\n' +
    'Expected value to not be an array received:\n' +
    `  ${printReceived(expected)}`;

  const failMessage =
    matcherHint('.toBeArray', 'received', '') +
    '\n\n' +
    'Expected value to be an array received:\n' +
    `  ${printReceived(expected)}`;

  const pass = Array.isArray(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
