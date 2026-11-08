import type { MatcherContext } from 'expect';
export function toSatisfyAll<E = unknown>(this: MatcherContext, actual: E[], expected: (x: E) => boolean) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  if (typeof expected !== 'function') {
    return {
      pass: false,
      message: () =>
        matcherHint('.toSatisfyAll') +
        '\n\n' +
        `Expected predicate to be a function but instead "${expected}" was found`,
    };
  }

  const pass = actual.every(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toSatisfyAll') +
          '\n\n' +
          'Expected array to not satisfy predicate for all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toSatisfyAll') +
          '\n\n' +
          'Expected array to satisfy predicate for all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
