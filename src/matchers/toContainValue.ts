import type { MatcherContext } from 'src/utils';
import { contains } from 'src/utils';

export function toContainValue<E = unknown>(this: MatcherContext, actual: unknown, expected: E) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (typeof actual === 'object' && actual !== null) {
    const values = Object.values(actual as Record<string, unknown>);
    pass = contains((a, b) => this.equals(a, b, this.customTesters), values, expected);
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainValue') +
          '\n\n' +
          'Expected object to not contain value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainValue') +
          '\n\n' +
          'Expected object to contain value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
