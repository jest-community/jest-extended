import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected, occurrences) => () =>
  matcherHint('.not.toIncludeRepeated') +
  '\n\n' +
  `Expected string to not include repeated ${occurrences} times:\n` +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected, occurrences) => () =>
  matcherHint('.toIncludeRepeated') +
  '\n\n' +
  `Expected string to include repeated ${occurrences} times:\n` +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(actual)}`;

export default {
  toIncludeRepeated: (actual, expected, occurrences) => {
    const pass = predicate(actual, expected, occurrences);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected, occurrences) };
    }

    return { pass: false, message: failMessage(actual, expected, occurrences) };
  }
};
