import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeOdd', 'received', '') +
  '\n\n' +
  'Expected value to not be odd received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeOdd', 'received', '') +
  '\n\n' +
  'Expected value to be odd:\n' +
  `  ${printExpected(true)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeOdd: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
