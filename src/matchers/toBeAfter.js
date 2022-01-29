export function toBeAfter(date, after) {
  const { printReceived, matcherHint } = this.utils;
  const passMessage = () =>
    matcherHint('.not.toBeAfter', 'received', '') +
    '\n\n' +
    `Expected date to be after ${printReceived(after)} but received:\n` +
    `  ${printReceived(date)}`;

  const failMessage = () =>
    matcherHint('.toBeAfter', 'received', '') +
    '\n\n' +
    `Expected date to be after ${printReceived(after)} but received:\n` +
    `  ${printReceived(date)}`;

  return date > after ? { pass: true, message: passMessage } : { pass: false, message: failMessage };
}
