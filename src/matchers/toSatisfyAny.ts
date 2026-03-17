import type { MatcherContext } from 'expect';
export function toSatisfyAny(this: MatcherContext, actual: unknown, expected: (x: unknown) => boolean) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (typeof expected !== 'function') {
    return {
      pass: false,
      message: () =>
        matcherHint('.toSatisfyAny') +
        '\n\n' +
        `Expected predicate to be a function but instead "${expected}" was found`,
    };
  }

  let pass = false;
  if (Array.isArray(actual)) {
    pass = actual.some(expected);
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toSatisfyAny') +
          '\n\n' +
          'Expected array to not satisfy predicate for any value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toSatisfyAny') +
          '\n\n' +
          'Expected array to satisfy predicate for any values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
