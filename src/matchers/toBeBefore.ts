import { getType } from 'jest-get-type';

export function toBeBefore(actual: unknown, expected: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { matcherHint, printReceived } = this.utils;

  if (getType(actual) !== 'date') {
    throw new Error(
      matcherHint('.toBeBefore', 'received', '') +
        '\n\n' +
        'Expected value to be of type Date but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  // @ts-expect-error getType provides the type check
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
