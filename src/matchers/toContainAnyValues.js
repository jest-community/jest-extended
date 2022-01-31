import { contains } from '../utils';

export function toContainAnyValues(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainAnyValues') +
    '\n\n' +
    'Expected object to not contain any of the following values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainAnyValues') +
    '\n\n' +
    'Expected object to contain any of the following values:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const objectValues = Object.keys(actual).map(k => actual[k]);
  const pass = expected.some(value => contains(this.equals, objectValues, value));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
