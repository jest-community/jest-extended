export function toBeNaN(actual) {
  const { printReceived, matcherHint } = this.utils;

  const pass = isNaN(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeNaN", "received", "") +
          "\n\n" +
          "Expected value to be a number received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeNaN", "received", "") +
          "\n\n" +
          "Expected value to not be a number received:\n" +
          `  ${printReceived(actual)}`,
  };
}
