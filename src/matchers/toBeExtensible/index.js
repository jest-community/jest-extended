import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = received => () => {
  return (
    matcherHint('.not.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to not be extensible received:\n' +
    `  ${printExpected(received)}\n`
  );
};

const failMessage = received => () => {
  return (
    matcherHint('.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to be extensible received:\n' +
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
