export function toBeBetween(actual, startDate, endDate) {
  const { matcherHint, printReceived } = this.utils;

  const passMessage = () =>
    matcherHint('.not.toBeBetween', 'received', '') +
    '\n\n' +
    `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
    `  ${printReceived(actual)}`;

  const failMessage = () =>
    matcherHint('.toBeBetween', 'received', '') +
    '\n\n' +
    `Expected date to be between ${printReceived(startDate)} and ${printReceived(endDate)} but received:\n` +
    `  ${printReceived(actual)}`;

  const pass = actual >= startDate && actual <= endDate;
  const message = pass ? passMessage : failMessage;

  return { pass, message };
}
