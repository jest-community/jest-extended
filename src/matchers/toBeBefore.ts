interface CustomMatchers<R = unknown> {
  toBeBefore(date: Date): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeBefore(this: jest.MatcherContext, actual: unknown, expected: Date): jest.CustomMatcherResult {
  const { matcherHint, printReceived } = this.utils;
  const passMessage =
    matcherHint('.not.toBeBefore', 'received', '') +
    '\n\n' +
    `Expected date to be before ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeBefore', 'received', '') +
    '\n\n' +
    `Expected date to be before ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const pass = (actual as Date) < expected;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
