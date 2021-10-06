import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

const passMessage = (received, expected) => () =>
  matcherHint('.not.toSatisfy', 'received', '') +
  '\n\n' +
  'Expected value to not satisfy:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

const failMessage = (received, expected) => () =>
  matcherHint('.toSatisfy', 'received', '') +
  '\n\n' +
  'Expected value to satisfy:\n' +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

export default {
  toSatisfy: (actual, predicate) => {
    const pass = predicate(actual);
    if (pass) {
      return { pass: true, message: passMessage(actual, predicate) };
    }

    return { pass: false, message: failMessage(actual, predicate) };
  },
};
