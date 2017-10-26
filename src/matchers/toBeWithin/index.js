import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (number, start, end) => () =>
  matcherHint('.not.toBeWithin') +
  '\n\n' +
  'Expected number to not be within start (inclusive) and end (exclusive):\n' +
  `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;

const failMessage = (number, start, end) => () =>
  matcherHint('.toBeWithin') +
  '\n\n' +
  'Expected number to be within start (inclusive) and end (exclusive):\n' +
  `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;

export default {
  toBeWithin: (number, start, end) => {
    const pass = predicate(number, start, end);
    if (pass) {
      return { pass: true, message: passMessage(number, start, end) };
    }

    return { pass: false, message: failMessage(number, start, end) };
  }
};
