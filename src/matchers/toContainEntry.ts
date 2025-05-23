import { containsEntry } from 'src/utils';

/**
 * Use `.toContainEntry` when checking if an object contains the provided entry.
 *
 * @param {Array.<[keyof E, E[keyof E]>} entry
 */
export function toContainEntry<E = unknown>(actual: unknown, expected: readonly [keyof E, E[keyof E]]) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error containsEntry takes an any type
  const pass = containsEntry((a, b) => this.equals(a, b, this.customTesters), actual, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainEntry') +
          '\n\n' +
          'Expected object to not contain entry:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainEntry') +
          '\n\n' +
          'Expected object to contain entry:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
