import matcher from './';

expect.extend(matcher);

const shallow = {
  hello: 'world',
  foo: 0,
  bar: false
};
const deep = {
  message: shallow,
  donald: 'duck'
};
const deepArray = {
  message: [shallow],
  donald: 'duck'
};

describe('.toContainAllValues', () => {
  it('passes when given object contains primitive values', () => {
    expect(shallow).toContainAllValues(['world', 0, false]);
  });

  it('passes when given object contains all values including objects', () => {
    expect(deep).toContainAllValues([{ hello: 'world', foo: 0, bar: false }, 'duck']);
  });

  it('passes when given object contains all values including arrays', () => {
    expect(deepArray).toContainAllValues(['duck', [{ hello: 'world', foo: 0, bar: false }]]);
  });

  it('fails when given object does not contain all primitive values', () => {
    expect(() => expect(shallow).toContainAllValues(['hello', 0, false])).toThrowErrorMatchingSnapshot();
    expect(() => expect(shallow).toContainAllValues(['world', 0])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object does not contain all values including objects', () => {
    expect(() => expect(deep).toContainAllValues([{ hello: 'world' }])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object does not contain all values including arrays', () => {
    expect(() => expect(deepArray).toContainAllValues(['duck', [{ hello: 'world' }]])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainAllValues', () => {
  it('passes when given object does not contain all primitive values', () => {
    expect(shallow).not.toContainAllValues(['foo', 0]);
  });

  it('passes when given object does not contain all values including objects', () => {
    expect(deep).not.toContainAllValues(['duck', { foo: 'bar' }]);
  });

  it('passes when given object does not contain all values including arrays', () => {
    expect(deepArray).not.toContainAllValues(['duck', [{ foo: 'bar' }]]);
  });

  it('fails when given object contains primitive values', () => {
    expect(() => expect(shallow).not.toContainAllValues(['world', 0, false])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object contains all values including objects', () => {
    expect(() =>
      expect(deep).not.toContainAllValues([{ hello: 'world', foo: 0, bar: false }, 'duck'])
    ).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object contains all values including arrays', () => {
    expect(() =>
      expect(deepArray).not.toContainAllValues(['duck', [{ hello: 'world', foo: 0, bar: false }]])
    ).toThrowErrorMatchingSnapshot();
  });
});
