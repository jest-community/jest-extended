import { getType } from 'jest-get-type';

export function toContainKey<E = unknown>(actual: unknown, expected: keyof E | string) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    // @ts-expect-error getType provides the type check
    getType(actual) === 'object' && actual.hasOwnProperty && Object.prototype.hasOwnProperty.call(actual, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainKey') +
          '\n\n' +
          'Expected object to not contain key:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainKey') +
          '\n\n' +
          'Expected object to contain key:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
