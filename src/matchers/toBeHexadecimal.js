export function toBeHexadecimal(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeHexadecimal', 'received', '') +
    '\n\n' +
    'Expected value to not be a hexadecimal, received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeHexadecimal', 'received', '') +
    '\n\n' +
    'Expected value to be a hexadecimal, received:\n' +
    `  ${printReceived(actual)}`;

  const pass = longRegex.test(actual) || shortRegex.test(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const longRegex = RegExp(/^#\b[a-f0-9]{6}\b/gi);
const shortRegex = RegExp(/^#\b[a-f0-9]{3}\b/gi);
