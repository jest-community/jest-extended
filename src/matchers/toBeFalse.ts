interface CustomMatchers<R = unknown> {
  toBeFalse(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeFalse(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint, printExpected } = this.utils;

  const passMessage =
    matcherHint('.not.toBeFalse', 'received', '') +
    '\n\n' +
    'Expected value to not be false received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeFalse', 'received', '') +
    '\n\n' +
    'Expected value to be false:\n' +
    `  ${printExpected(false)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual === false;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
