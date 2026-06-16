import type { MatcherContext } from 'expect';
export function toBeNegative(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass =
    (typeof actual === 'number' && !isNaN(actual) && actual < 0) || (typeof actual === 'bigint' && actual < BigInt(0));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeNegative', 'received', '') +
          '\n\n' +
          'Expected value to not be a negative number received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeNegative', 'received', '') +
          '\n\n' +
          'Expected value to be a negative number received:\n' +
          `  ${printReceived(actual)}`,
  };
}
