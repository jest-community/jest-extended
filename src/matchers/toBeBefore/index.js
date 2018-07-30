import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (received, before) => () =>
  matcherHint('.not.toBeBefore', 'received', '') +
  '\n\n' +
  `Expected date to be before ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (received, before) => () =>
  matcherHint('.toBeBefore', 'received', '') +
  '\n\n' +
  `Expected date to be before ${printReceived(before)} but received:\n` +
  `  ${printReceived(received)}`;

export default {
  toBeBefore: (date, before) => {
    const pass = predicate(date, before);
    if (pass) {
      return { pass: true, message: passMessage(date, before) };
    }

    return { pass: false, message: failMessage(date, before) };
  }
};
