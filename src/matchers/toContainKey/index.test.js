import matcher from './';

expect.extend(matcher);

const data = { hello: 'world' };

describe('.toContainKey', () => {
  it('passes when given object contains key', () => {
    expect(data).toContainKey('hello');
  });

  it('fails when given object does not contain key', () => {
    expect(() => expect(data).toContainKey('missing')).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainKey', () => {
  it('passes when given object does not contain key', () => {
    expect(data).not.toContainKey('missing');
  });

  it('fails when given object contains key', () => {
    expect(() => expect(data).not.toContainKey('hello')).toThrowErrorMatchingSnapshot();
  });
});
