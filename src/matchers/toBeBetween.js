export function toBeBetween(actual, startDate, endDate) {
  const { matcherHint, printExpected, printReceived } = this.utils;

  const pass = actual >= startDate && actual <= endDate;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeBetween', 'received', '') +
          '\n\n' +
          `Expected date to be between ${printExpected(startDate)} and ${printExpected(endDate)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeBetween', 'received', '') +
          '\n\n' +
          `Expected date to be between ${printExpected(startDate)} and ${printExpected(endDate)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
