import { determinePropertyMessage } from 'src/utils';

/**
 * Use `.toBeArrayOfSize` when checking if a value is an `Array` of size x.
 * @param {Number} expected
 */
export function toBeArrayOfSize(actual: unknown, expected: number) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printExpected, printReceived, matcherHint } = this.utils;

  const pass = Array.isArray(actual) && actual.length === expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeArrayOfSize') +
          '\n\n' +
          'Expected value to not be an array of size:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  value: ${printReceived(actual)}\n` +
          `  length: ${printReceived(determinePropertyMessage(actual, 'length'))}`
        : matcherHint('.toBeArrayOfSize') +
          '\n\n' +
          'Expected value to be an array of size:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  value: ${printReceived(actual)}\n` +
          `  length: ${printReceived(determinePropertyMessage(actual, 'length'))}`,
  };
}
