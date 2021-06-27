import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeOdd', 'received', '') +
  '\n\n' +
  'Expected value to not be odd received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeOdd', 'received', '') +
  '\n\n' +
  'Expected value to be odd received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeOdd(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
