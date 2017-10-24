import each from 'jest-each';
import predicate from './predicate';

describe('toBeExpected Predicate', () => {
  each([[{}], [[]], [() => {}]]).it('returns true when given extensible object: %s', given => {
    expect(predicate(given)).toBe(true);
  });

  each([
    [false],
    [''],
    [0],
    [undefined],
    [null],
    [NaN],
    [Object.seal({})],
    [Object.freeze({})]
  ]).it('returns false when given non-extensible object: %s', given => {
    expect(predicate(given)).toBe(false);
  });
});
