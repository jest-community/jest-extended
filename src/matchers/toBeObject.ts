/**
 * Use `.toBeObject` when checking if a value is an `Object`.
 */
export function toBeObject(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'object' && actual !== null && !Array.isArray(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeObject', 'received', '') +
          '\n\n' +
          'Expected value to not be an object, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeObject', 'received', '') +
          '\n\n' +
          'Expected value to be an object, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
