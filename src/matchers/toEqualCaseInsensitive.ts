/**
 * Use `.toEqualCaseInsensitive` when checking if a string is equal (===) to another ignoring the casing of both strings.
 *
 * @param {String} string
 */
export function toEqualCaseInsensitive(actual: unknown, expected: string) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = String(actual).toLowerCase() === String(expected).toLowerCase();

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toEqualCaseInsensitive') +
          '\n\n' +
          'Expected values to not be equal while ignoring case (using ===):\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toEqualCaseInsensitive') +
          '\n\n' +
          'Expected values to be equal while ignoring case (using ===):\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
