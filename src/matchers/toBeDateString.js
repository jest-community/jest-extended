export function toBeDateString(actual) {
  const { matcherHint, printReceived } = this.utils;

  const passMessage = () =>
    matcherHint('.not.toBeDateString', 'received', '') +
    '\n\n' +
    'Expected value to not be a date string received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage = () =>
    matcherHint('.toBeDateString', 'received', '') +
    '\n\n' +
    'Expected value to be a date string received:\n' +
    `  ${printReceived(actual)}`;

  const pass = !isNaN(Date.parse(actual));
  const message = pass ? passMessage : failMessage;

  return { pass, message };
}
