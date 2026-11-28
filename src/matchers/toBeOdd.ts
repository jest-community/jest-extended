import type { MatcherContext } from 'src/utils';

export function toBeOdd(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = (isNumber(actual) || isBigInt(actual)) && isOdd(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeOdd', 'received', '') +
          '\n\n' +
          'Expected value to not be odd received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeOdd', 'received', '') +
          '\n\n' +
          'Expected value to be odd received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const isNumber = (expected: unknown): expected is number => typeof expected === 'number' && Number.isFinite(expected);
const isBigInt = (expected: unknown): expected is bigint => typeof expected === 'bigint';
const isOdd = (expected: number | bigint) => {
  if (isBigInt(expected)) return expected % 2n === 1n || expected % 2n === -1n;
  return Math.abs(expected % 2) === 1;
};
