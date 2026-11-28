import type { MatcherContext } from 'src/utils';
import { contains } from 'src/utils';

export function toContainAllValues<E = unknown>(this: MatcherContext, actual: unknown, expected: readonly E[]) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const values = Object.values(actual as Record<string, unknown>);
    pass =
      values.length === expected.length &&
      values.every(objectValue => contains((a, b) => this.equals(a, b, equalityTesters), expected, objectValue));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllValues') +
          '\n\n' +
          'Expected object to not contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAllValues') +
          '\n\n' +
          'Expected object to contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
