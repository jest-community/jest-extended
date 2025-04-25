import { getType } from 'jest-get-type';

export function toBeBetween(actual: unknown, startDate: Date, endDate: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { matcherHint, printReceived } = this.utils;

  if (getType(actual) !== 'date') {
    throw new Error(
      matcherHint('.toBeBetween', 'received', '') +
        '\n\n' +
        'Expected value to be of type Date but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  // @ts-expect-error getType provides the type check
  const pass = actual >= startDate && actual <= endDate;

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
