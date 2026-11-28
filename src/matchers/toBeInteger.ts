import type { MatcherContext } from 'src/utils';

export function toBeInteger(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'bigint' || Number.isInteger(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeInteger', 'received', '') +
          '\n\n' +
          'Expected value to not be an integer received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeInteger', 'received', '') +
          '\n\n' +
          'Expected value to be an integer received:\n' +
          `  ${printReceived(actual)}`,
  };
}
