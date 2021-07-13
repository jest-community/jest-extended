import predicate from './predicate';

const EARLIER = new Date('01/09/2019');
const LATER = new Date('07/09/2019');

describe('toBeAfterOrEqualTo Predicate', () => {
  test('returns true when given an earlier date', () => {
    expect(predicate(LATER, EARLIER)).toBe(true);
  });

  test('returns true when given an equal date', () => {
    expect(predicate(EARLIER, EARLIER)).toBe(true);
  });

  test('returns false when given a later date', () => {
    expect(predicate(EARLIER, LATER)).toBe(false);
  });
});
