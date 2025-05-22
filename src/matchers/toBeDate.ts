/**
 * Use `.toBeDate` when checking if a value is a `Date`.
 */
export function toBeDate(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { matcherHint, printReceived } = this.utils;

  const pass = actual instanceof Date && !isNaN(actual.getTime());

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeDate', 'received', '') +
          '\n\n' +
          'Expected value to not be a date received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeDate', 'received', '') +
          '\n\n' +
          'Expected value to be a date received:\n' +
          `  ${printReceived(actual)}`,
  };
}
