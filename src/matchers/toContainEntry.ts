import type { MatcherContext } from 'src/utils';
import { containsEntry } from 'src/utils';

export function toContainEntry<E = unknown>(
  this: MatcherContext,
  actual: unknown,
  expected: readonly [keyof E, E[keyof E]],
) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  const pass = containsEntry((a, b) => this.equals(a, b, equalityTesters), actual, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainEntry') +
          '\n\n' +
          'Expected object to not contain entry:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainEntry') +
          '\n\n' +
          'Expected object to contain entry:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
