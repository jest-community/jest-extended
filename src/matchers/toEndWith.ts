interface CustomMatchers<R = unknown> {
  toEndWith(suffix: string): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toEndWith(this: jest.MatcherContext, actual: string, expected: string): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toEndWith') +
    '\n\n' +
    'Expected string to not end with:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toEndWith') +
    '\n\n' +
    'Expected string to end with:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.endsWith(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
