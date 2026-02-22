import { containsEntry } from 'src/utils';

/**
 * Use `.toContainEntries` when checking if an object contains all of the provided entries.
 *
 * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
 */
export function toContainEntries<E = unknown>(actual: unknown, expected: readonly (readonly [keyof E, E[keyof E]])[]) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error containsEntry takes an any type
  const pass = expected.every(entry => containsEntry((a, b) => this.equals(a, b, this.customTesters), actual, entry));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainEntries') +
          '\n\n' +
          'Expected object to not contain all of the given entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainEntries') +
          '\n\n' +
          'Expected object to contain all of the given entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
