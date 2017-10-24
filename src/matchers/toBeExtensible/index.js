import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () => {
  return (
    matcherHint('.not.toBeExtensible', 'recieved', '') +
    '\n\n' +
    'Expected values to not be extensible (false) recieved:\n' +
    `  ${printExpected(received)}\n`
  );
};

const failMessage = received => () => {
  return (
    matcherHint('.toBeExtensible', 'recieved', '') +
    '\n\n' +
    'Expected values to be extensible (true):\n' +
    `  ${printExpected(true)}\n` +
    'Received:\n' +
    `  ${printReceived(received)}`
  );
};

export default {
  toBeExtensible(expected) {
    const pass = predicate(expected);
    return {
      pass,
      message: pass ? passMessage(expected) : failMessage(expected)
    };
  }
};
