export function toBeNil(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeNil', 'received', '') +
    '\n\n' +
    'Expected value not to be null or undefined, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeNil', 'received', '') +
    '\n\n' +
    'Expected value to be null or undefined, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual === undefined || actual === null;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
