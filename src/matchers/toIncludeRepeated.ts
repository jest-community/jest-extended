/**
 * Use `.toIncludeRepeated` when checking if a `String` includes the given `String` substring the correct number of times.
 *
 * @param {String} substring
 * @param {Number} times
 */
export function toIncludeRepeated(actual: unknown, expected: string, occurrences: number) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = typeof actual === 'string' && (actual.match(new RegExp(expected, 'g')) || []).length === occurrences;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeRepeated') +
          '\n\n' +
          `Expected string to not include repeated ${occurrences} times:\n` +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeRepeated') +
          '\n\n' +
          `Expected string to include repeated ${occurrences} times:\n` +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
