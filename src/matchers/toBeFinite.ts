import type { MatcherContext } from 'expect';
export function toBeFinite(this: MatcherContext, actual: unknown) {
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
