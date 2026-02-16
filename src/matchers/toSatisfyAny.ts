/**
 * Use `.toSatisfyAny` when you want to use a custom matcher by supplying a predicate function that returns `true` for any matching value in an array.
 * @param {Function} predicate
 */
export function toSatisfyAny(actual: unknown, expected: (x: any) => boolean) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

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
