export function toBeEmptyObject(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, matcherHint } = this.utils;

  const pass =
    typeof actual === 'object' && actual !== null && !Array.isArray(actual) && Object.keys(actual).length === 0;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeEmptyObject', 'received', '') +
          '\n\n' +
          'Expected value to not be an empty object, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeEmptyObject', 'received', '') +
          '\n\n' +
          'Expected value to be an empty object, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
