export function toBeNumber(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeNumber', 'received', '') +
    '\n\n' +
    'Expected value to not be a number received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeNumber', 'received', '') +
    '\n\n' +
    'Expected value to be a number received:\n' +
    `  ${printReceived(actual)}`;

  const pass = typeof actual === 'number';

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
