export function toBeNegative(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeNegative', 'received', '') +
    '\n\n' +
    'Expected value to not be a negative number received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeNegative', 'received', '') +
    '\n\n' +
    'Expected value to be a negative number received:\n' +
    `  ${printReceived(actual)}`;

  const pass = isNumber(actual) && isNegative(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const isNumber = value => !isNaN(parseInt(value));
const isNegative = value => value < 0;
