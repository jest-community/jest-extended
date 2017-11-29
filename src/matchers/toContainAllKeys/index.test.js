import matcher from './';

expect.extend(matcher);

const data = { a: 'hello', b: 'world' };

describe('.toContainAllKeys', () => {
  test('passes when given object contains all keys', () => {
    expect(data).toContainAllKeys(['a', 'b']);
  });

  test('fails when given object does not contain all keys', () => {
    expect(() => expect(data).toContainAllKeys(['a'])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAllKeys', () => {
  test('passes when given object does not contain key', () => {
    expect(data).not.toContainAllKeys(['a']);
  });

  test('fails when given object contains all keys', () => {
    expect(() => expect(data).not.toContainAllKeys(['b', 'a'])).toThrowErrorMatchingSnapshot();
  });
});
