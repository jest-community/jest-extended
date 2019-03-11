import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const calledWith = actual =>
  actual ? 'But it was called with:\n' + `  ${printReceived(actual)}` : 'But it was not called';

const passMessage = (actual, expected, hint, consoleMethod) => () =>
  matcherHint(hint) +
  '\n\n' +
  `Expected console.${consoleMethod} not to have been called with:\n` +
  `  ${printExpected(expected)}\n` +
  calledWith(actual);

const failMessage = (actual, expected, hint, consoleMethod) => () =>
  matcherHint(hint) +
  '\n\n' +
  `Expected console.${consoleMethod} to have been called with:\n` +
  `  ${printExpected(expected)}\n` +
  calledWith(actual);

export default {
  toConsoleLog: (fn, expected) => {
    const { actual, pass } = predicate(fn, expected, 'log');
    if (pass) {
      return { pass: true, message: passMessage(actual, expected, '.not.toConsoleLog', 'log') };
    }
    return { pass: false, message: failMessage(actual, expected, '.toConsoleLog', 'log') };
  },
  toConsoleInfo: (fn, expected) => {
    const { actual, pass } = predicate(fn, expected, 'info');
    if (pass) {
      return { pass: true, message: passMessage(actual, expected, '.not.toConsoleInfo', 'info') };
    }
    return { pass: false, message: failMessage(actual, expected, '.toConsoleInfo', 'info') };
  },
  toConsoleError: (fn, expected) => {
    const { actual, pass } = predicate(fn, expected, 'error');
    if (pass) {
      return { pass: true, message: passMessage(actual, expected, '.not.toConsoleError', 'error') };
    }
    return { pass: false, message: failMessage(actual, expected, '.not.toConsoleError', 'error') };
  }
};
