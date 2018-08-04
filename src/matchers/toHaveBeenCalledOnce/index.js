import { matcherHint, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = mockCalls => () =>
  matcherHint('.not.toHaveBeenCalledOnce', 'received', '') +
  '\n\n' +
  'Expected mock to not have been called once, mock called with:\n' +
  `  ${printReceived(mockCalls)}\n`;

const failMessage = mockCalls => () =>
  matcherHint('.toHaveBeenCalledOnce', 'received', '') +
  '\n\n' +
  'Expected mock to have been called once, mock called with:\n' +
  `  ${printReceived(mockCalls)}\n`;

export default {
  toHaveBeenCalledOnce: mockFunction => {
    const mockCalls = mockFunction.mock.calls;
    const pass = predicate(mockCalls);
    if (pass) {
      return { pass: true, message: passMessage(mockCalls) };
    }

    return { pass: false, message: failMessage(mockCalls) };
  }
};
