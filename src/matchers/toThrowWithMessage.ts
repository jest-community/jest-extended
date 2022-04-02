interface CustomMatchers<R = unknown> {
  toThrowWithMessage(type: new (message?: string) => { message: string }, message: string | RegExp): R;
}

declare global {
  namespace jest {
    interface Matchers<R> extends CustomMatchers<R> {}

    interface Expect extends CustomMatchers {}

    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

const predicate = <E>(error: E, type: new (message: string) => { message: string }, message: string | RegExp) => {
  if (message instanceof RegExp) {
    return error && error instanceof type && message.test(error.message);
  }
  return error && error instanceof type && error.message === message;
};

const positiveHint = (utils: jest.MatcherContext['utils']) =>
  utils.matcherHint('.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });

const negativeHint = (utils: jest.MatcherContext['utils']) =>
  utils.matcherHint('.not.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });

const passMessage = (utils: jest.MatcherContext['utils'], received: unknown, expected: unknown) => () =>
  negativeHint(utils) +
  '\n\n' +
  'Expected not to throw:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Thrown:\n' +
  `  ${utils.printReceived(received)}\n`;

const failMessage = (utils: jest.MatcherContext['utils'], received: unknown, expected: unknown) => () =>
  positiveHint(utils) +
  '\n\n' +
  'Expected to throw:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Thrown:\n' +
  `  ${utils.printReceived(received)}\n`;

export function toThrowWithMessage(
  this: jest.MatcherContext,
  callbackOrPromiseReturn: unknown,
  type: new (message: string | RegExp) => { message: string },
  message: string | RegExp,
): jest.CustomMatcherResult {
  const utils = this.utils;
  const isFromReject = this && this.promise === 'rejects'; // See https://github.com/facebook/jest/pull/7621#issue-244312550
  if ((!callbackOrPromiseReturn || typeof callbackOrPromiseReturn !== 'function') && !isFromReject) {
    return {
      pass: false,
      message: () =>
        positiveHint(utils) +
        '\n\n' +
        `Received value must be a function but instead "${callbackOrPromiseReturn}" was found`,
    };
  }

  if (!type || typeof type !== 'function') {
    return {
      pass: false,
      message: () => positiveHint(utils) + '\n\n' + `Expected type to be a function but instead "${type}" was found`,
    };
  }

  if (!message) {
    return {
      pass: false,
      message: () => positiveHint(utils) + '\n\n' + ' Message argument is required. ',
    };
  }

  if (typeof message !== 'string' && !(message instanceof RegExp)) {
    return {
      pass: false,
      message: () =>
        positiveHint(utils) +
        '\n\n' +
        'Unexpected argument for message\n' +
        'Expected: "string" or "regexp\n' +
        `Got: "${message}"`,
    };
  }

  let error;
  if (isFromReject) {
    error = callbackOrPromiseReturn;
  } else {
    try {
      (callbackOrPromiseReturn as () => void)();
    } catch (e) {
      error = e;
    }
  }

  if (!error) {
    return {
      pass: false,
      message: () => 'Expected the function to throw an error.\n' + "But it didn't throw anything.",
    };
  }

  const pass = predicate(error, type, message);
  if (pass) {
    return { pass: true, message: passMessage(utils, error, new type(message)) };
  }

  return { pass: false, message: failMessage(utils, error, new type(message)) };
}
