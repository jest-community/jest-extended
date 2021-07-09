import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeInteger', 'received', '') +
  '\n\n' +
  'Expected value to not be an integer received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeInteger', 'received', '') +
  '\n\n' +
  'Expected value to be an integer received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeInteger: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
