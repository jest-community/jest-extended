import { diffStringsRaw, DIFF_EQUAL } from 'jest-diff';
import { getType } from 'jest-get-type';
import { printExpected, printReceived } from '../utils/print';

const removeWhitespace = (str: any) => str.trim().replace(/\s+/g, '');

const getDiff = (received: string, expected: string) => {
  /* calculate diff of received w.r.t expected string */
  const diff = diffStringsRaw(expected, received, false);

  /* mark every diff result object with value of white-space as DIFF_EQUAL */
  diff.forEach(diffObject => {
    if (diffObject[1].trim()) return;
    diffObject[0] = DIFF_EQUAL;
  });

  return diff;
};

export function toEqualIgnoringWhitespace(actual: unknown, expected: string) {
  // @ts-expect-error OK to have implicit any for this
  const { matcherHint, EXPECTED_COLOR } = this.utils;

  /* determine whether strings are equal after removing white-space */
  const pass = getType(actual) === 'string' && removeWhitespace(actual) === removeWhitespace(expected);

  /* eslint-disable indent */ // prettier conflicts with indent rule
  return {
    pass,
    message: pass
      ? () =>
          matcherHint('.not.toEqualIgnoringWhitespace') +
          '\n\n' +
          'Expected values to not be equal while ignoring white-space (using ===):\n' +
          `Expected: not  ${EXPECTED_COLOR(expected)}\n\n`
      : () => {
          const diff = getDiff(String(actual), expected);
          return (
            matcherHint('.toEqualIgnoringWhitespace') +
            '\n\n' +
            'Expected values to be equal while ignoring white-space (using ===):\n' +
            // @ts-expect-error OK to have implicit any for this
            `Expected:\n  ${printExpected(this.utils, diff)}\n\n` +
            // @ts-expect-error OK to have implicit any for this
            `Received:\n  ${printReceived(this.utils, diff)}`
          );
        },
  };
  /* eslint-enable indent */
}
