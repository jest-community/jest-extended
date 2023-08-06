export function toSatisfyAny(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = actual.some(expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toSatisfyAny") +
          "\n\n" +
          "Expected array to not satisfy predicate for any value:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toSatisfyAny") +
          "\n\n" +
          "Expected array to satisfy predicate for any values:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
