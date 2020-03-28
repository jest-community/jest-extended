import { matcherHint } from 'jest-matcher-utils';
import predicate from './predicate';

const passMessage = () => () => {
  return (
    matcherHint('.not.toHaveBeenCalledOnce') +
    '\n\n' +
    'Expected mock function to have been called any amount of times but one, but it was called exactly once.'
  );
};

const failMessage = mockFn => () => {
  return (
    matcherHint('.toHaveBeenCalledOnce') +
    '\n\n' +
    'Expected mock function to have been called exactly once, but it was called:\n' +
    `  ${mockFn.mock.calls.length} times`
  );
};

export default {
  toHaveBeenCalledOnce: received => {
    const pass = predicate(received);

    return {
      pass,
      message: pass ? passMessage(received) : failMessage(received),
      actual: received
    };
  }
};
