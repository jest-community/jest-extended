import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeNil', () => {
  test('passes when null is given', () => {
    expect(null).toBeNil();
  });

  test('passes when undefined is given', () => {
    expect(undefined).toBeNil();
  });
  test('fails when the value is not null or undefined', () => {
    expect(() => expect('value').toBeNil()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeNil', () => {
  each([['true'], [{}], [true]]).test('passes when value is not null or undefined : %s', given => {
    expect(given).not.toBeNil();
  });

  test('fails when null is given', () => {
    expect(() => expect(null).not.toBeNil()).toThrowErrorMatchingSnapshot();
  });
});
