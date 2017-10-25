import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toContainAnyKeys') +
  '\n\n' +
  'Expected object not to contain any of the following keys:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint('.toContainValue') +
  '\n\n' +
  'Expected object to contain any of the following keys:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export default {
  toContainAnyKeys: (actual, expected) => {
    const pass = predicate(actual, expected);

    return {
      pass: pass,
      message: pass ? passMessage(actual, expected) : failMessage(actual, expected)
    };
  }
};
