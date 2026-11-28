import type { MatcherContext } from 'src/utils';
import { containsEntry } from 'src/utils';

export function toPartiallyContain<E = unknown>(this: MatcherContext, actual: unknown, expected: E) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  const pass =
    Array.isArray(actual) &&
    Array.isArray([expected]) &&
    [expected].every(partial =>
      actual.some(
        value =>
          typeof partial === 'object' &&
          partial != null &&
          Object.entries(partial).every(entry =>
            containsEntry((a, b) => this.equals(a, b, equalityTesters), value, entry),
          ),
      ),
    );

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toPartiallyContain') +
          '\n\n' +
          'Expected array not to partially contain:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toPartiallyContain') +
          '\n\n' +
          'Expected array to partially contain:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
