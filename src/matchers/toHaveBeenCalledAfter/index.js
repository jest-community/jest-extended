import { isJestMockOrSpy } from '../../utils';

import predicate from './predicate';

const passMessage = (utils, firstInvocationCallOrder, secondInvocationCallOrder) => () =>
  utils.matcherHint('.not.toHaveBeenCalledAfter') +
  '\n\n' +
  'Expected first mock to not have been called after, invocationCallOrder:\n' +
  `  ${utils.printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${utils.printReceived(secondInvocationCallOrder)}`;

const failMessage = (utils, firstInvocationCallOrder, secondInvocationCallOrder) => () =>
  utils.matcherHint('.toHaveBeenCalledAfter') +
  '\n\n' +
  'Expected first mock to have been called after, invocationCallOrder:\n' +
  `  ${utils.printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${utils.printReceived(secondInvocationCallOrder)}`;

const mockCheckFailMessage = (utils, value, isReceivedValue) => () => {
  const valueKind = isReceivedValue ? 'Received' : 'Expected';
  const valueKindPrintFunc = isReceivedValue ? utils.printReceived : utils.printExpected;

  return (
    utils.matcherHint('.toHaveBeenCalledAfter') +
    '\n\n' +
    `Matcher error: ${valueKindPrintFunc(valueKind.toLowerCase())} must be a mock or spy function` +
    '\n\n' +
    utils.printWithType(valueKind, value, valueKindPrintFunc)
  );
};

export function toHaveBeenCalledAfter(firstMock, secondMock) {
  if (!isJestMockOrSpy(firstMock)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, firstMock, true) };
  }

  if (!isJestMockOrSpy(secondMock)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, secondMock, false) };
  }

  const firstInvocationCallOrder = firstMock.mock.invocationCallOrder;
  const secondInvocationCallOrder = secondMock.mock.invocationCallOrder;
  const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, firstInvocationCallOrder, secondInvocationCallOrder) };
  }

  return { pass: false, message: failMessage(this.utils, firstInvocationCallOrder, secondInvocationCallOrder) };
}
