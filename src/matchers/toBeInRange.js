export function toBeInRange(actual, min, max) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const element = actual.find(option => option < min || option >= max);

  const pass = element === undefined;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeInRange") +
          "\n\n" +
          `Expected Array to not be in range ${printExpected(min)}, ${printExpected(max)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeInRange") +
          "\n\n" +
          `Expected: Array elements to be in range (${printExpected(min)}, ${printExpected(max)})\n` +
          `Received: Array element out of range ${printReceived(element)}`,
  };
}
