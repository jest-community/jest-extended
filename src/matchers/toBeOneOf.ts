import { contains } from 'src/utils';

/**
 * Use .toBeOneOf when checking if a value is a member of a given Array.
 * @param {Array.<*>} expected
 */
export function toBeOneOf<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error OK to have implicit any for this.equals
  const pass = contains((a, b) => this.equals(a, b, this.customTesters), expected, actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeOneOf') +
          '\n\n' +
          'Expected value to not be in list:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeOneOf') +
          '\n\n' +
          'Expected value to be in list:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
