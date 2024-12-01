import { containsEntry } from '../utils';

export function toContainAllEntries(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass =
    actual.hasOwnProperty &&
    expected.length == Object.keys(actual).length &&
    expected.every(entry => containsEntry((a, b) => this.equals(a, b, this.customTesters), actual, entry));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toContainAllEntries') +
          '\n\n' +
          'Expected object to not only contain all of the given entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`
        : matcherHint('.toContainAllEntries') +
          '\n\n' +
          'Expected object to only contain all of the given entries:\n' +
          `  ${printExpected(expected)}\n` +
          'Received:\n' +
          `  ${printReceived(actual)}`,
  };
}
