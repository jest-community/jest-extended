import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () =>
  matcherHint('.not.toBeIso8601Strict', 'received', '') +
  '\n\n' +
  "Expected value to not be a string in the form 'YYYY-MM-DDThh:mm:ss.SSSZ', received:\n" +
  `  ${printReceived(received)}`;

const failMessage = received => () =>
  matcherHint('.toBeIso8601Strict', 'received', '') +
  '\n\n' +
  "Expected to receive a string in the form 'YYYY-MM-DDThh:mm:ss.SSSZ', received:\n" +
  `  ${printReceived(received)}`;

export default {
  toBeIso8601Strict: expected => {
    const pass = predicate(expected);
    if (pass) {
      return { pass: true, message: passMessage(expected) };
    }

    return { pass: false, message: failMessage(expected) };
  }
};
