export function toBeWithinRange(actual, min, max) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const element = actual.find(option => option < min || option > max);

  const pass = element === undefined;

  const passMessage =
    matcherHint('.not.toBeWithinRange') +
    '\n\n' +
    `Expected Array to not be in range ${printExpected(min)}, ${printExpected(max)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeWithinRange') +
    '\n\n' +
    `Expected: Array elements to be in range (${printExpected(min)}, ${printExpected(max)})\n` +
    `Received: Array element out of range ${printReceived(element)}`;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
