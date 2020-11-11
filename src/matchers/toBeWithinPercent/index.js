import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (number, mid, percent) => () =>
  matcherHint('.not.toBeWithin') +
  '\n\n' +
  'Expected number to not be within percent of mid:\n' +
  `  mid: ${printExpected(mid)}  percent: ${printExpected(percent)}%\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;

const failMessage = (number, mid, percent) => () =>
  matcherHint('.toBeWithin') +
  '\n\n' +
  'Expected number to be within percent of mid:\n' +
  `  mid: ${printExpected(mid)}  percent: ${printExpected(percent)}%\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;

export default {
  toBeWithinPercent: (number, mid, percent) => {
    const pass = predicate(number, mid, percent);
    if (pass) {
      return { pass: true, message: passMessage(number, mid, percent) };
    }

    return { pass: false, message: failMessage(number, mid, percent) };
  }
};
