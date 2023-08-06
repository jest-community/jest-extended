import { diffStringsRaw, DIFF_EQUAL } from "jest-diff";
import { printExpected, printReceived } from "../utils/print";

const removeWhitespace = str => str.trim().replace(/\s+/g, "");

const getDiff = (received, expected) => {
  /* calculate diff of received w.r.t expected string */
  const diff = diffStringsRaw(expected, received);

  /* mark every diff result object with value of white-space as DIFF_EQUAL */
  diff.forEach(diffObject => {
    if (diffObject[1].trim()) return;
    diffObject[0] = DIFF_EQUAL;
  });

  return diff;
};

export function toEqualIgnoringWhitespace(actual, expected) {
  const { matcherHint, EXPECTED_COLOR } = this.utils;

  /* determine whether strings are equal after removing white-space */
  const pass = removeWhitespace(actual) === removeWhitespace(expected);

  /* eslint-disable indent */ // prettier conflicts with indent rule
  return {
    pass,
    message: pass
      ? () =>
          matcherHint(".not.toEqualIgnoringWhitespace") +
          "\n\n" +
          "Expected values to not be equal while ignoring white-space (using ===):\n" +
          `Expected: not  ${EXPECTED_COLOR(expected)}\n\n`
      : () => {
          const diff = getDiff(actual, expected);
          return (
            matcherHint(".toEqualIgnoringWhitespace") +
            "\n\n" +
            "Expected values to be equal while ignoring white-space (using ===):\n" +
            `Expected:\n  ${printExpected(this.utils, diff)}\n\n` +
            `Received:\n  ${printReceived(this.utils, diff)}`
          );
        },
  };
  /* eslint-enable indent */
}
