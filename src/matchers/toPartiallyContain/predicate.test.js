import { equals } from 'expect/build/jasmineUtils';
import predicate from './predicate';

describe('.toPartiallyContain', () => {
  const item = { foo: 'bar', baz: 'qux' };

  test('passes when array partially contains the given item', () => {
    expect(predicate(equals, [{ foo: 'bar', baz: 'qux', bax: 'zax' }], item)).toBe(true);
  });

  test('fails when array does not contain the given item', () => {
    expect(predicate(equals, [{ a: 1, b: 2 }], item)).toBe(false);
  });
});
