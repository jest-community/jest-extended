import { contains } from '../utils';

export function toContainValues(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const values = Object.keys(actual).map(k => actual[k]);
  const pass = expected.every(value => contains((a, b) => this.equals(a, b, this.customTesters), values, value));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainValues') +
          '\n\n' +
          'Expected object to not contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainValues') +
          '\n\n' +
          'Expected object to contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
