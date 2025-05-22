import { contains } from 'src/utils';

/**
 * Use `.toContainAllValues` when checking if an object only contains all of the provided values.
 *
 * @param {Array.<*>} values
 */
export function toContainAllValues<E = unknown>(actual: unknown, expected: readonly E[]) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const values = Object.keys(actual as Record<string, unknown>).map(k => (actual as Record<string, unknown>)[k]);
    pass =
      values.length === expected.length &&
      // @ts-expect-error OK to have implicit any for this.equals
      values.every(objectValue => contains((a, b) => this.equals(a, b, this.customTesters), expected, objectValue));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllValues') +
          '\n\n' +
          'Expected object to not contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAllValues') +
          '\n\n' +
          'Expected object to contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
