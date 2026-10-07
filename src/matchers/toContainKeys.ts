import type { MatcherContext } from 'expect';
export function toContainKeys<E = unknown>(
  this: MatcherContext,
  actual: unknown,
  expected: readonly (keyof E | string)[],
) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = expected.every(key => actual != null && Object.hasOwn(actual as object, key));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainKeys') +
          '\n\n' +
          'Expected object to not contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainKeys') +
          '\n\n' +
          'Expected object to contain all keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
