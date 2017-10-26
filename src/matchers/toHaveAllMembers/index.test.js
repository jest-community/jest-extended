import matcher from './';

expect.extend(matcher);

describe('.toHaveAllMembers', () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 2];

  it('passes when array values matches the members of the set', () => {
    expect(array1).toHaveAllMembers([2, 1, 3]);
    expect(array2).toHaveAllMembers([2, 1]);
  });

  it('fails when array values do not contain any of the members of the set', () => {
    expect(() => expect([4, 5, 6]).toHaveAllMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object is not an array', () => {
    expect(() => expect(2).toHaveAllMembers([1, 2, 3])).toThrowErrorMatchingSnapshot();
  });

  it('fails when expected object is not an array', () => {
    expect(() => expect(array1).toHaveAllMembers(2)).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toHaveAllMembers', () => {
  const array1 = [1, 2, 3];

  it('passes when array values does not contain any members of the set', () => {
    expect(array1).not.toHaveAllMembers([4, 5, 6]);
  });

  it('passes when given object is not an array', () => {
    expect(4).not.toHaveAllMembers([4, 5, 6]);
  });

  it('fails when array values matches the members of the set', () => {
    expect(() => expect(array1).not.toHaveAllMembers([2, 1, 3])).toThrowErrorMatchingSnapshot();
  });
});
