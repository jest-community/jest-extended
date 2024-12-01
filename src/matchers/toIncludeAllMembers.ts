import { contains } from 'src/utils';

export function toIncludeAllMembers<E = unknown>(actual: unknown[], expected: readonly E[] | E) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    Array.isArray(actual) &&
    Array.isArray(expected) &&
    // @ts-expect-error OK to have implicit any for this.equals
    expected.every(val => contains((a: unknown, b: unknown) => this.equals(a, b, this.customTesters), actual, val));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeAllMembers') +
          '\n\n' +
          'Expected list to not have all of the following members:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeAllMembers') +
          '\n\n' +
          'Expected list to have all of the following members:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
