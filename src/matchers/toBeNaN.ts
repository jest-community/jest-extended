import type { MatcherContext } from 'expect';

export function toBeNaN(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = Number.isNaN(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeNaN', 'received', '') +
          '\n\n' +
          'Expected value to not be NaN received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeNaN', 'received', '') +
          '\n\n' +
          'Expected value to be NaN received:\n' +
          `  ${printReceived(actual)}`,
  };
}
