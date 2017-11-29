import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected, times) => () =>
  matcherHint('.not.toIncludeRepeated') +
  '\n\n' +
  `Expected string to not contain the following substring repeated ${times} times: \n` +
  `  ${printExpected(expected)}\n` +
  'Received: \n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected, times) => () =>
  matcherHint('.toIncludeRepeated') +
  '\n\n' +
  `Expected string to contain following substring repeated ${times} times: \n` +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export default {
  toIncludeRepeated: (actual, expected, times) => {
    const pass = predicate(actual, expected, times);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected, times) };
    }

    return { pass: false, message: failMessage(actual, expected, times) };
  }
};
