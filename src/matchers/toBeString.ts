/**
 * Use `.toBeString` when checking if a value is a `String`.
 */
export function toBeString(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = typeof actual === 'string' || actual instanceof String;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeString', 'received', '') +
          '\n\n' +
          'Expected value to not be of type string received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeString', 'received', '') +
          '\n\n' +
          'Expected value to be of type string:\n' +
          `  ${printExpected('type of string')}\n` +
          'Received:\n' +
          `  ${printReceived(typeof actual)}`,
  };
}
