import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import diff from 'jest-diff';
import predicate from './predicate';

const passMessage = (received, expected) => () => {
  return (
    matcherHint('.not.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to not be equal (using ===):\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(received)}`
  );
};

const failMessage = (received, expected) => () => {
  const diffString = diff(expected, received, {
    expand: this.expand
  });

  return (
    matcherHint('.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to be equal (using ===):\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(received)}` +
    (diffString ? `\n\nDifference:\n\n${diffString}` : '')
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
