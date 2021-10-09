import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeFunction', 'received', '') +
  '\n\n' +
  'Expected value to not be a function, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeFunction', 'received', '') +
  '\n\n' +
  'Expected to receive a function, received:\n' +
  `  ${printReceived(received)}`;

export function toBeFunction(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
