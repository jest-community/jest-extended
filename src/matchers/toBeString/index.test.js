import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeString', () => {
  it('passes when given a string', () => {
    expect('A string').toBeString();
  });

  it('fails when not given a string', () => {
    expect(() => expect(false).toBeString()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeString', () => {
  each([
    [false],
    [true],
    [0],
    [{}],
    [[]],
    [() => {}],
    [undefined],
    [null],
    [NaN]
  ]).it('passes when not given a string: %s', given => {
    expect(given).not.toBeString();
  });

  it('fails when given a string', () => {
    expect(() => expect('a string').not.toBeString()).toThrowErrorMatchingSnapshot();
  });
});
