import { containsEntry } from "../utils";

export function toContainEntry(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = containsEntry(this.equals, actual, expected);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toContainEntry") +
          "\n\n" +
          "Expected object to not contain entry:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toContainEntry") +
          "\n\n" +
          "Expected object to contain entry:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
