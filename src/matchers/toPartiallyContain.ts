import type { MatcherContext } from 'expect';
import { containsEntry } from 'src/utils';

export function toPartiallyContain<E = unknown>(this: MatcherContext, actual: unknown, expected: E) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    Array.isArray(actual) &&
    Array.isArray([expected]) &&
    [expected].every(partial =>
      actual.some(
        value =>
          typeof partial === 'object' &&
          partial != null &&
          Object.entries(partial).every(entry =>
            // @ts-expect-error OK to have implicit any for this.equals
            containsEntry((a, b) => this.equals(a, b, this.customTesters), value, entry),
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
