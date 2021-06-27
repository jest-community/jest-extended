import predicate from './predicate';

const passMessage = (utils, firstInvocationCallOrder, secondInvocationCallOrder) => () =>
  utils.matcherHint('.not.toHaveBeenCalledBefore') +
  '\n\n' +
  'Expected first mock to not have been called before, invocationCallOrder:\n' +
  `  ${utils.printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${utils.printReceived(secondInvocationCallOrder)}`;

const failMessage = (utils, firstInvocationCallOrder, secondInvocationCallOrder) => () =>
  utils.matcherHint('.toHaveBeenCalledBefore') +
  '\n\n' +
  'Expected first mock to have been called before, invocationCallOrder:\n' +
  `  ${utils.printExpected(firstInvocationCallOrder)}\n` +
  'Received second mock with invocationCallOrder:\n' +
  `  ${utils.printReceived(secondInvocationCallOrder)}`;

export default {
  toHaveBeenCalledBefore(firstMock, secondMock) {
    const firstInvocationCallOrder = firstMock.mock.invocationCallOrder;
    const secondInvocationCallOrder = secondMock.mock.invocationCallOrder;
    const pass = predicate(firstInvocationCallOrder, secondInvocationCallOrder);
    if (pass) {
      return { pass: true, message: passMessage(this.utils, firstInvocationCallOrder, secondInvocationCallOrder) };
    }

    return { pass: false, message: failMessage(this.utils, firstInvocationCallOrder, secondInvocationCallOrder) };
  },
};
