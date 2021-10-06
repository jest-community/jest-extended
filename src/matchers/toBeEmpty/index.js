import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeEmpty', 'received', '') +
  '\n\n' +
  'Expected value to not be empty received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeEmpty', 'received', '') +
  '\n\n' +
  'Expected value to be empty received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeEmpty: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  },
};
