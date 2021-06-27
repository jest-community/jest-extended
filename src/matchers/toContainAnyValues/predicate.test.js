import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('toContainAnyValues Predicate', () => {
  test('passes when object contains at least one of the given values ', () => {
    expect(predicate(equals, data, ['qux', 'foo'])).toBe(true);
    expect(predicate(equals, data, ['qux', 'bar'])).toBe(true);
    expect(predicate(equals, data, ['foo', 'bar'])).toBe(true);
    expect(predicate(equals, data, ['baz'])).toBe(true);
  });

  test('fails when object does not contain any given values', () => {
    expect(predicate(equals, data, ['qux'])).toBe(false);
    expect(predicate(equals, data, ['qux', 'zoo'])).toBe(false);
  });
});
