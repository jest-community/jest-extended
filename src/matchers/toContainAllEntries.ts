import type { MatcherContext } from 'src/utils';
import { containsEntry } from 'src/utils';

export function toContainAllEntries<E = unknown>(
  this: MatcherContext,
  actual: unknown,
  expected: readonly (readonly [keyof E, E[keyof E]])[],
): {
  pass: boolean;
  message: () => string;
} {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    typeof actual === 'object' &&
    actual !== null &&
    !Array.isArray(actual) &&
    expected.length == Object.keys(actual as Record<string, unknown>).length &&
    expected.every(entry => containsEntry((a, b) => this.equals(a, b, this.customTesters), actual, entry));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllEntries') +
          '\n\n' +
          'Expected object to not only contain all of the given entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAllEntries') +
          '\n\n' +
          'Expected object to only contain all of the given entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
