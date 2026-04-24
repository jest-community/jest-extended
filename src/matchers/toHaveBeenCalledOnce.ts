import { isJestMockOrSpy } from 'src/utils';

export function toHaveBeenCalledOnce(actual: unknown) {
  // @ts-expect-error OK to have implicit any for this.utils
  const { printReceived, printWithType, matcherHint } = this.utils;

  if (!isJestMockOrSpy(actual)) {
    return {
      pass: false,
      message: () =>
        matcherHint('.toHaveBeenCalledOnce') +
        '\n\n' +
        `Matcher error: ${printReceived('received')} must be a mock or spy function` +
        '\n\n' +
        printWithType('Received', actual, printReceived),
    };
  }

  // @ts-expect-error isJestMockOrSpy provides the type check
  const pass = actual.mock.calls.length === 1;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint('.not.toHaveBeenCalledOnce') +
          '\n\n' +
          'Expected mock function to have been called any amount of times but one, but it was called exactly once.'
        : matcherHint('.toHaveBeenCalledOnce') +
          '\n\n' +
          'Expected mock function to have been called exactly once, but it was called:\n' +
          // @ts-expect-error isJestMockOrSpy provides the type check
          `  ${printReceived(actual.mock.calls.length)} times`,
    actual: actual,
  };
}
