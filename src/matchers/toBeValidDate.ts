import type { MatcherContext } from 'expect';
export function toBeValidDate(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = actual instanceof Date && !isNaN(actual.getTime());

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeValidDate', 'received', '') +
          '\n\n' +
          'Expected value to not be a valid date received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeValidDate', 'received', '') +
          '\n\n' +
          'Expected value to be a valid date received:\n' +
          `  ${printReceived(actual)}`,
  };
}
