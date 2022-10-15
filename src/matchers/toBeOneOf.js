import { contains } from '../utils';

export function toBeOneOf(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeOneOf') +
    '\n\n' +
    'Expected value to not be in list:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeOneOf') +
    '\n\n' +
    'Expected value to be in list:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = contains(this.equals, expected, actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
