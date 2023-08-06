export function toBeAfter(date, after) {
  const { printReceived, matcherHint } = this.utils;

  const pass = date > after;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeAfter", "received", "") +
          "\n\n" +
          `Expected date to be after ${printReceived(after)} but received:\n` +
          `  ${printReceived(date)}`
        : matcherHint(".toBeAfter", "received", "") +
          "\n\n" +
          `Expected date to be after ${printReceived(after)} but received:\n` +
          `  ${printReceived(date)}`,
  };
}
