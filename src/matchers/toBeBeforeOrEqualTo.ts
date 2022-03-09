interface CustomMatchers<R = unknown> {
  toBeBeforeOrEqualTo(date: Date): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeBeforeOrEqualTo(
  this: jest.MatcherContext,
  actual: unknown,
  expected: Date,
): jest.CustomMatcherResult {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeBeforeOrEqualTo', 'received', '') +
    '\n\n' +
    `Expected date to be before or equal to ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeBeforeOrEqualTo', 'received', '') +
    '\n\n' +
    `Expected date to be before or equal to ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const pass = actual <= expected;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
