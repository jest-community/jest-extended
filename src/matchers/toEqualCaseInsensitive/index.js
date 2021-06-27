import predicate from './predicate';

const passMessage = (utils, received, expected) => () => {
  return (
    utils.matcherHint('.not.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to not be equal while ignoring case (using ===):\n' +
    `  ${utils.printExpected(expected)}\n` +
    'Received:\n' +
    `  ${utils.printReceived(received)}`
  );
};

const failMessage = (utils, received, expected) => () => {
  return (
    utils.matcherHint('.toEqualCaseInsensitive') +
    '\n\n' +
    'Expected values to be equal while ignoring case (using ===):\n' +
    `  ${utils.printExpected(expected)}\n` +
    'Received:\n' +
    `  ${utils.printReceived(received)}`
  );
};

export function toEqualCaseInsensitive(received, expected) {
  const pass = predicate(received, expected);

  return {
    pass,
    message: pass ? passMessage(this.utils, received, expected) : failMessage(this.utils, received, expected),
    actual: received,
  };
}
