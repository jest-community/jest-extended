import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeEven', 'received', '') +
  '\n\n' +
  'Expected value to not be an even number received:\n' +
  ` ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeEven', 'received', '') +
  '\n\n' +
  'Expected value to be an even number received:\n' +
  ` ${printReceived(received)}`;

export function toBeEven(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(expected) };
  }

  return { pass: false, message: failMessage(expected) };
}
