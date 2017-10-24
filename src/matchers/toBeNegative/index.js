import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeNegative', 'received', '') +
  '\n\n' +
  'Expected value to not be a negative number received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeNegative', 'received', '') +
  '\n\n' +
  'Expected value to be a negative number received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeNegative: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
