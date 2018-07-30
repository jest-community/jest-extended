import predicate from './predicate';

const EARLIER = new Date('2018-06-01T22:00:00.000Z');
const LATER = new Date('2018-06-02T22:00:00.000Z');

describe('toBeAfter Predicate', () => {
  test('returns true when given an earlier date', () => {
    expect(predicate(LATER, EARLIER)).toBe(true);
  });

  test('returns false when given a later date', () => {
    expect(predicate(EARLIER, LATER)).toBe(false);
  });
});
