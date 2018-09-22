import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const positiveHint = matcherHint('.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });
const negativeHint = matcherHint('.not.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });

const passMessage = (received, expected) => () => `
${negativeHint}

Expected not to throw: 
  ${printExpected(expected)}
Thrown:
  ${printReceived(received)}
`;

const failMessage = (received, expected) => () => `
${positiveHint}

Expected to throw:
${printExpected(expected)}
Thrown:
${printReceived(received)}
`;

export default {
  toThrowWithMessage: (callback, type, message) => {
    if (!callback || typeof callback !== 'function') {
      return {
        pass: false,
        message: () => `
        ${positiveHint}

        Received value must be a function but instead "${callback}" was found
        `
      };
    }

    if (!type || typeof type !== 'function') {
      return {
        pass: false,
        message: () => `
        ${positiveHint}

        Expected type to be a function but instead "${type}" was found
        `
      };
    }

    if (!message) {
      return {
        pass: false,
        message: () => `
        ${positiveHint}

        Message argument is required.
        `
      };
    }

    if (typeof message !== 'string' && !(message instanceof RegExp)) {
      return {
        pass: false,
        message: () => `
        ${positiveHint}

        Unexpected argument for message.
        Expected: "string" or "regexp"
        Got: "${message}"
        `
      };
    }

    let error;
    try {
      callback();
    } catch (e) {
      error = e;
    }

    if (!error) {
      return {
        pass: false,
        message: () => `
        Expected the function to throw an error.
        But it didn't throw anything.
        `
      };
    }

    const pass = predicate(error, type, message);
    if (pass) {
      return { pass: true, message: passMessage(error, new type(message)) };
    }

    return { pass: false, message: failMessage(error, new type(message)) };
  }
};
