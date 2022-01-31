export function toBeInteger(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeInteger', 'received', '') +
    '\n\n' +
    'Expected value to not be an integer received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeInteger', 'received', '') +
    '\n\n' +
    'Expected value to be an integer received:\n' +
    `  ${printReceived(actual)}`;

  const pass = isNumber(actual) && isInteger(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const isNumber = value => !isNaN(parseInt(value));
const isInteger = value => Number.isInteger(+value);
