import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toContainValue') +
  '\n\n' +
  'Expected object to not contain value:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint('.toContainValue') +
  '\n\n' +
  'Expected object to contain value:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export default {
  toContainValue: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }

    return { pass: false, message: failMessage(actual, expected) };
  }
};
