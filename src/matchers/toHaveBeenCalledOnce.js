import { isJestMockOrSpy } from '../utils';

export function toHaveBeenCalledOnce(received) {
  const { printReceived, printWithType, matcherHint } = this.utils;

  if (!isJestMockOrSpy(received)) {
    return {
      pass: false,
      message: () =>
        matcherHint('.toHaveBeenCalledAfter') +
        '\n\n' +
        `Matcher error: ${printReceived('received')} must be a mock or spy function` +
        '\n\n' +
        printWithType('Received', received, printReceived),
    };
  }

  const passMessage =
    matcherHint('.not.toHaveBeenCalledOnce') +
    '\n\n' +
    'Expected mock function to have been called any amount of times but one, but it was called exactly once.';

  const failMessage =
    matcherHint('.toHaveBeenCalledOnce') +
    '\n\n' +
    'Expected mock function to have been called exactly once, but it was called:\n' +
    `  ${printReceived(received.mock.calls.length)} times`;

  const pass = received.mock.calls.length === 1;

  return { pass, message: () => (pass ? passMessage : failMessage), actual: received };
}
