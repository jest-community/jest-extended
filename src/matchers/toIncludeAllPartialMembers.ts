import { containsEntry } from 'src/utils';

export function toIncludeAllPartialMembers<E = unknown>(actual: unknown, expected: readonly E[] | E) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    Array.isArray(actual) &&
    Array.isArray(expected) &&
    expected.every(partial => {
      const entries = Object.entries(partial);
      return actual.some(value =>
        entries.every(entry =>
          // @ts-expect-error OK to have implicit any for this.equals
          containsEntry((a, b) => this.equals(a, b, this.customTesters), value, entry),
        ),
      );
    });

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeAllPartialMembers') +
          '\n\n' +
          'Expected list to not have all of the following partial members:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeAllPartialMembers') +
          '\n\n' +
          'Expected list to have all of the following partial members:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
