export function toBeArray(expected) {
  const { printExpected, matcherHint, printReceived } = this.utils;

  const pass = Array.isArray(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeArray', 'received', '') +
          '\n\n' +
          'Expected value to not be an array received:\n' +
          `  ${printExpected(expected)}`
        : matcherHint('.toBeArray', 'received', '') +
          '\n\n' +
          'Expected value to be an array received:\n' +
          `  ${printExpected(expected)}`,
  };
}
