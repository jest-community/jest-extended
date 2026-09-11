import type { MatcherContext } from 'expect';
export function toBeBigInt(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'bigint';

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeBigInt', 'received', '') +
          '\n\n' +
          'Expected value to not be an BigInt received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeBigInt', 'received', '') +
          '\n\n' +
          'Expected value to be a BigInt received:\n' +
          `  ${printReceived(actual)}`,
  };
}
