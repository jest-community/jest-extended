import { contains } from '../utils';

export function toContainAllKeys(actual, expected) {
  const { printExpected, printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainAllKeys') +
    '\n\n' +
    'Expected object to not contain all keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(Object.keys(actual))}`;

  const failMessage =
    matcherHint('.toContainAllKeys') +
    '\n\n' +
    'Expected object to contain all keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(Object.keys(actual))}`;

  const objectKeys = Object.keys(actual);
  const pass = objectKeys.length === expected.length && expected.every(key => contains(this.equals, objectKeys, key));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
