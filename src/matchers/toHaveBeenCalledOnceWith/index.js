import { matcherHint, printReceived, printExpected } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (mockFunction, expected) => () =>
  matcherHint('.not.toHaveBeenCalledOnce') +
  '\n\n' +
  'Expected mock to not have been called once with:\n' +
  `  ${printExpected(expected)}\n` +
  `Mock called ${printReceived(mockFunction.mock.calls.length)} times with:\n` +
  `  ${printReceived(mockFunction.mock.calls)}`;

const failMessage = (mockFunction, expected) => () =>
  matcherHint('.toHaveBeenCalledOnce') +
  '\n\n' +
  'Expected mock to have been called once with:\n' +
  `  ${printExpected(expected)}\n` +
  `Mock called ${printReceived(mockFunction.mock.calls.length)} times with:\n` +
  `  ${printReceived(mockFunction.mock.calls)}`;

export default {
  toHaveBeenCalledOnceWith: (mockFunction, ...expected) => {
    const pass = predicate(mockFunction, expected);
    if (pass) {
      return { pass: true, message: passMessage(mockFunction, expected) };
    }

    return { pass: false, message: failMessage(mockFunction, expected) };
  }
};
