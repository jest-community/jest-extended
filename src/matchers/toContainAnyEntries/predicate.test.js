import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAnyEntries', () => {
  test('passes when given object contains entries', () => {
    expect(
      predicate(equals, data, [
        ['a', 'qux'],
        ['a', 'foo'],
        ['x', 'foo'],
      ]),
    ).toBe(true);
  });

  test('passes when given object contains entries with nested values', () => {
    expect(
      predicate(equals, { hello: { message: 'world' } }, [
        ['hello', { message: 'world' }],
        ['a', 'foo'],
        ['x', 'foo'],
      ]),
    ).toBe(true);
  });

  test('fails when given object does not contain entries', () => {
    expect(
      predicate(equals, data, [
        ['a', 'qux'],
        ['b', 'foo'],
        ['x', 'foo'],
      ]),
    ).toBe(false);
  });
});
