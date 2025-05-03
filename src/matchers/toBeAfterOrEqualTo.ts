export function toBeAfterOrEqualTo(actual: unknown, expected: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, matcherHint } = this.utils;

  const pass = actual instanceof Date && actual >= expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeAfterOrEqualTo', 'received', '') +
          '\n\n' +
          `Expected date to be after or equal to ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeAfterOrEqualTo', 'received', '') +
          '\n\n' +
          `Expected date to be after or equal to ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
