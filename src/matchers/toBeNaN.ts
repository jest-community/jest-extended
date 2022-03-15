interface CustomMatchers<R = unknown> {
  toBeNaN(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeNaN(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeNaN', 'received', '') +
    '\n\n' +
    'Expected value to be a number received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeNaN', 'received', '') +
    '\n\n' +
    'Expected value to not be a number received:\n' +
    `  ${printReceived(actual)}`;

  const pass = isNaN(actual as number);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
