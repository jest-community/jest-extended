import type { MatcherContext } from 'src/utils';
import { contains } from 'src/utils';

export function toContainValue<E = unknown>(this: MatcherContext, actual: unknown, expected: E) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const values = Object.values(actual as Record<string, unknown>);
    pass = contains((a, b) => this.equals(a, b, equalityTesters), values, expected);
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
