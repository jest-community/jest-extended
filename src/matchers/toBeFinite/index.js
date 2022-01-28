import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeFinite', 'received', '') +
  '\n\n' +
  'Expected value to not be finite received:\n' +
  `  ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeFinite', 'received', '') +
  '\n\n' +
  'Expected value to be finite received:\n' +
  `  ${utils.printReceived(received)}`;

export function toBeFinite(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
