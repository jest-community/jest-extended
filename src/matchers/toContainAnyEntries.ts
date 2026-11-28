import type { MatcherContext } from 'src/utils';
import { contains } from 'src/utils';

export function toContainAnyEntries<E = unknown>(
  this: MatcherContext,
  actual: unknown,
  expected: readonly (readonly [keyof E, E[keyof E]])[],
) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  let pass = false;
  if (typeof actual === 'object' && actual !== null && !Array.isArray(actual)) {
    const entries = Object.entries(actual as Record<string, unknown>);
    pass = expected.some(entry => contains((a, b) => this.equals(a, b, this.customTesters), entries, entry));
  }

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAnyEntries') +
          '\n\n' +
          'Expected object to not contain any of the provided entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAnyEntries') +
          '\n\n' +
          'Expected object to contain any of the provided entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
