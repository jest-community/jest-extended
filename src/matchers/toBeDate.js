import { getType } from "jest-get-type";

export function toBeDate(actual) {
  const { matcherHint, printReceived } = this.utils;

  const pass = getType(actual) === "date" && !isNaN(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeDate", "received", "") +
          "\n\n" +
          "Expected value to not be a date received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeDate", "received", "") +
          "\n\n" +
          "Expected value to be a date received:\n" +
          `  ${printReceived(actual)}`,
  };
}
