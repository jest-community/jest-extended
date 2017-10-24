import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (prefix, string) => () =>
  matcherHint('.not.toEndWith') +
  '\n\n' +
  'Expected string to not end with:\n' +
  `  ${printExpected(prefix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

const failMessage = (prefix, string) => () =>
  matcherHint('.toEndWith') +
  '\n\n' +
  'Expected string to end with:\n' +
  `  ${printExpected(prefix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

export default {
  toEndWith: (string, prefix) => {
    const pass = predicate(prefix, string);
    if (pass) {
      return { pass: true, message: passMessage(prefix, string) };
    }

    return { pass: false, message: failMessage(prefix, string) };
  }
};
