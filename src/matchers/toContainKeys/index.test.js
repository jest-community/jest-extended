import matcher from './';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainKeys', () => {
  it('passes when object contains all keys', () => {
    expect(data).toContainKeys(['b', 'c']);
  });

  it('fails when object does not contain all keys', () => {
    expect(() => expect(data).toContainKeys(['a', 'd'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainKeys', () => {
  it('passes when object does not contain all keys', () => {
    expect(data).not.toContainKeys(['d']);
  });

  it('fails when object contains all keys', () => {
    expect(() => expect(data).not.toContainKeys(['a', 'b', 'c'])).toThrowErrorMatchingSnapshot();
  });
});
