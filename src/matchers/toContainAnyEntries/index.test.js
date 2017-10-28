import matcher from './';

expect.extend(matcher);

const data = { a: 'foo', b: 'bar', c: 'baz' };

describe('.toContainAnyEntries', () => {
  it('passes when given object contains atleast one of the given entries', () => {
    expect(data).toContainAnyEntries([['a', 'qux'], ['a', 'foo']]);
  });

  it('fails when given object does not contain any of the given entries', () => {
    expect(() => expect(data).toContainAnyEntries([['a', 'qux'], ['b', 'foo']])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAnyEntries', () => {
  it('passes when given object does not contain any of the given entries', () => {
    expect(data).not.toContainAnyEntries([['a', 'qux'], ['b', 'foo']]);
  });

  it('fails when given object contains atleast one of the given entries', () => {
    expect(() => expect(data).not.toContainAnyEntries([['a', 'qux'], ['a', 'foo']])).toThrowErrorMatchingSnapshot();
  });
});
