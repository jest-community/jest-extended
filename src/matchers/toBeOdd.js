export function toBeOdd(received) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeOdd', 'received', '') +
    '\n\n' +
    'Expected value to not be odd received:\n' +
    `  ${printReceived(received)}`;

  const failMessage =
    matcherHint('.toBeOdd', 'received', '') +
    '\n\n' +
    'Expected value to be odd received:\n' +
    `  ${printReceived(received)}`;

  const pass = !isNaN(parseInt(received)) && received % 2 === 1;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
