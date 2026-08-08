export function toBeEmptyArray(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = Array.isArray(actual) && actual.length === 0;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeEmptyArray', 'received', '') +
          '\n\n' +
          'Expected value to not be an empty array, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeEmptyArray', 'received', '') +
          '\n\n' +
          'Expected value to be an empty array, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
