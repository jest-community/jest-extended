import predicate from './predicate';

describe('.toHaveBeenCalledOnce predicate', () => {
  let mock;
  beforeEach(() => {
    // Refresh on each test
    mock = jest.fn();
  });

  test('returns true if mock was invoked exactly once', () => {
    mock();
    expect(predicate(mock)).toBe(true);
  });

  test('returns true if mock was invoked any amount of times but one', () => {
    expect(predicate(mock)).toBe(false);

    mock();
    mock();
    expect(predicate(mock)).toBe(false);

    new Array(20).fill(mock).forEach(e => e());
    expect(predicate(mock)).toBe(false);
  });
});
