export function toBeBeforeOrEqualTo(actual: unknown, expected: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { matcherHint, printReceived } = this.utils;

  if (!(actual instanceof Date)) {
    throw new Error(
      matcherHint('.toBeBeforeOrEqualTo', 'received', '') +
        '\n\n' +
        'Expected value to be of type Date but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  const pass = actual <= expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeBeforeOrEqualTo', 'received', '') +
          '\n\n' +
          `Expected date to be before or equal to ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeBeforeOrEqualTo', 'received', '') +
          '\n\n' +
          `Expected date to be before or equal to ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
