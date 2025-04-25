import { getType } from 'jest-get-type';

export function toBeDate(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this
  const { matcherHint, printReceived } = this.utils;

  // @ts-expect-error getType provides the type check
  const pass = getType(actual) === 'date' && !isNaN(actual);

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
