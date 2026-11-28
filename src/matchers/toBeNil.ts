import type { MatcherContext } from 'src/utils';

export function toBeNil(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = actual === undefined || actual === null;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeNil', 'received', '') +
          '\n\n' +
          'Expected value not to be null or undefined, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeNil', 'received', '') +
          '\n\n' +
          'Expected value to be null or undefined, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
