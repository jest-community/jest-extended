import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toContainEntries') +
  '\n\n' +
  'Expected object to not contain all of the given entries:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint('.toContainEntries') +
  '\n\n' +
  'Expected object to contain all of the given entries:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export default {
  toContainEntries: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }

    return { pass: false, message: failMessage(actual, expected) };
  },
};
