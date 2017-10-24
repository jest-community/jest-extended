import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeBoolean', 'received', '') +
  '\n\n' +
  'Expected value to not be a boolean value, received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeBoolean', 'received', '') +
  '\n\n' +
  'Expected value to be a boolean:\n';

export default {
  toBeTrue: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
