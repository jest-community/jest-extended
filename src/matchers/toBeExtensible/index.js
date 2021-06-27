import predicate from './predicate';

const passMessage = (utils, received) => () => {
  return (
    utils.matcherHint('.not.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to not be extensible received:\n' +
    `  ${utils.printExpected(received)}\n`
  );
};

const failMessage = (utils, received) => () => {
  return (
    utils.matcherHint('.toBeExtensible', 'received', '') +
    '\n\n' +
    'Expected value to be extensible received:\n' +
    `  ${utils.printReceived(received)}`
  );
};

export function toBeExtensible(expected) {
  const pass = predicate(expected);
  return {
    pass,
    message: pass ? passMessage(this.utils, expected) : failMessage(this.utils, expected),
  };
}
