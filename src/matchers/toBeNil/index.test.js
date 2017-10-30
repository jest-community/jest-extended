import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeNil', () => {
  it('passes when null is given', () => {
    expect(null).toBeNil();
  });

  it('passes when undefined is given', () => {
    expect(undefined).toBeNil();
  });
  it('fails when the value is not null or undefined', () => {
    expect(() => expect('value').toBeNil()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNil', () => {
  each([['true'], [{}], [true]]).it('passes when value is not null or undefined : %s', given => {
    expect(given).not.toBeNil();
  });

  it('fails when null is given', () => {
    expect(() => expect(null).not.toBeNil()).toThrowErrorMatchingSnapshot();
  });
});
