import { contains } from '../utils';

export function toBeOneOf(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = contains((a, b) => this.equals(a, b, this.customTesters), expected, actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toBeOneOf') +
          '\n\n' +
          'Expected value to not be in list:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toBeOneOf') +
          '\n\n' +
          'Expected value to be in list:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
