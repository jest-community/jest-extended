/**
 * Use `.toBeArray` when checking if a value is an `Array`.
 */
export function toBeArray(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { matcherHint, printReceived } = this.utils;

  const pass = Array.isArray(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeArray', 'received', '') +
          '\n\n' +
          'Expected value to not be an array received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeArray', 'received', '') +
          '\n\n' +
          'Expected value to be an array received:\n' +
          `  ${printReceived(actual)}`,
  };
}
