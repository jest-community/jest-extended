import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeEmpty', 'received', '') +
  '\n\n' +
  'Expected value not to be of empty, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeEmpty', 'received', '') +
  '\n\n' +
  'Expected value to be empty, received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeEmpty: received => {
    const pass = predicate(received);
    if (pass) {
      return { pass: true, message: passMessage(received) };
    }

    return { pass: false, message: failMessage(received) };
  }
};
