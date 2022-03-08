export function toBeNaN(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeNaN', 'received', '') +
    '\n\n' +
    'Expected value to be a number received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeNaN', 'received', '') +
    '\n\n' +
    'Expected value to not be a number received:\n' +
    `  ${printReceived(actual)}`;

  const pass = isNaN(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
