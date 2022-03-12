interface CustomMatchers<R = unknown> {
  toBeDateString(): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeDateString(this: jest.MatcherContext, actual: unknown): jest.CustomMatcherResult {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeDateString', 'received', '') +
    '\n\n' +
    'Expected value to not be a date string received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeDateString', 'received', '') +
    '\n\n' +
    'Expected value to be a date string received:\n' +
    `  ${printReceived(actual)}`;

  const pass = !isNaN(Date.parse(actual as string));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
