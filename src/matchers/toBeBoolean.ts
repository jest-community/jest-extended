import type { MatcherContext } from 'expect';
export function toBeBoolean(this: MatcherContext, actual: unknown) {
  const { matcherHint, printReceived } = this.utils;

  const pass = typeof actual === 'boolean' || actual instanceof Boolean;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeBoolean', 'received', '') +
          '\n\n' +
          'Expected value to not be of type boolean, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeBoolean', 'received', '') +
          '\n\n' +
          'Expected value to be of type boolean, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
