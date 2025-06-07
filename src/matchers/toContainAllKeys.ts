import { contains } from 'src/utils';

/**
 * Use `.toContainAllKeys` when checking if an object only contains all of the provided keys.
 * @param {Array.<String|*>} keys
 */
export function toContainAllKeys<E = unknown>(actual: unknown, expected: readonly (keyof E | string)[]) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printExpected, printReceived, matcherHint } = this.utils;

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const objectKeys = Object.keys(actual as Record<string, unknown>);
    pass =
      objectKeys.length === expected.length &&
      // @ts-expect-error OK to have implicit any for this.equals
      expected.every(key => contains((a, b) => this.equals(a, b, this.customTesters), objectKeys, key));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllKeys') +
          '\n\n' +
          'Expected object to not contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(Object.keys(actual as Record<string, unknown>))}`
        : matcherHint('.toContainAllKeys') +
          '\n\n' +
          'Expected object to contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(Object.keys(actual as Record<string, unknown>))}`,
  };
}
