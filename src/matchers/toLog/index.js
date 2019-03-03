import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const calledWith = actual =>
  actual ? 'But it was called with:\n' + `  ${printReceived(actual)}` : 'But it was not called';

const passMessage = (actual, expected, consoleMethod) => () =>
  matcherHint('.not.toLog') +
  '\n\n' +
  `Expected console.${consoleMethod} not to have been called with:\n` +
  `  ${printExpected(expected)}\n` +
  calledWith(actual);

const failMessage = (actual, expected, consoleMethod) => () =>
  matcherHint('.toLog') +
  '\n\n' +
  `Expected console.${consoleMethod} to have been called with:\n` +
  `  ${printExpected(expected)}\n` +
  calledWith(actual);

export default {
  toLog: (fn, expected, consoleMethod = 'log') => {
    const { actual, pass } = predicate(fn, expected, consoleMethod);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected, consoleMethod) };
    }
    return { pass: false, message: failMessage(actual, expected, consoleMethod) };
  }
};
