/**
 * Use `.toBeNegative` when checking if a value is a negative `Number`.
 */
export function toBeNegative(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass =
    (typeof actual === 'number' && !isNaN(actual) && actual < 0) || (typeof actual === 'bigint' && actual < BigInt(0));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeNegative', 'received', '') +
          '\n\n' +
          'Expected value to not be a negative number received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeNegative', 'received', '') +
          '\n\n' +
          'Expected value to be a negative number received:\n' +
          `  ${printReceived(actual)}`,
  };
}
