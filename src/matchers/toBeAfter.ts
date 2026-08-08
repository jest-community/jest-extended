import type { MatcherContext } from 'expect';
export function toBeAfter(this: MatcherContext, actual: unknown, after: Date) {
  const { printReceived, matcherHint } = this.utils;

  const pass = actual instanceof Date && actual > after;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeAfter', 'received', '') +
          '\n\n' +
          `Expected date to be after ${printReceived(after)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeAfter', 'received', '') +
          '\n\n' +
          `Expected date to be after ${printReceived(after)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
