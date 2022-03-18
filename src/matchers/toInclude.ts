interface CustomMatchers<R = unknown> {
  toInclude(substring: string): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toInclude(this: jest.MatcherContext, actual: string, expected: string): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toInclude') +
    '\n\n' +
    'Expected string to not include:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toInclude') +
    '\n\n' +
    'Expected string to include:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.includes(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
