import { contains } from '../utils';

export function toContainValue(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const values = Object.keys(actual).map(k => actual[k]);
  const pass = contains((a, b) => this.equals(a, b, this.customTesters), values, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainValue') +
          '\n\n' +
          'Expected object to not contain value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainValue') +
          '\n\n' +
          'Expected object to contain value:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
