import predicate from './predicate';

const EARLIER = new Date('01/09/2019');
const LATER = new Date('07/09/2019');

describe('toBeBeforeOrEqualTo Predicate', () => {
  test('returns true when given a later date', () => {
    expect(predicate(EARLIER, LATER)).toBe(true);
  });

  test('returns true when given an equal date', () => {
    expect(predicate(EARLIER, EARLIER)).toBe(true);
  });

  test('returns false when given an earlier date', () => {
    expect(predicate(LATER, EARLIER)).toBe(false);
  });
});
