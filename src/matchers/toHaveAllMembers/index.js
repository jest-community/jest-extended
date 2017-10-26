import { matcherHint, printExpected, printRecieved } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toHaveAllMembers') +
  '\n\n' +
  'Expected collection to not have any members of:\n' +
  `  ${printExpected(expected)}\n` +
  'Recieved:\n' +
  `  ${printRecieved(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint('.toHaveAllMembers') +
  '\n\n' +
  'Expected collection to have all members of:\n' +
  `  ${printExpected(expected)}\n` +
  'Recieved:\n' +
  `  ${printRecieved(actual)}`;

export default {
  toHaveAllMembers: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }
    return { pass: false, message: failMessage(actual, expected) };
  }
};
