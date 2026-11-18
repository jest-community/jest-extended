import type { MatcherContext } from 'expect';
export function toBeNumber(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'number';

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeNumber', 'received', '') +
          '\n\n' +
          'Expected value to not be a number received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeNumber', 'received', '') +
          '\n\n' +
          'Expected value to be a number received:\n' +
          `  ${printReceived(actual)}`,
  };
}
