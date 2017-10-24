import matcher from './';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAllEntries', () => {
  it('passes when object only contains all of the given entries', () => {
    expect(data).toContainAllEntries([['a', 'foo'], ['b', 'bar'], ['c', 'baz']]);
  });

  it('fails when object does not only contain all of the given entries', () => {
    expect(() => expect(data).toContainAllEntries([['a', 'foo'], ['b', 'bar']])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAllEntries', () => {
  it('passes when object does not only contain all of the given entries', () => {
    expect(data).not.toContainAllEntries([['a', 'qux'], ['b', 'bar'], ['c', 'baz']]);
  });

  it('fails when object only contains all of the given entries', () => {
    expect(() =>
      expect(data).not.toContainAllEntries([['b', 'bar'], ['a', 'foo'], ['c', 'baz']])
    ).toThrowErrorMatchingSnapshot();
  });
});
