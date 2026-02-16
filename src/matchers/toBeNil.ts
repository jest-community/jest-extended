/**
 * Use `.toBeNil` when checking a value is `null` or `undefined`.
 */
export function toBeNil(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = actual === undefined || actual === null;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeNil', 'received', '') +
          '\n\n' +
          'Expected value not to be null or undefined, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeNil', 'received', '') +
          '\n\n' +
          'Expected value to be null or undefined, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
