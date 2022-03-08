export function toBePositive(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBePositive', 'received', '') +
    '\n\n' +
    'Expected value to not be positive received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBePositive', 'received', '') +
    '\n\n' +
    'Expected value to be positive received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual !== true && !isNaN(actual) && actual !== Infinity && actual > 0;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
