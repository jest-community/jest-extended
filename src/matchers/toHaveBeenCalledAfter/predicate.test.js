import predicate from './predicate';

describe('.toHaveBeenCalledAfter predicate', () => {
  const now = Date.now();
  const lessThan = now - 100;
  const greaterThan = now + 100;

  test('returns true when given an empty array as the first time stamps', () => {
    expect(predicate([])).toBe(true);
  });

  test('returns true when given first timestamps is an empty array and given second time stamps', () => {
    expect(predicate([], [now])).toBe(true);
  });

  test('returns false when given first timestamps and an empty array as the second time stamps', () => {
    expect(predicate([now], [])).toBe(false);
  });

  test('returns false when given first timestamp is less than and second time stamp', () => {
    expect(predicate([now], [greaterThan])).toBe(false);
  });

  test('returns true when given first timestamp is greater than and second time stamp', () => {
    expect(predicate([now], [lessThan])).toBe(true);
  });

  test('returns false when given first timestamps contains a timestamp less than any of the second timestamps', () => {
    expect(predicate([now, lessThan, greaterThan], [now, greaterThan])).toBe(false);
  });

  test('returns true when given first timestamps does not contain a timestamp less than any of the second timestamps', () => {
    expect(predicate([greaterThan, now, greaterThan], [lessThan])).toBe(true);
  });
});
