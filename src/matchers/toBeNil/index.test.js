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
  it('fails when not undefined is given', () => {
    expect(() => expect('value').toBeNil()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNil', () => {
  each([
    ['true'],
    [{}]
  ]).it('passes when item is not null or undefined : %s', given => {
    expect(given).not.toBeNil();
  });

  it('pass when undefined is given', () => {
    expect(() => expect(null).not.toBeNil()).toThrowErrorMatchingSnapshot();
  });
});
