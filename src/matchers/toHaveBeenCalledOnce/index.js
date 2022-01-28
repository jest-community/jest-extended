import { isJestMockOrSpy } from '../../utils';

import predicate from './predicate';

const passMessage = utils => () =>
  utils.matcherHint('.not.toHaveBeenCalledOnce') +
  '\n\n' +
  'Expected mock function to have been called any amount of times but one, but it was called exactly once.';

const failMessage = (utils, mockFn) => () => {
  return (
    utils.matcherHint('.toHaveBeenCalledOnce') +
    '\n\n' +
    'Expected mock function to have been called exactly once, but it was called:\n' +
    `  ${utils.printReceived(mockFn.mock.calls.length)} times`
  );
};

const mockCheckFailMessage = (utils, value) => () => {
  return (
    utils.matcherHint('.toHaveBeenCalledAfter') +
    '\n\n' +
    `Matcher error: ${utils.printReceived('received')} must be a mock or spy function` +
    '\n\n' +
    utils.printWithType('Received', value, utils.printReceived)
  );
};

export function toHaveBeenCalledOnce(received) {
  if (!isJestMockOrSpy(received)) {
    return { pass: false, message: mockCheckFailMessage(this.utils, received) };
  }

  const pass = predicate(received);

  return {
    pass,
    message: pass ? passMessage(this.utils, received) : failMessage(this.utils, received),
    actual: received,
  };
}
