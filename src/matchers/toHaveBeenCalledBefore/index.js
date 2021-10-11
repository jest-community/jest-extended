import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (firstInvocationCallOrder, secondInvocationCallOrder) => () =>
  matcherHint('.not.toHaveBeenCalledBefore') +
  '\n\n' +
  'Expected first mock to not have been called before, invocationCallOrder:\n' +
  `  ${printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${printReceived(secondInvocationCallOrder)}`;

const failMessage = (firstInvocationCallOrder, secondInvocationCallOrder) => () =>
  matcherHint('.toHaveBeenCalledBefore') +
  '\n\n' +
  'Expected first mock to have been called before, invocationCallOrder:\n' +
  `  ${printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${printReceived(secondInvocationCallOrder)}`;

export default {
  toHaveBeenCalledBefore: (firstMock, secondMock) => {
    const firstInvocationCallOrder = firstMock.mock.invocationCallOrder;
    const secondInvocationCallOrder = secondMock.mock.invocationCallOrder;
    const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder);
    if (pass) {
      return { pass: true, message: passMessage(firstInvocationCallOrder, secondInvocationCallOrder) };
    }

    return { pass: false, message: failMessage(firstInvocationCallOrder, secondInvocationCallOrder) };
  },
};
