import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (expected, received, name) => () =>
  matcherHint('.not.toSatisfy', 'received', '') +
  '\n\n' +
  `Expected value to not satisfy ${name} received:\n` +
  `  ${printReceived(received)}`;

const failMessage = (expected, received, name) => () =>
  matcherHint('.toSatisfy', 'received', '') +
  '\n\n' +
  `Expected value to satisfy ${name}:\n` +
  `  ${printExpected(expected)}\n` +
  'Received:\n' +
  `  ${printReceived(received)}`;

export default {
  toSatisfy: (expected, fn) => {
    const received = fn(expected);
    const pass = predicate(received);
    if (pass) {
      return { pass: true, message: passMessage(expected, received, fn.name) };
    }

    return { pass: false, message: failMessage(expected, received, fn.name) };
  }
};
