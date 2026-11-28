import { printDiffOrStringify } from 'jest-matcher-utils';
import type { MatcherContext } from 'src/utils';
import { isJestMockOrSpy } from 'src/utils';

export function toHaveBeenCalledExactlyOnceWith(this: MatcherContext, received: unknown, ...expected: unknown[]) {
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

  const actual = received.mock.calls[0];
  const invokedOnce = received.mock.calls.length === 1;
  const oneArgument = actual?.length === 1 && expected.length === 1;
  const pass = invokedOnce && this.equals(expected, actual, this.customTesters);

  return {
    pass,
    message: () => {
      const expand = Boolean(this.expand);
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
                ? printDiffOrStringify(expected[0], actual[0], 'Expected', 'Received', expand)
                : printDiffOrStringify(expected, actual, 'Expected arguments', 'Received arguments', expand)
              : 'Expected mock function to have been called exactly once, but it was called ' +
                `${printReceived(received.mock.calls.length)} times`);
    },
    actual: received,
  };
}
