import { containsEntry } from '../utils';

export function toContainEntries(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainEntries') +
    '\n\n' +
    'Expected object to not contain all of the given entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainEntries') +
    '\n\n' +
    'Expected object to contain all of the given entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = expected.every(entry => containsEntry(this.equals, actual, entry));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
