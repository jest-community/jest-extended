import { isJestMockOrSpy } from '../utils';

export function toHaveBeenCalledOnceWith(received, ...expected) {
  const { printReceived, printExpected, printWithType, matcherHint } = this.utils;

  if (!isJestMockOrSpy(received)) {
    return {
      pass: false,
      message: () =>
        matcherHint('.toHaveBeenCalledOnceWith', 'received', '') +
        '\n\n' +
        `Matcher error: ${printReceived('received')} must be a mock or spy function` +
        '\n\n' +
        printWithType('Received', received, printReceived),
    };
  }

  const actual = received.mock.calls[0];
  const invokedOnce = received.mock.calls.length === 1;
  const pass = invokedOnce && this.equals(expected, actual);

  return {
    pass,
    message: () => {
      return pass
        ? matcherHint('.not.toHaveBeenCalledOnceWith', 'received', '') +
            '\n\n' +
            'Expected mock to be invoked some number of times other than once or once with ' +
            `arguments other than ${printExpected(expected)}, but was invoked ` +
            `${printReceived(received.mock.calls.length)} times with ${printReceived(...actual)}`
        : matcherHint('.toHaveBeenCalledOnceWith') +
            '\n\n' +
            (invokedOnce
              ? 'Expected mock function to have been called exactly once with ' +
                `${printExpected(expected)}, but it was called with ${printReceived(...actual)}`
              : 'Expected mock function to have been called exactly once, but it was called ' +
                `${printReceived(received.mock.calls.length)} times`);
    },
    actual: received,
  };
}
