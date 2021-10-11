import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (received, after) => () =>
  matcherHint('.not.toBeAfter', 'received', '') +
  '\n\n' +
  `Expected date to be after ${printReceived(after)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received, after) => () =>
  matcherHint('.toBeAfter', 'received', '') +
  '\n\n' +
  `Expected date to be after ${printReceived(after)} but received:\n` +
  `  ${printReceived(received)}`;

export default {
  toBeAfter: (date, after) => {
    const pass = predicate(date, after);
    if (pass) {
      return { pass: true, message: passMessage(date, after) };
    }

    return { pass: false, message: failMessage(date, after) };
  },
};
