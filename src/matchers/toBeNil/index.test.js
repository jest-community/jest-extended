import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeNil', () => {
  it('passes when given null', () => {
    expect(null).toBeNil();
  });

  it('passes when undefined is given', () => {
    expect(undefined).toBeNil();
  });
});

describe('.not.toBeNil', () => {
  each([
    ['true'],
    [{'hello':'world'}],
    [['hello', 'world']]
  ]).it('passes when item is not null or undefined : %s', given => {
    expect(given).not.toBeNil();
  });
});
