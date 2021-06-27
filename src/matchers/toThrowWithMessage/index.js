import predicate from './predicate';

const positiveHint = utils =>
  utils.matcherHint('.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });

const negativeHint = utils =>
  utils.matcherHint('.not.toThrowWithMessage', 'function', 'type', { secondArgument: 'message' });

const passMessage = (utils, received, expected) => () =>
  negativeHint(utils) +
  '\n\n' +
  'Expected not to throw:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Thrown:\n' +
  `  ${utils.printReceived(received)}\n`;

const failMessage = (utils, received, expected) => () =>
  positiveHint(utils) +
  '\n\n' +
  'Expected to throw:\n' +
  `  ${utils.printExpected(expected)}\n` +
  'Thrown:\n' +
  `  ${utils.printReceived(received)}\n`;

export default {
  toThrowWithMessage(callback, type, message) {
    if (!callback || typeof callback !== 'function') {
      return {
        pass: false,
        message: () =>
          positiveHint(this.utils) + '\n\n' + `Received value must be a function but instead "${callback}" was found`,
      };
    }

    if (!type || typeof type !== 'function') {
      return {
        pass: false,
        message: () =>
          positiveHint(this.utils) + '\n\n' + `Expected type to be a function but instead "${type}" was found`,
      };
    }

    if (!message) {
      return {
        pass: false,
        message: () => positiveHint(this.utils) + '\n\n' + ' Message argument is required. ',
      };
    }

    if (typeof message !== 'string' && !(message instanceof RegExp)) {
      return {
        pass: false,
        message: () =>
          positiveHint(this.utils) +
          '\n\n' +
          'Unexpected argument for message\n' +
          'Expected: "string" or "regexp\n' +
          `Got: "${message}"`,
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
        message: () => 'Expected the function to throw an error.\n' + "But it didn't throw anything.",
      };
    }

    const pass = predicate(error, type, message);
    if (pass) {
      return { pass: true, message: passMessage(this.utils, error, new type(message)) };
    }

    return { pass: false, message: failMessage(this.utils, error, new type(message)) };
  },
};
