import { determinePropertyMessage } from '../../utils';

import predicate from './predicate';

const passMessage = (utils, actual, expected) => () =>
  `${utils.matcherHint('.not.toBeArrayOfSize')}

Expected value to not be an array of size:
  ${utils.printExpected(expected)}
Received:
  value: ${utils.printReceived(actual)}
  length: ${utils.printReceived(determinePropertyMessage(actual, 'length'))}`;

const failMessage = (utils, actual, expected) => () =>
  `${utils.matcherHint('.toBeArrayOfSize')}

Expected value to be an array of size:
  ${utils.printExpected(expected)}
Received:
  value: ${utils.printReceived(actual)}
  length: ${utils.printReceived(determinePropertyMessage(actual, 'length'))}`;

export function toBeArrayOfSize(actual, expected) {
  const pass = predicate(actual, expected);
  if (pass) {
    return { pass: true, message: passMessage(this.utils, actual, expected) };
  }

  return { pass: false, message: failMessage(this.utils, actual, expected) };
}
