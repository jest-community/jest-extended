import { getType } from 'jest-get-type';

export function toStartWith(actual: unknown, expected: string) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  // @ts-expect-error getType provides the type check
  const pass = getType(actual) === 'string' && actual.startsWith(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toStartWith') +
          '\n\n' +
          'Expected string to not start with:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toStartWith') +
          '\n\n' +
          'Expected string to start with:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
