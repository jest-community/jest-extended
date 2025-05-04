import { contains } from 'src/utils';

export function toIncludeAnyMembers<E = unknown>(actual: unknown, expected: readonly E[] | E) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    // @ts-expect-error OK to have implicit any for this.equals
    Array.isArray(actual) && Array.isArray(expected) && expected.some(member => contains(this.equals, actual, member));

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
