export function toBeWithin(actual, start, end) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeWithin') +
    '\n\n' +
    'Expected number to not be within start (inclusive) and end (exclusive):\n' +
    `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeWithin') +
    '\n\n' +
    'Expected number to be within start (inclusive) and end (exclusive):\n' +
    `  start: ${printExpected(start)}  end: ${printExpected(end)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const pass = actual >= start && actual < end;

  return { pass, message: () => (pass ? passMessage : failMessage) };
}
