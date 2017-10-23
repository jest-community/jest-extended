import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeArray', 'received', '') +
  '\n\n' +
  'Expected value to not be a string received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeArray', 'received', '') +
  '\n\n' +
  'Expected value to be a string:\n' +
  `  ${printExpected(true)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeArray: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
