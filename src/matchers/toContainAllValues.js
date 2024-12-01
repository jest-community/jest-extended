import { contains } from '../utils';

export function toContainAllValues(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const values = Object.keys(actual).map(k => actual[k]);
  const pass =
    values.length === expected.length &&
    values.every(objectValue => contains((a, b) => this.equals(a, b, this.customTesters), expected, objectValue));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllValues') +
          '\n\n' +
          'Expected object to not contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAllValues') +
          '\n\n' +
          'Expected object to contain all values:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
