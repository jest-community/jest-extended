interface CustomMatchers<R = unknown> {
  toBeBoolean(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeBoolean(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeBoolean', 'received', '') +
    '\n\n' +
    'Expected value to not be of type boolean, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeBoolean', 'received', '') +
    '\n\n' +
    'Expected value to be of type boolean, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = typeof actual === 'boolean' || actual instanceof Boolean;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
