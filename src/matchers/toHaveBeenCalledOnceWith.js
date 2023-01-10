import { isJestMockOrSpy } from '../utils';

export function toHaveBeenCalledOnceWith(received, expected) {
  const { printReceived, printExpected, printWithType, matcherHint } = this.utils;

  if (!isJestMockOrSpy(received)) {
    return {
      pass: false,
      message: () =>
        matcherHint('.toHaveBeenCalledOnceWith') +
        '\n\n' +
        `Matcher error: ${printReceived('received')} must be a mock or spy function` +
        '\n\n' +
        printWithType('Received', received, printReceived),
    };
  }

  const passOnce = received.mock.calls.length === 1;
  const pass = passOnce && this.equals(expected, received.mock.calls[0][0]);

  return {
    pass,
    message: () => {
      if (pass) {
        return (
          matcherHint('.not.toHaveBeenCalledOnceWith') +
          '\n\n' +
          `Expected mock function to have been called any amount of times but one with ${printExpected(
            expected,
          )}, but it was called exactly once with ${printExpected(expected)}.`
        );
      }

      return !passOnce
        ? matcherHint('.toHaveBeenCalledOnceWith') +
            '\n\n' +
            'Expected mock function to have been called exactly once, but it was called:\n' +
            `  ${printReceived(received.mock.calls.length)} times`
        : matcherHint('.toHaveBeenCalledOnceWith') +
            '\n\n' +
            `Expected mock function to have been called exactly once with ${printReceived(
              expected,
            )}, but it was called with:\n` +
            `  ${printReceived(received.mock.calls[0]?.[0])}`;
    },
    actual: received,
  };
}
