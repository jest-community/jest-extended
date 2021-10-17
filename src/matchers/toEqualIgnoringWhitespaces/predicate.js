import { diffStringsRaw, DIFF_EQUAL } from 'jest-diff';

export default (received, expected) => {
  /* calculate diff of received w.r.t expected string */
  const diff = diffStringsRaw(expected, received);

  /* mark every diff result object with value as white-space as DIFF_EQUAL*/
  diff.forEach(diffObject => {
    if (diffObject[1].trim()) return;
    diffObject[0] = DIFF_EQUAL;
  });

  /* determine strings are equal if every diff result object has operation === DIFF_EQUAL */
  const pass = diff.every(diffObject => diffObject[0] === DIFF_EQUAL);

  return {
    diff,
    pass,
  };
};
