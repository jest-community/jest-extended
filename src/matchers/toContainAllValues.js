import { contains } from '../utils';

export function toContainAllValues(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainAllValues') +
    '\n\n' +
    'Expected object to not contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainAllValues') +
    '\n\n' +
    'Expected object to contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const values = Object.keys(actual).map(k => actual[k]);
  const pass =
    values.length === expected.length && values.every(objectValue => contains(this.equals, expected, objectValue));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
