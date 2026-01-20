export function toBeArrayOfUniqueItems(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { matcherHint, printReceived } = this.utils;

  const pass = Array.isArray(actual) && new Set(actual).size === actual.length;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeArrayOfUniqueItems', 'received', '') +
          '\n\n' +
          'Expected value to not be an array of unique items received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeArrayOfUniqueItems', 'received', '') +
          '\n\n' +
          'Expected value to be an array of unique items received:\n' +
          `  ${printReceived(actual)}`,
  };
}
