import type { MatcherContext } from 'expect';
export function toContainAnyKeys<E = unknown>(
  this: MatcherContext,
  actual: unknown,
  expected: readonly (keyof E | string)[],
) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = expected.some(key => actual != null && Object.hasOwn(actual as object, key));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAnyKeys') +
          '\n\n' +
          'Expected object not to contain any of the following keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAnyKeys') +
          '\n\n' +
          'Expected object to contain any of the following keys:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
