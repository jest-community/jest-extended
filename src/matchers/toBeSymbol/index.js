import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeSymbol', 'received', '') +
  '\n\n' +
  'Expected value to not be a symbol, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeSymbol', 'received', '') +
  '\n\n' +
  'Expected to receive a symbol, received:\n' +
  `  ${printReceived(received)}`;

export function toBeSymbol(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
