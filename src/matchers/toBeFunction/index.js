import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeFunction', 'received', '') +
  '\n\n' +
  'Expected value to not be a function, received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeFunction', 'received', '') +
  '\n\n' +
  'Expected to receive a function, received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeFunction(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
