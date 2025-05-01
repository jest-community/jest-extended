import { getType } from 'jest-get-type';

export function toIncludeRepeated(actual: unknown, expected: string, occurrences: number) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error getType provides the type check
  const pass = getType(actual) === 'string' && (actual.match(new RegExp(expected, 'g')) || []).length === occurrences;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toIncludeRepeated') +
          '\n\n' +
          `Expected string to not include repeated ${occurrences} times:\n` +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toIncludeRepeated') +
          '\n\n' +
          `Expected string to include repeated ${occurrences} times:\n` +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
