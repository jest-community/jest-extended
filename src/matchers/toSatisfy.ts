interface CustomMatchers<R = unknown> {
  toSatisfy<A>(matcher: (actual: A) => boolean): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toSatisfy(
  this: jest.MatcherContext,
  actual: unknown,
  expected: <A>(actual: A) => boolean,
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toSatisfy', 'received', '') +
    '\n\n' +
    'Expected value to not satisfy:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toSatisfy', 'received', '') +
    '\n\n' +
    'Expected value to satisfy:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = expected(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
