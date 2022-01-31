export function toBeEven(actual) {
  const { printReceived, matcherHint } = this.utils;

  const passMessage =
    matcherHint('.not.toBeEven', 'received', '') +
    '\n\n' +
    'Expected value to not be an even number received:\n' +
    ` ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toBeEven', 'received', '') +
    '\n\n' +
    'Expected value to be an even number received:\n' +
    ` ${printReceived(actual)}`;

  const pass = isNumber(actual) && isEven(actual);

  return { pass, message: () => (pass ? passMessage : failMessage) };
}

const isNumber = expected => !isNaN(parseInt(expected));
const isEven = expected => expected % 2 === 0;
