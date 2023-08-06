export function toBeOdd(received) {
  const { printReceived, matcherHint } = this.utils;

  const pass = !isNaN(parseInt(received)) && received % 2 === 1;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeOdd", "received", "") +
          "\n\n" +
          "Expected value to not be odd received:\n" +
          `  ${printReceived(received)}`
        : matcherHint(".toBeOdd", "received", "") +
          "\n\n" +
          "Expected value to be odd received:\n" +
          `  ${printReceived(received)}`,
  };
}
