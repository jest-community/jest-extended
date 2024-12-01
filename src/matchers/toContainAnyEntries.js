import { contains } from '../utils';

export function toContainAnyEntries(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const entries = Object.keys(actual).map(k => [k, actual[k]]);
  const pass = expected.some(entry => contains((a, b) => this.equals(a, b, this.customTesters), entries, entry));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAnyEntries') +
          '\n\n' +
          'Expected object to not contain any of the provided entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAnyEntries') +
          '\n\n' +
          'Expected object to contain any of the provided entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
