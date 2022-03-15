interface CustomMatchers<R = unknown> {
  toBeBetween(startDate: Date, endDate: Date): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeBetween(
  this: jest.MatcherContext,
  actual: unknown,
  startDate: Date,
  endDate: Date,
): jest.CustomMatcherResult {
  const { matcherHint, printReceived } = this.utils;

  const passMessage =
    matcherHint('.not.toBeBetween', 'received', '') +
    '\n\n' +
    `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeBetween', 'received', '') +
    '\n\n' +
    `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
    `  ${printReceived(actual)}`;

  const pass = (actual as Date) >= startDate && (actual as Date) <= endDate;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
