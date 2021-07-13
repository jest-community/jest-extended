import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const calledWith = actual =>
  actual ? 'But it was called with:\n' + `  ${printReceived(actual)}` : 'But it was not called';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toLogWarning') +
  '\n\n' +
  'Expected console.warn not to have been called with:\n' +
  `  ${printExpected(expected)}\n` +
  calledWith(actual);

const failMessage = (actual, expected) => () =>
  matcherHint('.toLogWarning') +
  '\n\n' +
  'Expected console.warn to have been called with:\n' +
  `  ${printExpected(expected)}\n` +
  calledWith(actual);

export default {
  toLogWarning: (fn, expected) => {
    const { actual, pass } = predicate(fn, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }
    return { pass: false, message: failMessage(actual, expected) };
  }
};
