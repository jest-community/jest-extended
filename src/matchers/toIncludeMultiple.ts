import { getType } from 'jest-get-type';

export function toIncludeMultiple(actual: unknown, expected: readonly string[]) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error getType provides the type check
  const pass = getType(actual) === 'string' && expected.every(value => actual.includes(value));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeMultiple') +
          '\n\n' +
          'Expected string to not contain all substrings: \n' +
          `  ${printExpected(expected)}\n` +
          'Received: \n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeMultiple') +
          '\n\n' +
          'Expected string to contain all substrings: \n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
