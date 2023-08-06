export function toSatisfy(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = expected(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toSatisfy", "received", "") +
          "\n\n" +
          "Expected value to not satisfy:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toSatisfy", "received", "") +
          "\n\n" +
          "Expected value to satisfy:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
