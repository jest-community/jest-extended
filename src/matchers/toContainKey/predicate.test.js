import predicate from './predicate';

const data = { hello: 'world' };

describe('.toContainKey', () => {
  test('passes when given object contains key', () => {
    expect(predicate(data, 'hello')).toBe(true);
  });

  test('fails when given object does not contain key', () => {
    expect(predicate(data, 'missing')).toBe(false);
  });
});
