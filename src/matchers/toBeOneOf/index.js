import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (item, list) => () =>
  matcherHint('.not.toBeOneOf', 'item', 'list') +
  '\n\n' +
  'Expected value to not be in list:\n' +
  `  ${printExpected(list)}\n` +
  'Received:\n' +
  `  ${printReceived(item)}`;

const failMessage = (item, list) => () =>
  matcherHint('.toBeOneOf', 'item', 'list') +
  '\n\n' +
  'Expected value to be in list:\n' +
  `  ${printExpected(list)}\n` +
  'Received:\n' +
  `  ${printReceived(item)}`;

export default {
  toBeOneOf: (item, list) => {
    const pass = predicate(item, list);
    if (pass) {
      return { pass: true, message: passMessage(item, list) };
    }

    return { pass: false, message: failMessage(item, list) };
  }
};
