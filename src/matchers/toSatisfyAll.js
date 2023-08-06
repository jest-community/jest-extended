export function toSatisfyAll(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = actual.every(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toSatisfyAll") +
          "\n\n" +
          "Expected array to not satisfy predicate for all values:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toSatisfyAll") +
          "\n\n" +
          "Expected array to satisfy predicate for all values:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
