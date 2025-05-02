export function toBeBefore(actual: unknown, expected: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { matcherHint, printReceived } = this.utils;

  if (!(actual instanceof Date)) {
    throw new Error(
      matcherHint('.toBeBefore', 'received', '') +
        '\n\n' +
        'Expected value to be of type Date but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  const pass = actual < expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeBefore', 'received', '') +
          '\n\n' +
          `Expected date to be before ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeBefore', 'received', '') +
          '\n\n' +
          `Expected date to be before ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
