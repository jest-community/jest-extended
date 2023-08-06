const predicate = (error, type, message) => {
  if (message instanceof RegExp) {
    return error && error instanceof type && message.test(error.message);
  }
  return error && error instanceof type && error.message === message;
};

const positiveHint = utils =>
  utils.matcherHint(".toThrowWithMessage", "function", "type", { secondArgument: "message" });

const negativeHint = utils =>
  utils.matcherHint(".not.toThrowWithMessage", "function", "type", { secondArgument: "message" });

const passMessage = (utils, received, expected) =>
  negativeHint(utils) +
  "\n\n" +
  "Expected not to throw:\n" +
  `  ${utils.printExpected(expected)}\n` +
  "Thrown:\n" +
  `  ${utils.printReceived(received)}\n`;

const failMessage = (utils, received, expected) =>
  positiveHint(utils) +
  "\n\n" +
  "Expected to throw:\n" +
  `  ${utils.printExpected(expected)}\n` +
  "Thrown:\n" +
  `  ${utils.printReceived(received)}\n`;

const getExpectedError = (type, message) => {
  const messageStr = message.toString();
  let expectedError;
  try {
    expectedError = new type(messageStr);
  } catch (err) {
    const name = type.name;
    expectedError = new Error();
    expectedError.name = name;
    expectedError.message = messageStr;
  }
  return expectedError;
};

export function toThrowWithMessage(callbackOrPromiseReturn, type, message) {
  const utils = this.utils;
  const isFromReject = this && this.promise === "rejects"; // See https://github.com/facebook/jest/pull/7621#issue-244312550
  if ((!callbackOrPromiseReturn || typeof callbackOrPromiseReturn !== "function") && !isFromReject) {
    return {
      pass: false,
      message: () =>
        positiveHint(utils) +
        "\n\n" +
        `Received value must be a function but instead "${callbackOrPromiseReturn}" was found`,
    };
  }

  if (!type || typeof type !== "function") {
    return {
      pass: false,
      message: () => positiveHint(utils) + "\n\n" + `Expected type to be a function but instead "${type}" was found`,
    };
  }

  if (!message) {
    return {
      pass: false,
      message: () => positiveHint(utils) + "\n\n" + " Message argument is required. ",
    };
  }

  if (typeof message !== "string" && !(message instanceof RegExp)) {
    return {
      pass: false,
      message: () =>
        positiveHint(utils) +
        "\n\n" +
        "Unexpected argument for message\n" +
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
      message: () => "Expected the function to throw an error.\n" + "But it didn't throw anything.",
    };
  }

  const pass = predicate(error, type, message);
  if (pass) {
    return { pass: true, message: () => passMessage(utils, error, getExpectedError(type, message)) };
  }

  return { pass: false, message: () => failMessage(utils, error, getExpectedError(type, message)) };
}
