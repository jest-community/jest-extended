import { matcherHint, printExpected, printReceived, printWithType } from 'jest-matcher-utils';

import { isJestMockOrSpy } from '../../utils';

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

const mockCheckFailMessage = (value, isReceivedValue) => () => {
  const valueKind = isReceivedValue ? 'Received' : 'Expected';
  const valueKindPrintFunc = isReceivedValue ? printReceived : printExpected;

  return (
    matcherHint('.toHaveBeenCalledAfter') +
    '\n\n' +
    `Matcher error: ${valueKindPrintFunc(valueKind.toLowerCase())} must be a mock or spy function` +
    '\n\n' +
    printWithType(valueKind, value, valueKindPrintFunc)
  );
};

export default {
  toHaveBeenCalledAfter: (firstMock, secondMock) => {
    if (!isJestMockOrSpy(firstMock)) {
      return { pass: false, message: mockCheckFailMessage(firstMock, true) };
    }

    if (!isJestMockOrSpy(secondMock)) {
      return { pass: false, message: mockCheckFailMessage(secondMock, false) };
    }

    const firstInvocationCallOrder = firstMock.mock.invocationCallOrder;
    const secondInvocationCallOrder = secondMock.mock.invocationCallOrder;
    const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder);
    if (pass) {
      return { pass: true, message: passMessage(firstInvocationCallOrder, secondInvocationCallOrder) };
    }

    return { pass: false, message: failMessage(firstInvocationCallOrder, secondInvocationCallOrder) };
  },
};
