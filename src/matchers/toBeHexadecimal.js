export function toBeHexadecimal(actual) {
  const { printReceived, matcherHint } = this.utils;

  const pass = longRegex.test(actual) || shortRegex.test(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeHexadecimal", "received", "") +
          "\n\n" +
          "Expected value to not be a hexadecimal, received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeHexadecimal", "received", "") +
          "\n\n" +
          "Expected value to be a hexadecimal, received:\n" +
          `  ${printReceived(actual)}`,
  };
}

const longRegex = RegExp(/^#\b[a-f0-9]{6}\b/gi);
const shortRegex = RegExp(/^#\b[a-f0-9]{3}\b/gi);
