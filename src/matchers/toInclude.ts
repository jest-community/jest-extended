/**
 * Use `.toInclude` when checking if a `String` includes the given `String` substring.
 *
 * @param {String} substring
 */
export function toInclude(actual: unknown, expected: string) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = typeof actual === 'string' && actual.includes(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toInclude') +
          '\n\n' +
          'Expected string to not include:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toInclude') +
          '\n\n' +
          'Expected string to include:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
