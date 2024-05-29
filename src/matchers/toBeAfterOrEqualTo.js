export function toBeAfterOrEqualTo(actual, expected) {
  const { printExpected, printReceived, matcherHint } = this.utils;

  const pass = actual >= expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeAfterOrEqualTo', 'received', '') +
          '\n\n' +
          `Expected date to be after or equal to ${printExpected(expected)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeAfterOrEqualTo', 'received', '') +
          '\n\n' +
          `Expected date to be after or equal to ${printExpected(expected)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
