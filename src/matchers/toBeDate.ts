import type { MatcherContext } from 'expect';
export function toBeDate(this: MatcherContext, actual: unknown) {
  const { matcherHint, printReceived } = this.utils;

  const pass = actual instanceof Date && !isNaN(actual.getTime());

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeDate', 'received', '') +
          '\n\n' +
          'Expected value to not be a date received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeDate', 'received', '') +
          '\n\n' +
          'Expected value to be a date received:\n' +
          `  ${printReceived(actual)}`,
  };
}
