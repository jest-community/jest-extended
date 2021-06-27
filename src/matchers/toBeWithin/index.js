import predicate from './predicate';

const passMessage = (utils, number, start, end) => () =>
  utils.matcherHint('.not.toBeWithin') +
  '\n\n' +
  'Expected number to not be within start (inclusive) and end (exclusive):\n' +
  `  start: ${utils.printExpected(start)}  end: ${utils.printExpected(end)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(number)}`;

const failMessage = (utils, number, start, end) => () =>
  utils.matcherHint('.toBeWithin') +
  '\n\n' +
  'Expected number to be within start (inclusive) and end (exclusive):\n' +
  `  start: ${utils.printExpected(start)}  end: ${utils.printExpected(end)}\n` +
  'Received:\n' +
  `  ${utils.printReceived(number)}`;

export function toBeWithin(number, start, end) {
  const pass = predicate(number, start, end);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, number, start, end) };
  }

  return { pass: false, message: failMessage(this.utils, number, start, end) };
}
