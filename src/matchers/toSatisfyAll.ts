interface CustomMatchers<R = unknown> {
  toSatisfyAll<A>(matcher: (actual: A) => boolean): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

export function toSatisfyAll<A>(
  this: jest.MatcherContext,
  actual: A[],
  expected: <P>(matcher: P) => boolean,
): jest.CustomMatcherResult {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toSatisfyAll') +
    '\n\n' +
    'Expected array to not satisfy predicate for all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toSatisfyAll') +
    '\n\n' +
    'Expected array to satisfy predicate for all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual.every(expected);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
