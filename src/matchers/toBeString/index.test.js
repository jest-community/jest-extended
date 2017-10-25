import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeString', () => {
  it('passes when given a string literal', () => {
    expect('string type').toBeString();
  });

  it('passes when given an object of type string', () => {
    expect(new String('string type')).toBeString();
  });

  it('fails when not given a string', () => {
    expect(() => expect(5).toBeString()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeString', () => {
  each([
    [false],
    [0],
    [{}],
    [[]],
    [() => {}],
    [undefined],
    [null],
    [NaN]
  ]).it('passes when not item is not of type string: %s', given => {
    expect(given).not.toBeString();
  });

  it('fails when given a string literal', () => {
    expect(() => expect('').not.toBeString()).toThrowErrorMatchingSnapshot();
  });

  it('fails when given an object of type string', () => {
    expect(() => expect(new String('string type')).not.toBeString()).toThrowErrorMatchingSnapshot();
  });
});
