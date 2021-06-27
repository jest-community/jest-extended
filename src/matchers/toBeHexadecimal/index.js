import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeHexadecimal', 'received', '') +
  '\n\n' +
  'Expected value to not be a hexadecimal, received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeHexadecimal', 'received', '') +
  '\n\n' +
  'Expected value to be a hexadecimal, received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeHexadecimal(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
