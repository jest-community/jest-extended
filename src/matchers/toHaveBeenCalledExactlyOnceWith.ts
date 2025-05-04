import { isJestMockOrSpy } from 'src/utils';

export function toHaveBeenCalledExactlyOnceWith(received: unknown, ...expected: unknown[]) {
  // @ts-expect-error OK to have implicit any for this
  const { printReceived, printExpected, printWithType, matcherHint } = this.utils;

  if (!isJestMockOrSpy(received)) {
    return {
      pass: false,
      message: () =>
        matcherHint('.toHaveBeenCalledExactlyOnceWith', 'received', '') +
        '\n\n' +
        `Matcher error: ${printReceived('received')} must be a mock or spy function` +
        '\n\n' +
        printWithType('Received', received, printReceived),
    };
  }

  // @ts-expect-error isJestMockOrSpy provides the type check
  const actual = received.mock.calls[0];
  // @ts-expect-error isJestMockOrSpy provides the type check
  const invokedOnce = received.mock.calls.length === 1;
  // @ts-expect-error OK to have implicit any for this
  const pass = invokedOnce && this.equals(expected, actual);

  return {
    pass,
    message: () => {
      return pass
        ? matcherHint('.not.toHaveBeenCalledExactlyOnceWith', 'received', '') +
            '\n\n' +
            'Expected mock to be invoked some number of times other than once or once with ' +
            `arguments other than ${printExpected(expected)}, but was invoked ` +
            // @ts-expect-error isJestMockOrSpy provides the type check
            `${printReceived(received.mock.calls.length)} times with ${printReceived(...actual)}`
        : matcherHint('.toHaveBeenCalledExactlyOnceWith') +
            '\n\n' +
            (invokedOnce
              ? 'Expected mock function to have been called exactly once with ' +
                `${printExpected(expected)}, but it was called with ${printReceived(...actual)}`
              : 'Expected mock function to have been called exactly once, but it was called ' +
                // @ts-expect-error isJestMockOrSpy provides the type check
                `${printReceived(received.mock.calls.length)} times`);
    },
    actual: received,
  };
}
