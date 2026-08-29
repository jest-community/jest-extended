import type { MatcherContext } from 'expect';
export function toBeDateString(this: MatcherContext, actual: unknown) {
  const { matcherHint, printReceived } = this.utils;

  const pass = typeof actual === 'string' && !isNaN(Date.parse(actual));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeDateString', 'received', '') +
          '\n\n' +
          'Expected value to not be a date string received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeDateString', 'received', '') +
          '\n\n' +
          'Expected value to be a date string received:\n' +
          `  ${printReceived(actual)}`,
  };
}
