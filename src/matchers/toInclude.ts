import { getType } from 'jest-get-type';

export function toInclude(actual: unknown, expected: string) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error getType provides the type check
  const pass = getType(actual) === 'string' && actual.includes(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toInclude') +
          '\n\n' +
          'Expected string to not include:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toInclude') +
          '\n\n' +
          'Expected string to include:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
