export function toBePositive(actual) {
  const { printReceived, matcherHint } = this.utils;

  const pass = actual !== true && !isNaN(actual) && actual !== Infinity && actual > 0;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBePositive", "received", "") +
          "\n\n" +
          "Expected value to not be positive received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBePositive", "received", "") +
          "\n\n" +
          "Expected value to be positive received:\n" +
          `  ${printReceived(actual)}`,
  };
}
