import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeString', 'received', '') +
  '\n\n' +
  'Expected value to not be of type string received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeString', 'received', '') +
  '\n\n' +
  'Expected value to be of type string:\n' +
  `  ${printExpected('type of string')}\n` +
  'Received:\n' +
  `  ${printReceived(typeof received)}`;

export default {
  toBeString: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
