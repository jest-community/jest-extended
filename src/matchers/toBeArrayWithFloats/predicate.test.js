import predicate from './predicate';

describe('toBeArrayWithFloats predicate - positive test cases', () => {
  test('returns true for empty arrays', () => {
    expect(predicate([], [])).toBe(true);
  });

  test('returns true for arrays with same floats with default precision', () => {
    expect(predicate([1.0001, 2.123], [1.00011, 2.123])).toBe(true);
  });

  test('returns true for arrays with same floats with specified precision', () => {
    expect(predicate([1.231, 2.344], [1.23, 2.34], 2)).toBe(true);
  });

  test('returns true when floats do not differ after rounding', () => {
    expect(predicate([1.0001], [1.00014])).toBe(true);
  });
});

describe('toBeArrayWithFloats predicate - negative test cases', () => {
  test('returns false for arrays with different floats with default precision', () => {
    expect(predicate([1.1111], [1.1112])).toBe(false);
  });

  test('returns false for arrays with different floats with specified precision', () => {
    expect(predicate([1.1334], [1.1234], 2)).toBe(false);
  });

  test('returns false when floats differ by single digit due to rounding', () => {
    expect(predicate([1.0001], [1.00015])).toBe(false);
  });
});
