import type { MatcherContext } from 'src/utils';

export function toBeHexadecimal(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'string' && hexRegex.test(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeHexadecimal', 'received', '') +
          '\n\n' +
          'Expected value to not be a hexadecimal, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeHexadecimal', 'received', '') +
          '\n\n' +
          'Expected value to be a hexadecimal, received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const hexRegex = /^#(?:[a-f0-9]{3}|[a-f0-9]{6})$/i;
