import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (number, target, percent) => () =>
  matcherHint('.not.toBeWithinPercent') +
  '\n\n' +
  'Expected number to not be within percent of target:\n' +
  `  target: ${printExpected(target)}  percent: ${printExpected(percent)}%\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;

const failMessage = (number, target, percent) => () =>
  matcherHint('.toBeWithinPercent') +
  '\n\n' +
  'Expected number to be within percent of target:\n' +
  `  target: ${printExpected(target)}  percent: ${printExpected(percent)}%\n` +
  'Received:\n' +
  `  ${printReceived(number)}`;

export default {
  toBeWithinPercent: (number, target, percent) => {
    const pass = predicate(number, target, percent);
    if (pass) {
      return { pass: true, message: passMessage(number, target, percent) };
    }

    return { pass: false, message: failMessage(number, target, percent) };
  }
};
