import type { MatcherContext } from 'expect';
import { contains } from 'src/utils';

export function toContainValues<E = unknown>(this: MatcherContext, actual: unknown, expected: readonly E[]) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const values = Object.values(actual as Record<string, unknown>);
    // @ts-expect-error OK to have implicit any for this.equals
    pass = expected.every(value => contains((a, b) => this.equals(a, b, this.customTesters), values, value));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainValues') +
          '\n\n' +
          'Expected object to not contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainValues') +
          '\n\n' +
          'Expected object to contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
