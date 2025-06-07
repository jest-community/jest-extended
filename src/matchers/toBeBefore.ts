/**
 * Use `.toBeBefore` when checking if a date occurs before `date`* @param {Date} expected
 */
export function toBeBefore(actual: unknown, expected: Date) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { matcherHint, printReceived } = this.utils;

  const pass = actual instanceof Date && actual < expected;

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
