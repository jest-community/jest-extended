import { getType } from 'jest-get-type';

export function toBeAfter(actual: unknown, after: Date) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, matcherHint } = this.utils;

  if (getType(actual) !== 'date') {
    throw new Error(
      matcherHint('.toBeAfter', 'received', '') +
        '\n\n' +
        'Expected value to be of type Date but received:\n' +
        `  ${printReceived(actual)}`,
    );
  }

  // @ts-expect-error getType provides the type check
  const pass = actual > after;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeAfter', 'received', '') +
          '\n\n' +
          `Expected date to be after ${printReceived(after)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeAfter', 'received', '') +
          '\n\n' +
          `Expected date to be after ${printReceived(after)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
