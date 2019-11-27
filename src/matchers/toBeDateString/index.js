import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeDateDateString', 'received', '') +
  '\n\n' +
  'Expected value to not be a date string received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeDateDateString', 'received', '') +
  '\n\n' +
  'Expected value to be a date string received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeDateString: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
