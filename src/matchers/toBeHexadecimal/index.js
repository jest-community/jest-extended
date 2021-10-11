import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeHexadecimal', 'received', '') +
  '\n\n' +
  'Expected value to not be a hexadecimal, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeHexadecimal', 'received', '') +
  '\n\n' +
  'Expected value to be a hexadecimal, received:\n' +
  `  ${printReceived(received)}`;

export function toBeHexadecimal(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
