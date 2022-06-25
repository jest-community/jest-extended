export function toContainAnyKeys(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toContainAnyKeys') +
    '\n\n' +
    'Expected object not to contain any of the following keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toContainAnyKeys') +
    '\n\n' +
    'Expected object to contain any of the following keys:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = expected.some(key => Object.prototype.hasOwnProperty.call(actual, key));

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
