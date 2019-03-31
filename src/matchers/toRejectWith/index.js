import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';

const passMessage = error => () =>
  matcherHint('.not.toRejectWith', 'received', '') +
  '\n\n' +
  'Expected promise not to reject with:\n' +
  `  ${printReceived(error)}\n` +
  'But it did.';

const resolvedMessage = (error, value) => () =>
  matcherHint('.toRejectWith', 'received', '') +
  '\n\n' +
  'Expected promise to reject with:\n' +
  `  ${printExpected(error)}\n` +
  'However it resolved with:\n' +
  `  ${printReceived(value)}\n`;

const rejectedWithUnexpectedMessage = (error, caught) => () =>
  matcherHint('.toRejectWith', 'received', '') +
  '\n\n' +
  'Expected promise to reject with:\n' +
  `  ${printExpected(error)}\n` +
  'However it rejected with:\n' +
  `  ${printReceived(caught)}\n`;

const errorNotDefined = caught => () =>
  matcherHint('.toRejectWith', 'received', '') +
  '\n\n' +
  'Expected error not specified, however promise rejected with:\n' +
  `  ${printReceived(caught)}\n`;

export default {
  toRejectWith: async (promise, error, comparer) => {
    try {
      const value = await promise;
      return {
        pass: false,
        message: resolvedMessage(error, value)
      };
    } catch (caught) {
      comparer = typeof comparer === 'function' ? comparer : Object.is;

      if (typeof error === 'undefined') {
        return {
          pass: false,
          message: errorNotDefined(caught)
        };
      }

      const pass = comparer(error, caught);
      const message = pass ? passMessage(error) : rejectedWithUnexpectedMessage(error, caught);
      return { pass, message };
    }
  }
};
