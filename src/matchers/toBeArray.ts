export function toBeArray(expected: unknown) {
  // @ts-expect-error OK to have implicit any for this
  const { matcherHint, printReceived } = this.utils;

  const pass = Array.isArray(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeArray', 'received', '') +
          '\n\n' +
          'Expected value to not be an array received:\n' +
          `  ${printReceived(expected)}`
        : matcherHint('.toBeArray', 'received', '') +
          '\n\n' +
          'Expected value to be an array received:\n' +
          `  ${printReceived(expected)}`,
  };
}
