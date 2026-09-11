import type { MatcherContext } from 'expect';
export function toBeBetween(this: MatcherContext, actual: unknown, startDate: Date, endDate: Date) {
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
