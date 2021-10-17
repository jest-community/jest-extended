import { diffStringsRaw, DIFF_EQUAL } from 'jest-diff';

const removeWhitespace = str => str.trim().replace(/\s+/g, '');

export default (received, expected) => {
  /* calculate diff of received w.r.t expected string */
  const diff = diffStringsRaw(expected, received);

  /* mark every diff result object with value of white-space as DIFF_EQUAL */
  diff.forEach(diffObject => {
    if (diffObject[1].trim()) return;
    diffObject[0] = DIFF_EQUAL;
  });

  /* determine whether strings are equal after removing white-space */
  const pass = removeWhitespace(received) === removeWhitespace(expected);

  return {
    diff,
    pass,
  };
};
