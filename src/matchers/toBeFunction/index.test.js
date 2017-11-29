import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeFunction', () => {
  test('passes when given a function', () => {
    expect(() => {}).toBeFunction();
  });

  test('fails when not given a function', () => {
    expect(() => expect(false).toBeFunction()).toThrowErrorMatchingSnapshot();
  });
});

describe('.not.toBeFunction', () => {
  each([[false], [''], [0], [{}], [[]], [undefined], [null], [NaN]]).test(
    'passes when not given a function: %s',
    given => {
      expect(given).not.toBeFunction();
    }
  );

  test('fails when given a function', () => {
    expect(() => expect(() => {}).not.toBeFunction()).toThrowErrorMatchingSnapshot();
  });
});
