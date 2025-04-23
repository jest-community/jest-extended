import { isJestMockOrSpy } from '../utils';

export function toHaveBeenCalledExactlyOnceWith(received, ...expected) {
  const { printReceived, printExpected, printDiffOrStringify, printWithType, matcherHint } = this.utils;

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

  const actual = received.mock.calls[0];
  const invokedOnce = received.mock.calls.length === 1;
  const oneArgument = actual?.length === 1 && expected.length === 1;
  const pass = invokedOnce && this.equals(expected, actual);

  return {
    pass,
    message: () => {
      return pass
        ? matcherHint('.not.toHaveBeenCalledExactlyOnceWith', 'received', '') +
            '\n\n' +
            'Expected mock to be invoked some number of times other than once or once with ' +
            `arguments other than ${printExpected(expected)}, but was invoked ` +
            `${printReceived(received.mock.calls.length)} times with ${printReceived(actual)}`
        : matcherHint('.toHaveBeenCalledExactlyOnceWith') +
            '\n\n' +
            (invokedOnce
              ? oneArgument
                ? printDiffOrStringify(expected[0], actual[0], 'Expected', 'Received', this.expand)
                : printDiffOrStringify(expected, actual, 'Expected arguments', 'Received arguments', this.expand)
              : 'Expected mock function to have been called exactly once, but it was called ' +
                `${printReceived(received.mock.calls.length)} times`);
    },
    actual: received,
  };
}
