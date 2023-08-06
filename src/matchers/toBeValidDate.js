import { getType } from "jest-get-type";

export function toBeValidDate(actual) {
  const { printReceived, matcherHint } = this.utils;

  const pass = getType(actual) === "date" && !isNaN(actual) && !isNaN(actual.getTime());

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeValidDate", "received", "") +
          "\n\n" +
          "Expected value to not be a valid date received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeValidDate", "received", "") +
          "\n\n" +
          "Expected value to be a valid date received:\n" +
          `  ${printReceived(actual)}`,
  };
}
