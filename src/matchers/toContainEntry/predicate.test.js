import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainEntry', () => {
  test('passes when object contains given entry', () => {
    expect(predicate(equals, data, ['a', 'foo'])).toBe(true);
    expect(predicate(equals, data, ['b', 'bar'])).toBe(true);
    expect(predicate(equals, data, ['c', 'baz'])).toBe(true);
  });

  test('passes when object contain given entry with nested value', () => {
    expect(predicate(equals, { data }, ['data', data])).toBe(true);
  });

  test('fails when object does not contain given entry', () => {
    expect(predicate(equals, data, ['a', 'qux'])).toBe(false);
  });
});
