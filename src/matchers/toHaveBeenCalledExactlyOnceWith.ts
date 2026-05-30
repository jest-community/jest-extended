import type { MatcherContext } from 'expect';
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

  // @ts-expect-error isJestMockOrSpy provides the type check
  const actual = received.mock.calls[0];
  // @ts-expect-error isJestMockOrSpy provides the type check
  const invokedOnce = received.mock.calls.length === 1;
  const pass = invokedOnce && this.equals(expected, actual, this.customTesters);

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
                // @ts-expect-error to be fixed by #675
                `${printExpected(expected)}, but it was called with ${printReceived(...actual)}`
              : 'Expected mock function to have been called exactly once, but it was called ' +
                // @ts-expect-error isJestMockOrSpy provides the type check
                `${printReceived(received.mock.calls.length)} times`);
    },
    actual: received,
  };
}
