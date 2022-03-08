import { contains } from '../utils';

export function toContainValues(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainValues') +
    '\n\n' +
    'Expected object to not contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainValues') +
    '\n\n' +
    'Expected object to contain all values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const values = Object.keys(actual).map(k => actual[k]);
  const pass = expected.every(value => contains(this.equals, values, value));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
