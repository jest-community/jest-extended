import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const positiveHint = matcherHint('.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });
const negativeHint = matcherHint('.not.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });

const passMessage = (received, expected) => () =>
  negativeHint +
  '\n\n' +
  'Expected not to throw:\n' +
  `  ${printExpected(expected)}\n` +
  'Thrown:\n' +
  `  ${printReceived(received)}\n`;

const failMessage = (received, expected) => () =>
  positiveHint +
  '\n\n' +
  'Expected to throw:\n' +
  `  ${printExpected(expected)}\n` +
  'Thrown:\n' +
  `  ${printReceived(received)}\n`;

export default {
  toThrowWithMessage(callbackOrPromiseReturn, type, message) {
    const isFromReject = this && this.promise === 'rejects'; // See https://github.com/facebook/jest/pull/7621#issue-244312550
    if ((!callbackOrPromiseReturn || typeof callbackOrPromiseReturn !== 'function') && !isFromReject) {
      return {
        pass: false,
        message: () =>
          positiveHint +
          '\n\n' +
          `Received value must be a function but instead "${callbackOrPromiseReturn}" was found`,
      };
    }

    if (!type || typeof type !== 'function') {
      return {
        pass: false,
        message: () => positiveHint + '\n\n' + `Expected type to be a function but instead "${type}" was found`,
      };
    }

    if (!message) {
      return {
        pass: false,
        message: () => positiveHint + '\n\n' + ' Message argument is required. ',
      };
    }

    if (typeof message !== 'string' && !(message instanceof RegExp)) {
      return {
        pass: false,
        message: () =>
          positiveHint +
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
        callbackOrPromiseReturn();
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
      return { pass: true, message: passMessage(error, new type(message)) };
    }

    return { pass: false, message: failMessage(error, new type(message)) };
  },
};
