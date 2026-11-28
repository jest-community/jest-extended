import type { MatcherContext } from 'src/utils';
import { containsEntry } from '../utils';

export function toIncludeSamePartialMembers<E = unknown>(this: MatcherContext, actual: unknown, expected: E) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = predicate((a, b) => this.equals(a, b, this.customTesters), actual, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeSamePartialMembers') +
          '\n\n' +
          'Expected list to not exactly match the partial members of:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeSamePartialMembers') +
          '\n\n' +
          'Expected list to have the following partial members and no more:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}

const predicate = (equals: (a: unknown, b: unknown) => boolean, actual: unknown, expected: any) => {
  if (!Array.isArray(actual) || !Array.isArray(expected) || actual.length !== expected.length) {
    return false;
  }

  const remaining = expected.reduce((remaining, expectedPartial) => {
    if (remaining === null) {
      return remaining;
    }

    const index = remaining.findIndex((actualValue: any) =>
      Object.entries(expectedPartial).every(entry => containsEntry(equals, actualValue, entry)),
    );

    if (index === -1) {
      return null;
    }

    return remaining.slice(0, index).concat(remaining.slice(index + 1));
  }, actual);

  return !!remaining && remaining.length === 0;
};
