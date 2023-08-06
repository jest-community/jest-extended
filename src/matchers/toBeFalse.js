export function toBeFalse(actual) {
  const { printReceived, matcherHint, printExpected } = this.utils;

  const pass = actual === false;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeFalse", "received", "") +
          "\n\n" +
          "Expected value to not be false received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeFalse", "received", "") +
          "\n\n" +
          "Expected value to be false:\n" +
          `  ${printExpected(false)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
