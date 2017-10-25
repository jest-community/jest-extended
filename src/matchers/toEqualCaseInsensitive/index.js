import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import predicate from './predicate';

const passMessage = (received, expected) => () => {
  return (
    matcherHint('.not.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to not be equal while ignoring case (using ===):\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(received)}`
  );
};

const failMessage = (received, expected) => () => {
  return (
    matcherHint('.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to be equal while ignoring case (using ===):\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(received)}`
  );
};

export default {
  toEqualCaseInsensitive(received, expected) {
    const pass = predicate(received, expected);

    return {
      pass,
      message: pass ? passMessage(received, expected) : failMessage(received, expected),
      actual: received
    };
  }
};
