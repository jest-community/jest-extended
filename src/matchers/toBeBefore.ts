import type { MatcherContext } from 'expect';
export function toBeBefore(this: MatcherContext, actual: unknown, expected: Date) {
  const { matcherHint, printReceived } = this.utils;

  const pass = actual instanceof Date && actual < expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeBefore', 'received', '') +
          '\n\n' +
          `Expected date to be before ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeBefore', 'received', '') +
          '\n\n' +
          `Expected date to be before ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
