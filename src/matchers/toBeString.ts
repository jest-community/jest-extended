interface CustomMatchers<R = unknown> {
  toBeString(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeString(this: jest.MatcherContext, expected: unknown): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeString', 'received', '') +
    '\n\n' +
    'Expected value to not be of type string received:\n' +
    `  ${printReceived(expected)}`;

  const failMessage =
    matcherHint('.toBeString', 'received', '') +
    '\n\n' +
    'Expected value to be of type string:\n' +
    `  ${printExpected('type of string')}\n` +
    'Received:\n' +
    `  ${printReceived(typeof expected)}`;

  const pass = typeof expected === 'string' || expected instanceof String;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
