import each from 'jest-each';
import predicate from './predicate';

describe('toBeString Predicate', () => {
  it('returns true when given a string literal', () => {
    expect(predicate('string example')).toBe(true);
  });

  it('returns true when given a string object', () => {
    expect(predicate(new String('string example'))).toBe(true);
  });

  each([[false], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]]).it('returns false when given: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
