interface CustomMatchers<R = unknown> {
  toSatisfyAny<A>(matcher: (actual: A) => boolean): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toSatisfyAny<A>(
  this: jest.MatcherContext,
  actual: A[],
  expected: <P>(matcher: P) => boolean,
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toSatisfyAny') +
    '\n\n' +
    'Expected array to not satisfy predicate for any value:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toSatisfyAny') +
    '\n\n' +
    'Expected array to satisfy predicate for any values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.some(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
