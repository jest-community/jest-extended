import matcher from './';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainEntry', () => {
  it('passes when object contains given entry', () => {
    expect(data).toContainEntry(['a', 'foo']);
    expect(data).toContainEntry(['b', 'bar']);
    expect(data).toContainEntry(['c', 'baz']);
  });

  it('fails when object does not contain given entry', () => {
    expect(() => expect(data).toContainEntry(['b', 'foo'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainEntry', () => {
  it('passes when object does not contain given entry', () => {
    expect(data).not.toContainEntry(['a', 'qux']);
  });

  it('fails when object contains given entry', () => {
    expect(() => expect(data).not.toContainEntry(['b', 'bar'])).toThrowErrorMatchingSnapshot();
  });
});
