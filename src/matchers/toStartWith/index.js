import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (prefix, string) => () =>
  matcherHint('.not.toStartWith') +
  '\n\n' +
  'Expected string to not start with:\n' +
  `  ${printExpected(prefix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

const failMessage = (prefix, string) => () =>
  matcherHint('.toStartWith') +
  '\n\n' +
  'Expected string to start with:\n' +
  `  ${printExpected(prefix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

export default {
  toStartWith: (string, prefix) => {
    const pass = predicate(prefix, string);
    if (pass) {
      return { pass: true, message: passMessage(prefix, string) };
    }

    return { pass: false, message: failMessage(prefix, string) };
  }
};
