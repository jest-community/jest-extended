import predicate from './predicate';

const EARLIER = new Date('06/02/2018');
const LATER = new Date('07/02/2018');

describe('toBeAfter Predicate', () => {
  test('returns true when given an earlier date', () => {
    expect(predicate(LATER, EARLIER)).toBe(true);
  });

  test('returns false when given a later date', () => {
    expect(predicate(EARLIER, LATER)).toBe(false);
  });
});
