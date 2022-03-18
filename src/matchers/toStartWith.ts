interface CustomMatchers<R = unknown> {
  toStartWith(prefix: string): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toStartWith(this: jest.MatcherContext, actual: string, expected: string): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toStartWith') +
    '\n\n' +
    'Expected string to not start with:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toStartWith') +
    '\n\n' +
    'Expected string to start with:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.startsWith(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
