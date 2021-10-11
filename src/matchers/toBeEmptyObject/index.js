import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeEmptyObject', 'received', '') +
  '\n\n' +
  'Expected value to not be an empty object, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeEmptyObject', 'received', '') +
  '\n\n' +
  'Expected value to be an empty object, received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeEmptyObject: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  },
};
