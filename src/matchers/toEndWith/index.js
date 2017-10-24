import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (suffix, string) => () =>
  matcherHint('.not.toEndWith') +
  '\n\n' +
  'Expected string to not end with:\n' +
  `  ${printExpected(suffix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

const failMessage = (suffix, string) => () =>
  matcherHint('.toEndWith') +
  '\n\n' +
  'Expected string to end with:\n' +
  `  ${printExpected(suffix)}\n` +
  'Received:\n' +
  `  ${printReceived(string)}`;

export default {
  toEndWith: (string, suffix) => {
    const pass = predicate(suffix, string);
    if (pass) {
      return { pass: true, message: passMessage(suffix, string) };
    }

    return { pass: false, message: failMessage(suffix, string) };
  }
};
