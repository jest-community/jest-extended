interface CustomMatchers<R = unknown> {
  toBeNil(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeNil(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeNil', 'received', '') +
    '\n\n' +
    'Expected value not to be null or undefined, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeNil', 'received', '') +
    '\n\n' +
    'Expected value to be null or undefined, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual === undefined || actual === null;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
