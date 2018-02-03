import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils';
import { determinePropertyMessage } from '../../utils';

import predicate from './predicate';

const passMessage = (actual, expected) => () => `${matcherHint('.not.toBeArrayOfSize')}

Expected value to not be an array of size:
  ${printExpected(expected)}
Received:
  value: ${printReceived(actual)}
  length: ${printReceived(determinePropertyMessage(actual, 'length'))}`;

const failMessage = (actual, expected) => () => `${matcherHint('.toBeArrayOfSize')}

Expected value to be an array of size:
  ${printExpected(expected)}
Received:
  value: ${printReceived(actual)}
  length: ${printReceived(determinePropertyMessage(actual, 'length'))}`;

export default {
  toBeArrayOfSize: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }

    return { pass: false, message: failMessage(actual, expected) };
  }
};
