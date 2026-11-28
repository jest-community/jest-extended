import type { MatcherContext } from 'src/utils';
import { contains } from 'src/utils';

export function toContainAnyValues<E = unknown>(this: MatcherContext, actual: unknown, expected: readonly E[]) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const objectValues = Object.values(actual as Record<string, unknown>);
    pass = expected.some(value => contains((a, b) => this.equals(a, b, equalityTesters), objectValues, value));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAnyValues') +
          '\n\n' +
          'Expected object to not contain any of the following values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAnyValues') +
          '\n\n' +
          'Expected object to contain any of the following values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
