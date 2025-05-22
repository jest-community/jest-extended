import { contains } from 'src/utils';

/**
 * Use `.toContainAnyEntries` when checking if an object contains at least one of the provided entries.
 *
 * @param {Array.<Array.<keyof E, E[keyof E]>>} entries
 */
export function toContainAnyEntries<E = unknown>(
  actual: unknown,
  expected: readonly (readonly [keyof E, E[keyof E]])[],
) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const entries = Object.keys(actual as Record<string, unknown>).map(k => [
      k,
      (actual as Record<string, unknown>)[k],
    ]);
    // @ts-expect-error OK to have implicit any for this.equals
    pass = expected.some(entry => contains((a, b) => this.equals(a, b, this.customTesters), entries, entry));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAnyEntries') +
          '\n\n' +
          'Expected object to not contain any of the provided entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAnyEntries') +
          '\n\n' +
          'Expected object to contain any of the provided entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
