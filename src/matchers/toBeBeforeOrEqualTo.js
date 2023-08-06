export function toBeBeforeOrEqualTo(actual, expected) {
  const { matcherHint, printReceived } = this.utils;

  const pass = actual <= expected;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeBeforeOrEqualTo", "received", "") +
          "\n\n" +
          `Expected date to be before or equal to ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeBeforeOrEqualTo", "received", "") +
          "\n\n" +
          `Expected date to be before or equal to ${printReceived(expected)} but received:\n` +
          `  ${printReceived(actual)}`,
  };
}
