import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (firstInvocationCallOrder, secondInvocationCallOrder) => () =>
  matcherHint('.not.toHaveBeenCalledAfter') +
  '\n\n' +
  'Expected first mock to not have been called after, invocationCallOrder:\n' +
  `  ${printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${printReceived(secondInvocationCallOrder)}`;

const failMessage = (firstInvocationCallOrder, secondInvocationCallOrder) => () =>
  matcherHint('.toHaveBeenCalledAfter') +
  '\n\n' +
  'Expected first mock to have been called after, invocationCallOrder:\n' +
  `  ${printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${printReceived(secondInvocationCallOrder)}`;

export default {
  toHaveBeenCalledAfter: (firstMock, secondMock) => {
    const firstInvocationCallOrder = firstMock.mock.invocationCallOrder;
    const secondInvocationCallOrder = secondMock.mock.invocationCallOrder;
    const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder);
    if (pass) {
      return { pass: true, message: passMessage(firstInvocationCallOrder, secondInvocationCallOrder) };
    }

    return { pass: false, message: failMessage(firstInvocationCallOrder, secondInvocationCallOrder) };
  },
};
