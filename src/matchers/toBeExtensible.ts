interface CustomMatchers<R = unknown> {
  toBeExtensible(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeExtensible(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { matcherHint, printExpected, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to not be extensible received:\n' +
    `  ${printExpected(actual)}\n`;

  const failMessage =
    matcherHint('.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to be extensible received:\n' +
    `  ${printReceived(actual)}`;

  const pass = Object.isExtensible(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
