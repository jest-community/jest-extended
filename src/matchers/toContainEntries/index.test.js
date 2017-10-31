import matcher from './';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainEntries', () => {
  it('passes when object contains all of the given entries', () => {
    expect(data).toContainEntries([['c', 'baz'], ['a', 'foo']]);
  });

  it('fails when object does not contain all of the given entries', () => {
    expect(() => expect(data).toContainEntries(['b', 'foo'], ['a', 'foo'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainEntries', () => {
  it('passes when object does not contain all of the given entries', () => {
    expect(data).not.toContainEntries([['a', 'qux']]);
  });

  it('fails when object contains all of the given entries', () => {
    expect(() => expect(data).not.toContainEntries([['b', 'bar'], ['c', 'baz']])).toThrowErrorMatchingSnapshot();
  });
});
