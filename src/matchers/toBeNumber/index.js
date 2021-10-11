import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeNumber', 'received', '') +
  '\n\n' +
  'Expected value to not be a number received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeNumber', 'received', '') +
  '\n\n' +
  'Expected value to be a number received:\n' +
  `  ${printReceived(received)}`;

export function toBeNumber(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
