import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (firsTimestamps, secondTimestamps) => () =>
  matcherHint('.not.toHaveBeenCalledBefore') +
  '\n\n' +
  'Expected first mock to not have been called before, timestamps:\n' +
  `  ${printExpected(firsTimestamps)}\n` +
  'Received second mock with timestamps:\n' +
  `  ${printReceived(secondTimestamps)}`;

const failMessage = (firsTimestamps, secondTimestamps) => () =>
  matcherHint('.toHaveBeenCalledBefore') +
  '\n\n' +
  'Expected first mock to have been called before, timestamps:\n' +
  `  ${printExpected(firsTimestamps)}\n` +
  'Received second mock with timestamps:\n' +
  `  ${printReceived(secondTimestamps)}`;

export default {
  toHaveBeenCalledBefore: (firstMock, secondMock) => {
    const firsTimestamps = firstMock.mock.timestamps;
    const secondTimestamps = secondMock.mock.timestamps;
    const pass = predicate(firstMock.mock.timestamps, secondTimestamps);
    if (pass) {
      return { pass: true, message: passMessage(firsTimestamps, secondTimestamps) };
    }

    return { pass: false, message: failMessage(firsTimestamps, secondTimestamps) };
  }
};
