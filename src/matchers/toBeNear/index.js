import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (received, value, offset) => () =>
  matcherHint('.not.toBeNear', 'received', 'value', { secondArgument: 'offset' }) +
  '\n\n' +
  `Value:    ${printExpected(value)}\n` +
  `Offset:   ${printExpected(offset)}\n` +
  `Interval: [${printExpected(value - offset)}, ${printExpected(value + offset)}]\n` +
  `Received: ${printReceived(received)}`;

const failMessage = (received, value, offset) => () =>
  matcherHint('.toBeNear', 'received', 'value', { secondArgument: 'offset' }) +
  '\n\n' +
  `Value:    ${printExpected(value)}\n` +
  `Offset:   ${printExpected(offset)}\n` +
  `Interval: [${printExpected(value - offset)}, ${printExpected(value + offset)}]\n` +
  `Received: ${printReceived(received)}`;

export default {
  toBeNear: (received, value, offset) => {
    const pass = predicate(received, value, offset);
    if (pass) {
      return { pass: true, message: passMessage(received, value, offset) };
    }
    return { pass: false, message: failMessage(received, value, offset) };
  }
};
