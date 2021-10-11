import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeNil', 'received', '') +
  '\n\n' +
  'Expected value not to be null or undefined, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeNil', 'received', '') +
  '\n\n' +
  'Expected value to be null or undefined, received:\n' +
  `  ${printReceived(received)}`;

export function toBeNil(received) {
  const pass = predicate(received);
  if (pass) {
    return { pass: true, message: passMessage(received) };
  }

  return { pass: false, message: failMessage(received) };
}
