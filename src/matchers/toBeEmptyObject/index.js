import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeEmptyObject', 'received', '') +
  '\n\n' +
  'Expected value to not be an empty object, received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeEmptyObject', 'received', '') +
  '\n\n' +
  'Expected value to be an empty object, received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeEmptyObject(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
