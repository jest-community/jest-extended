import type { MatcherContext } from 'expect';
export function toContainKey<E = unknown>(this: MatcherContext, actual: unknown, expected: keyof E | string) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    typeof actual === 'object' && actual !== null && !Array.isArray(actual) && Object.hasOwn(actual, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainKey') +
          '\n\n' +
          'Expected object to not contain key:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainKey') +
          '\n\n' +
          'Expected object to contain key:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
