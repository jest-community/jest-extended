import { matcherHint } from 'jest-matcher-utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () =>
  matcherHint('.not.toBeAround') + '\n\n' + `expected ${actual} not to be around ${expected}`;

const failMessage = (actual, expected) => () =>
  matcherHint('.toBeAround') + '\n\n' + `expected ${actual} to be around ${expected}`;

export default {
  toBeAround: (actual, expected, precision = 2) => {
    const pass = predicate(actual, expected, precision);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }
    return { pass: false, message: failMessage(actual, expected) };
  }
};
