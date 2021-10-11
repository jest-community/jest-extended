import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeDate', 'received', '') +
  '\n\n' +
  'Expected value to not be a date received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeDate', 'received', '') +
  '\n\n' +
  'Expected value to be a date received:\n' +
  `  ${printReceived(received)}`;

export function toBeDate(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
