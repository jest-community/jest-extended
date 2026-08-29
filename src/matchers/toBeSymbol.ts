import type { MatcherContext } from 'expect';
export function toBeSymbol(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'symbol';

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeSymbol', 'received', '') +
          '\n\n' +
          'Expected value to not be a symbol, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeSymbol', 'received', '') +
          '\n\n' +
          'Expected to receive a symbol, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
