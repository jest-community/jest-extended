/**
 * Use `.toBeFinite` when checking if a value is a `Number`, not `NaN` or `Infinity`.
 */
export function toBeFinite(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, matcherHint } = this.utils;

  const pass = Number.isFinite(actual) || typeof actual === 'bigint';

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeFinite', 'received', '') +
          '\n\n' +
          'Expected value to not be finite received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeFinite', 'received', '') +
          '\n\n' +
          'Expected value to be finite received:\n' +
          `  ${printReceived(actual)}`,
  };
}
