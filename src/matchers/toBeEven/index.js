import predicate from './predicate';

const passMessage = (utils, received) => () =>
  utils.matcherHint('.not.toBeEven', 'received', '') +
  '\n\n' +
  'Expected value to not be an even number received:\n' +
  ` ${utils.printReceived(received)}`;

const failMessage = (utils, received) => () =>
  utils.matcherHint('.toBeEven', 'received', '') +
  '\n\n' +
  'Expected value to be an even number received:\n' +
  ` ${utils.printReceived(received)}`;

export function toBeEven(expected) {
  const pass = predicate(expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, expected) };
  }

  return { pass: false, message: failMessage(this.utils, expected) };
}
