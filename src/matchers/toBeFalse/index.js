import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeFalse', 'received', '') +
  '\n\n' +
  'Expected value to not be false received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeFalse', 'received', '') +
  '\n\n' +
  'Expected value to be false:\n' +
  `  ${printExpected(false)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

export function toBeFalse(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
