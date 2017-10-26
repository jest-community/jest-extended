import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toInclude') +
  '\n\n' +
  'Expected string to not include:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint('.toInclude') +
  '\n\n' +
  'Expected string to include:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export default {
  toInclude: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }

    return { pass: false, message: failMessage(actual, expected) };
  }
};
