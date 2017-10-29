import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeEmpty', () => {
  test('passes when given empty', () => {
    expect('').toBeEmpty();
  });

  test('passes when empty array is given', () => {
    expect([]).toBeEmpty();
  });

  test('passes when empty object is given', () => {
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
  ]).test('passes when item is not empty or size>0: %s', given => {
    expect(given).not.toBeEmpty();
  });
});
