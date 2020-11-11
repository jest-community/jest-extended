import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (valueObj, keysArray) => () =>
  matcherHint('.not.toContainKeysWithinPercent') +
  '\n\n' +
  "Expected object to not contain all keys or the keys' values to not be within x percent of target:\n" +
  `  ${printExpected(keysArray)}\n` +
  'Received:\n' +
  `  ${printReceived(valueObj)}`;

const failMessage = (valueObj, keysArray) => () =>
  matcherHint('.toContainKeysWithinPercent') +
  '\n\n' +
  "Expected object to contain all keys and the keys' values to be within x percent of target:\n" +
  `  ${printExpected(keysArray)}\n` +
  'Received:\n' +
  `  ${printReceived(valueObj)}`;

export default {
  toContainKeysWithinPercent: (valueObj, keysArray) => {
    const pass = predicate(valueObj, keysArray);
    if (pass) {
      return { pass: true, message: passMessage(valueObj, keysArray) };
    }

    return { pass: false, message: failMessage(valueObj, keysArray) };
  }
};
