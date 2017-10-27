import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeNaN', 'received', '') +
  '\n\n' +
  'Expected value to be a number received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeNaN', 'received', '') +
  '\n\n' +
  'Expected value to not be a number received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeNaN: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
