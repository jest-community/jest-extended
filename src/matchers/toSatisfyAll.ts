/**
 * Use `.toSatisfyAll` when you want to use a custom matcher by supplying a predicate function that returns a `Boolean` for all values in an array.
 * @param {Function} predicate
 */
export function toSatisfyAll<E = unknown>(actual: E[], expected: (x: E) => boolean) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

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
