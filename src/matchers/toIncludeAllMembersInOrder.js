import { contains } from '../utils';

export function toIncludeAllMembersInOrder(actual, expected) {
  const { printReceived, printExpected, matcherHint } = this.utils;
  const options = {
    isNot: this.isNot,
    promise: this.promise,
  };

  // First, check contents.
  const passMessage =
    matcherHint('.not.toIncludeAllMembers') +
    '\n\n' +
    'Expected list to not have all of the following members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  const failMessage =
    matcherHint('.toIncludeAllMembers') +
    '\n\n' +
    'Expected list to have all of the following members:\n' +
    `  ${printExpected(expected)}\n` +
    'Received:\n' +
    `  ${printReceived(actual)}`;

  let pass =
    Array.isArray(actual) && Array.isArray(expected) && expected.every(val => contains(this.equals, actual, val));

  if (!pass) return { pass, message: () => (pass ? passMessage : failMessage) };

  let differingElementIdxs = [];
  // Check if actual has additional items beyond expected.
  if (actual.length > expected.length) {
    differingElementIdxs = [expected.length];
  } else {
    // If not, check order. At this point, they must have the same length, so we
    // can go element by element and fail at the first elements that don't
    // match.

    differingElementIdxs = expected
      .map((element, idx) => {
        return this.equals(element, actual[idx]) ? false : idx;
      })
      .filter(idx => idx !== false);
  }

  pass = differingElementIdxs.length === 0;

  const message = pass
    ? () =>
        // eslint-disable-next-line prefer-template
        this.utils.matcherHint('toIncludeAllMembersInOrder', undefined, undefined, options) +
        '\n\n' +
        `Expected: not ${this.utils.printExpected(expected)}\n` +
        `Received: ${this.utils.printReceived(actual)}`
    : () => {
        const firstDifferingElementIdx = differingElementIdxs[0];
        const firstDifferingElementInActual = actual[firstDifferingElementIdx];
        const firstDifferingElementInExpected = expected[firstDifferingElementIdx];

        return (
          // eslint-disable-next-line prefer-template
          this.utils.matcherHint('toIncludeAllMembersInOrder', undefined, undefined, options) +
          '\n\n' +
          `First differing element (index ${firstDifferingElementIdx}):\n\n` +
          `Expected: ${this.utils.printExpected(firstDifferingElementInExpected)}\n` +
          `Received: ${this.utils.printReceived(firstDifferingElementInActual)}`
        );
      };

  return { actual, message, pass };
}
