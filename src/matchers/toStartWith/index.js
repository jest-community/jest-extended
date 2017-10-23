import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (prefix, string) => () =>
  matcherHint('.not.toStartWith', 'received', '') +
  '\n\n' +
  'Expected string to not start with received:\n' +
  `  ${printReceived(prefix)}`;

const failMessage = (prefix, string) => () =>
  matcherHint('.toStartWith', 'received', '') +
  '\n\n' +
  'Expected string to start with:\n' +
  `  ${printExpected(prefix)}\n` +
  'String started with:\n' +
  `  ${printReceived(string.substring(0, prefix.length))}`;

export default {
  toStartWith: (string, prefix) => {
    const pass = predicate(prefix, string);
    if (pass) {
      return { pass: true, message: passMessage(prefix, string) };
    }

    return { pass: false, message: failMessage(prefix, string) };
  }
};
