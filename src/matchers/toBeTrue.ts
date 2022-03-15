interface CustomMatchers<R = unknown> {
  toBeTrue(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeTrue(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeTrue', 'received', '') +
    '\n\n' +
    'Expected value to not be true received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeTrue', 'received', '') +
    '\n\n' +
    'Expected value to be true:\n' +
    `  ${printExpected(true)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual === true;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
