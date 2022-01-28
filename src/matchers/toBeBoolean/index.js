import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeBoolean', 'received', '') +
  '\n\n' +
  'Expected value to not be of type boolean, received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeBoolean', 'received', '') +
  '\n\n' +
  'Expected value to be of type boolean, received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeBoolean(received) {
  const pass = predicate(received);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, received) };
  }

  return { pass: false, message: failMessage(this.utils, received) };
}
