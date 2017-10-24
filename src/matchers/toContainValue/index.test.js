import matcher from './';

expect.extend(matcher);

const shallow = { hello: 'world' };
const deep = { message: shallow };
const deepArray = { message: [shallow] };

describe('.toContainValue', () => {
  it('passes when given object contains primitive value', () => {
    expect(shallow).toContainValue('world');
  });

  it('passes when given object contains falsy primitive value', () => {
    expect({ foo: false }).toContainValue(false);
  });

  it('passes when given object contains object value', () => {
    expect(deep).toContainValue({ hello: 'world' });
  });

  it('passes when given object contains array value', () => {
    expect(deepArray).toContainValue([{ hello: 'world' }]);
  });

  it('fails when given object does not contain primitive value', () => {
    expect(() => expect(shallow).toContainValue('hello')).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object does not contain object value', () => {
    expect(() => expect(deep).toContainValue({ world: 'hello' })).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object does not contain array value', () => {
    expect(() => expect(deepArray).toContainValue([{ world: 'hello' }])).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toContainValue', () => {
  const shallow = { hello: 'world' };
  const deep = { message: shallow };
  const deepArray = { message: [shallow] };

  it('passes when given object does not contain primitive value', () => {
    expect(shallow).not.toContainValue('foo');
  });

  it('passes when given object does not contain object value', () => {
    expect(deep).not.toContainValue({ foo: 'bar' });
  });

  it('passes when given object does not contain array value', () => {
    expect(deepArray).not.toContainValue([{ foo: 'bar' }]);
  });

  it('fails when given object contains primitive value', () => {
    expect(() => expect(shallow).not.toContainValue('world')).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object contains object value', () => {
    expect(() => expect(deep).not.toContainValue({ hello: 'world' })).toThrowErrorMatchingSnapshot();
  });

  it('fails when given object contains array value', () => {
    expect(() => expect(deepArray).not.toContainValue([{ hello: 'world' }])).toThrowErrorMatchingSnapshot();
  });
});
