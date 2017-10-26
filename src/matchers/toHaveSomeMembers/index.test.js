import matcher from './';

expect.extend(matcher);

describe('.toHaveSomeMembers', () => {
  const shallow = { hello: 'world' };
  const deep = { message: shallow };

  it('passes when given array is a subset', () => {
    expect([2, 3]).toHaveSomeMembers([1, 2, 3]);
  });

  it('passes when given array contains some of the members', () => {
    expect([1, 2, 3]).toHaveSomeMembers([2, 3, 4]);
  });

  it('passes when given array contains object value', () => {
    expect([shallow]).toHaveSomeMembers([shallow, deep]);
  });

  it('fails when given array does not contain any members ', () => {
    expect(() => expect([4, 5, 6]).toHaveSomeMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object is not an array', () => {
    expect(() => expect(7).toHaveSomeMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });

  it('fails when expected object does not contain array value', () => {
    expect(() => expect([1, 2, 3]).toHaveSomeMembers('world')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toHaveSomeMembers', () => {
  const shallow = { hello: 'world' };

  it('passes when given array does not contain primitive value', () => {
    expect(['hola', 'mundo']).not.toHaveSomeMembers(['hello', 'world']);
  });

  it('passes when given array does not contain object value', () => {
    expect([{ hello: 'world' }]).not.toHaveSomeMembers([{ world: 'hello' }]);
  });

  it('passes when given object is not array', () => {
    expect(7).not.toHaveSomeMembers([7]);
  });

  it('fails when given object contains primitive value', () => {
    expect(() => expect([7]).not.toHaveSomeMembers([7, 8])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given array contains object value', () => {
    expect(() => expect([{ foo: 'bar' }]).not.toHaveSomeMembers([{ foo: 'bar' }])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given array contains array value', () => {
    expect(() => expect([[shallow]]).not.toHaveSomeMembers([[shallow], 7])).toThrowErrorMatchingSnapshot();
  });
});
