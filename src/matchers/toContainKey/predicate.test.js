import predicate from './predicate';

const data = { hello: 'world' };

describe('.toContainKey', () => {
  it('passes when given object contains key', () => {
    expect(predicate(data, 'hello')).toBe(true);
  });

  it('fails when given object does not contain key', () => {
    expect(predicate(data, 'missing')).toBe(false);
  });
});
