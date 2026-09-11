import type { MatcherContext } from 'expect';
export function toIncludeRepeated(this: MatcherContext, actual: unknown, expected: string, occurrences: number) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = typeof actual === 'string' && (actual.match(new RegExp(expected, 'g')) || []).length === occurrences;

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
