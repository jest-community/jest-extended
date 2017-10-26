import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBePositive', 'received', '') +
  '\n\n' +
  'Expected value to not be positive received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBePositive', 'received', '') +
  '\n\n' +
  'Expected value to be positive received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBePositive: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
