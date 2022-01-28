import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeNil', 'received', '') +
  '\n\n' +
  'Expected value not to be null or undefined, received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeNil', 'received', '') +
  '\n\n' +
  'Expected value to be null or undefined, received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeNil(received) {
  const pass = predicate(received);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, received) };
  }

  return { pass: false, message: failMessage(this.utils, received) };
}
