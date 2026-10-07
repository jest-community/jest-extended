import type { MatcherContext } from 'expect';
export function toBeAfterOrEqualTo(this: MatcherContext, actual: unknown, expected: Date) {
  const { printReceived, matcherHint } = this.utils;

  const pass = actual instanceof Date && actual >= expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeAfterOrEqualTo', 'received', '') +
          '\n\n' +
          `Expected date to be after or equal to ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeAfterOrEqualTo', 'received', '') +
          '\n\n' +
          `Expected date to be after or equal to ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
