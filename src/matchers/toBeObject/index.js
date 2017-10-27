import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeObject', 'received', '') +
  '\n\n' +
  'Expected value to not be an object, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeObject', 'received', '') +
  '\n\n' +
  'Expected value to be an object, received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeObject: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
