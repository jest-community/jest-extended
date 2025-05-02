export function toBeBetween(actual: unknown, startDate: Date, endDate: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { matcherHint, printReceived } = this.utils;

  const pass = actual instanceof Date && actual >= startDate && actual <= endDate;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeBetween', 'received', '') +
          '\n\n' +
          `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeBetween', 'received', '') +
          '\n\n' +
          `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
