import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeEmpty', 'received', '') +
  '\n\n' +
  'Expected value to not be empty received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeEmpty', 'received', '') +
  '\n\n' +
  'Expected value to be empty received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeEmpty(expected) {
  const pass = predicate(this.equals, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
