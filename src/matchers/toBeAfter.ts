interface CustomMatchers<R = unknown> {
  fail(message?: string): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toBeAfter(this: jest.MatcherContext, date: unknown, after: Date): jest.CustomMatcherResult {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeAfter', 'received', '') +
    '\n\n' +
    `Expected date to be after ${printReceived(after)} but received:\n` +
    `  ${printReceived(date)}`;

  const failMessage =
    matcherHint('.toBeAfter', 'received', '') +
    '\n\n' +
    `Expected date to be after ${printReceived(after)} but received:\n` +
    `  ${printReceived(date)}`;

  const pass = date > after;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
