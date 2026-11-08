import type { MatcherContext } from 'expect';
export function toBeObject(this: MatcherContext, actual: unknown) {
  const { printReceived, matcherHint } = this.utils;

  const pass = typeof actual === 'object' && actual !== null && !Array.isArray(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeObject', 'received', '') +
          '\n\n' +
          'Expected value to not be an object, received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeObject', 'received', '') +
          '\n\n' +
          'Expected value to be an object, received:\n' +
          `  ${printReceived(actual)}`,
  };
}
