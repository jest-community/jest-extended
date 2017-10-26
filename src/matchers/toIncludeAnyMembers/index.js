import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toIncludeAnyMembers') +
  '\n\n' +
  'Expected list to not include any of the following members:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint('.toIncludeAnyMembers') +
  '\n\n' +
  'Expected list to include any of the following members:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export default {
  toIncludeAnyMembers: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }

    return { pass: false, message: failMessage(actual, expected) };
  }
};
