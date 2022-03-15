interface CustomMatchers<R = unknown> {
  toBeAfterOrEqualTo(date: Date): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeAfterOrEqualTo(
  this: jest.MatcherContext,
  actual: unknown,
  expected: Date,
): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeAfterOrEqualTo', 'received', '') +
    '\n\n' +
    `Expected date to be after or equal to ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeAfterOrEqualTo', 'received', '') +
    '\n\n' +
    `Expected date to be after or equal to ${printReceived(expected)} but received:\n` +
    `  ${printReceived(actual)}`;

  const pass = (actual as Date) >= expected;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
