import { contains } from '../utils';

export function toContainAnyEntries(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainAnyEntries') +
    '\n\n' +
    'Expected object to not contain any of the provided entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainAnyEntries') +
    '\n\n' +
    'Expected object to contain any of the provided entries:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const entries = Object.keys(actual).map(k => [k, actual[k]]);
  const pass = expected.some(entry => contains(this.equals, entries, entry));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
