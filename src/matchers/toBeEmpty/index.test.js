import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeEmpty', () => {
  it('passes when given empty', () => {
    expect('').toBeEmpty();
  });

  it('passes when empty array is given', () => {
    expect([]).toBeEmpty();
  });

  it('passes when empty object is given', () => {
    expect({}).toBeEmpty();
  });
});

describe('.not.toBeEmpty', () => {
  each([
    ['true'],
    [{'hello':'world'}],
    [['hello', 'world']],
    [undefined],
    [null],
    [NaN]
  ]).it('passes when item is not empty or size>0: %s', given => {
    expect(given).not.toBeEmpty();
  });
});
