import { matcherHint, printReceived, printWithType } from 'jest-matcher-utils';

import { isJestMockOrSpy } from '../../utils';

import predicate from './predicate';

const passMessage = () => () =>
  matcherHint('.not.toHaveBeenCalledOnce') +
  '\n\n' +
  'Expected mock function to have been called any amount of times but one, but it was called exactly once.';

const failMessage = mockFn => () => {
  return (
    matcherHint('.toHaveBeenCalledOnce') +
    '\n\n' +
    'Expected mock function to have been called exactly once, but it was called:\n' +
    `  ${printReceived(mockFn.mock.calls.length)} times`
  );
};

const mockCheckFailMessage = value => () => {
  return (
    matcherHint('.toHaveBeenCalledAfter') +
    '\n\n' +
    `Matcher error: ${printReceived('received')} must be a mock or spy function` +
    '\n\n' +
    printWithType('Received', value, printReceived)
  );
};

export function toHaveBeenCalledOnce(received) {
  if (!isJestMockOrSpy(received)) {
    return { pass: false, message: mockCheckFailMessage(received) };
  }

  const pass = predicate(received);

  return {
    pass,
    message: pass ? passMessage(received) : failMessage(received),
    actual: received,
  };
}
