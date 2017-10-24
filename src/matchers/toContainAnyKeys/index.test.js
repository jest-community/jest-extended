import matcher from './';

expect.extend(matcher);

const testObject = {
  name: 'Steve the Pirate',
  age: 37
};

describe('.toContainAnyKeys', () => {
  it('passes when object contains one or more keys', () => {
    expect(testObject).toContainAnyKeys(['name']);
  });

  it('fails when object does not contain any keys', () => {
    expect(() => expect(testObject).toContainAnyKeys(['occupation'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAnyKeys', () => {
  it('passes when object does not contain any keys', () => {
    expect(testObject).not.toContainAnyKeys(['occupation']);
  });

  it('fails when object contains one or more keys', () => {
    expect(() => expect(testObject).not.toContainAnyKeys(['name', 'age'])).toThrowErrorMatchingSnapshot();
  });
});
