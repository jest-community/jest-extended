interface CustomMatchers<R = unknown> {
  toBeFunction(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeFunction(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeFunction', 'received', '') +
    '\n\n' +
    'Expected value to not be a function, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeFunction', 'received', '') +
    '\n\n' +
    'Expected to receive a function, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = typeof actual === 'function';

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
