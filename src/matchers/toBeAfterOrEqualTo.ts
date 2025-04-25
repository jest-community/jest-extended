import { getType } from 'jest-get-type';

export function toBeAfterOrEqualTo(actual: unknown, expected: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, matcherHint } = this.utils;

  if (getType(actual) !== 'date') {
    throw new Error(
      matcherHint('.toBeAfterOrEqualTo', 'received', '') +
        '\n\n' +
        'Expected value to be of type Date but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  // @ts-expect-error getType provides the type check
  const pass = actual >= expected;

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
