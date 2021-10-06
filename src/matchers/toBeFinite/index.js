import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeFinite', 'received', '') +
  '\n\n' +
  'Expected value to not be finite received:\n' +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeFinite', 'received', '') +
  '\n\n' +
  'Expected value to be finite received:\n' +
  `  ${printReceived(received)}`;

export default {
  toBeFinite: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  },
};
