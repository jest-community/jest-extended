export function toBeBefore(actual, expected) {
  const { printExpected, matcherHint, printReceived } = this.utils;

  const pass = actual < expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeBefore', 'received', '') +
          '\n\n' +
          `Expected date to be before ${printExpected(expected)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeBefore', 'received', '') +
          '\n\n' +
          `Expected date to be before ${printExpected(expected)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
