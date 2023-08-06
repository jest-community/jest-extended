import { getType } from "jest-get-type";

export function toBeObject(actual) {
  const { printReceived, matcherHint } = this.utils;

  const pass = getType(actual) === "object";

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeObject", "received", "") +
          "\n\n" +
          "Expected value to not be an object, received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeObject", "received", "") +
          "\n\n" +
          "Expected value to be an object, received:\n" +
          `  ${printReceived(actual)}`,
  };
}
