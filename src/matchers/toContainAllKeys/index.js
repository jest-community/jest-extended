import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toContainAllKeys') +
  '\n\n' +
  'Expected object to not contain all keys:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(Object.keys(actual))}`;

const failMessage = (actual, expected) => () =>
  matcherHint('.toContainAllKeys') +
  '\n\n' +
  'Expected object to contain all keys:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(Object.keys(actual))}`;

export function toContainAllKeys(actual, expected) {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(actual, expected) };
  }

  return { pass: false, message: failMessage(actual, expected) };
}
