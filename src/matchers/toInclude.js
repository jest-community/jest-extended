export function toInclude(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = actual.includes(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toInclude") +
          "\n\n" +
          "Expected string to not include:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toInclude") +
          "\n\n" +
          "Expected string to include:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
