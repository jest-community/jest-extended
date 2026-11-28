import type { MatcherContext } from 'src/utils';
import { contains } from 'src/utils';

export function toIncludeAnyMembers<E = unknown>(this: MatcherContext, actual: unknown, expected: readonly E[] | E) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const equalityTesters = [...(this.customTesters ?? []), this.utils.iterableEquality];

  const pass =
    Array.isArray(actual) &&
    Array.isArray(expected) &&
    expected.some(member => contains((a, b) => this.equals(a, b, equalityTesters), actual, member));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeAnyMembers') +
          '\n\n' +
          'Expected list to not include any of the following members:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeAnyMembers') +
          '\n\n' +
          'Expected list to include any of the following members:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
