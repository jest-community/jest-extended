import predicate from './predicate';

const TESTDATE1 = new Date('01/09/2019');
const TESTDATE2 = new Date('10/09/2019');
const TESTDATE3 = new Date('03/09/2019');

describe('toBeBetween Predicate', () => {
  test('returns true when date is in given range', () => {
    expect(predicate(TESTDATE3, TESTDATE1, TESTDATE2)).toBe(true);
  });

  test('returns false when date is not in given range', () => {
    expect(predicate(TESTDATE1, TESTDATE3, TESTDATE2)).toBe(false);
  });
});
