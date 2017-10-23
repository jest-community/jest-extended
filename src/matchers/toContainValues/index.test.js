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

describe('.toContainValues', () => {
  it('passes when given object contains primitive values', () => {
    expect(shallow).toContainValues(['world', false]);
  });

  it('passes when given object contains all values including objects', () => {
    expect(deep).toContainValues([{ hello: 'world', foo: 0, bar: false }, 'duck']);
  });

  it('passes when given object contains all values including arrays', () => {
    expect(deepArray).toContainValues(['duck', [{ hello: 'world', foo: 0, bar: false }]]);
  });

  it('fails when given object does not contain all primitive values', () => {
    expect(() => expect(shallow).toContainValues(['hello', 0, false])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object does not contain all values including objects', () => {
    expect(() => expect(deep).toContainValues([{ hello: 'world' }])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object does not contain all values including arrays', () => {
    expect(() => expect(deepArray).toContainValues(['duck', [{ hello: 'world' }]])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainValues', () => {
  it('passes when given object does not contain all primitive values', () => {
    expect(shallow).not.toContainValues(['foo', 0]);
  });

  it('passes when given object does not contain all values including objects', () => {
    expect(deep).not.toContainValues(['duck', { foo: 'bar' }]);
  });

  it('passes when given object does not contain all values including arrays', () => {
    expect(deepArray).not.toContainValues(['duck', [{ foo: 'bar' }]]);
  });

  it('fails when given object contains primitive values', () => {
    expect(() => expect(shallow).not.toContainValues(['world', false])).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object contains all values including objects', () => {
    expect(() =>
      expect(deep).not.toContainValues([{ hello: 'world', foo: 0, bar: false }, 'duck'])
    ).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object contains all values including arrays', () => {
    expect(() =>
      expect(deepArray).not.toContainValues(['duck', [{ hello: 'world', foo: 0, bar: false }]])
    ).toThrowErrorMatchingSnapshot();
  });
});
