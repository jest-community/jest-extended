import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeBoolean', 'received', '') +
  '\n\n' +
  'Expected value to not be of type boolean, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeBoolean', 'received', '') +
  '\n\n' +
  'Expected value to be of type boolean, received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeBoolean: received => {
    const pass = predicate(received);
    if (pass) {
      return { pass: true, message: passMessage(received) };
    }

    return { pass: false, message: failMessage(received) };
  },
};
