import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeSymbol', 'received', '') +
  '\n\n' +
  'Expected value to not be a symbol, received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeSymbol', 'received', '') +
  '\n\n' +
  'Expected to receive a symbol, received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeSymbol(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
